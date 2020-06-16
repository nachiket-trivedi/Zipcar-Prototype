var express = require("express");
var router = express.Router();
var Drivers = require("../models/drivers");
var Admins = require("../models/admins");
var Bookings=require('../models/bookings');
var Companies=require('../models/companies');
var Locations=require('../models/locations');
var Vehicles=require('../models/vehicles');
var VehicleTypes=require('../models/vehicleTypes');
var passport = require('passport');

require('../config/passport')(passport);
var requireAuth = passport.authenticate('jwt', {session: false});

// sends back all location details
router.get("/locations", async(req, res) => {
  console.log('Inside get /driver/locations');
  let allLocations = await Locations.find({});
  if(allLocations){
    res.status(200).send(allLocations);
  } else {
    res.status(400).send('Database Error');
  }
});

// need pickup location id to search for availability of vehicles in the location
// driver id is _id of driver
// length of rental in hours
// default status during booking will be "upcoming"
// dropLocation field in booking to be populated when driver hits endBooking api
router.post("/createBooking", async(req, res) => {
  console.log('Inside post of /driver/createBooking');
  console.log(req.body);

  let vehicleAvailable = await Vehicles.findOne({location:req.body.locationId, type: { $regex: "^" + req.body.type + "$", $options: "i" }, status: "Available"});
  if(vehicleAvailable){
    console.log('Vehicle Present in desired location');
    let bookingToCreate = Bookings({
      driverId: req.body.driverId,
      pickUpLocation: req.body.locationId,
      vehicleType: vehicleAvailable.type,
      pickupTime: req.body.pickupTime,
      lengthOfRental: Math.round(parseFloat(req.body.lengthOfRental)),
      vehicleId: vehicleAvailable._id,
    });
    let createdBooking = await bookingToCreate.save();
    if(createdBooking){
      vehicleAvailable.status = 'Booked';
      let updateVehicleStatus = await vehicleAvailable.save();
      if(updateVehicleStatus){
        res.status(200).send('BOOKING_CREATED');
      } else{
        console.log('Booking Created but problem in updating vehicle status to booked');
        res.status(500).send('INTERNAL_SERVER_ERROR');
      }
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
  } else {
    console.log('Vehicle not present in desired location. Searching in nearby locations');

    let desiredLocationDetails = await Locations.findById(req.body.locationId);
    if(desiredLocationDetails){
      let allRentalLocations = await Locations.find({});
      if(allRentalLocations){
        // sorting rentalLocations based on zipcode to get & search on nearest locations first
        allRentalLocations.sort(function(e1,e2){
          if(Math.abs(e1.zipcode - desiredLocationDetails.zipcode) <= Math.abs(e1.zipcode - desiredLocationDetails.zipcode))
          {
            return -1;
          } else {
            return 1;
          }
        });

        let vehicleDetails = '';
        let rentalLocationDetails = '';
        for(let eachNearByLocation of allRentalLocations){
          let similarVehicleAvailable = await Vehicles.findOne({location:eachNearByLocation._id, type: { $regex: "^" + req.body.type + "$", $options: "i" }, status: "Available"});
          if(similarVehicleAvailable){
            vehicleDetails = similarVehicleAvailable;
            rentalLocationDetails = eachNearByLocation;
            break;
          }
        }
        if(vehicleDetails !== ''){
          console.log('Similar Vehicle Found in Nearby location with details below');
          console.log(rentalLocationDetails);
          let bookingToCreate = Bookings({
            driverId: req.body.driverId,
            pickUpLocation: rentalLocationDetails._id,
            vehicleType: vehicleDetails.type,
            pickupTime: req.body.pickupTime,
            lengthOfRental: Math.round(parseFloat(req.body.lengthOfRental)),
            vehicleId: vehicleDetails._id,
          });
          let createdBooking = await bookingToCreate.save();
          if(createdBooking){
            vehicleDetails.status = 'Booked';
            let updateVehicleStatus = await vehicleDetails.save();
            if(updateVehicleStatus){
              res.status(201).send(rentalLocationDetails);
            } else {
              console.log('Booking Created In Nearby Location but problem in updating vehicle status to booked');
              res.status(500).send('INTERNAL_SERVER_ERROR');
            }
          } else {
            res.status(500).send('INTERNAL_SERVER_ERROR');
          }
        } else {
          res.status(400).send('No Locations Found');
        }
      } else {
        res.status(500).send('INTERNAL_SERVER_ERROR');
      }
    } else {
      res.status(400).send('Desired Location Not Found');
    }
  }

});

// expects id which is booking _id
router.post("/cancelBooking", async(req, res) => {
  console.log('Inside /driver/cancelBooking');
  console.log(req.body);

  let bookingToCancel = await Bookings.findById(req.body.id);
  if(bookingToCancel){
    let cancelTime = new Date();
    let pickupTime = new Date(bookingToCancel.pickupTime);

    // difference in dates comes in milliseconds. So dividing by 60*60*1000 to get in hours
    let hoursDiff = Math.abs((cancelTime - pickupTime)/(60*60*1000));
    if(hoursDiff >= 1) {
      console.log('No Late Cancellation Fee');
      bookingToCancel.status = "past";
      bookingToCancel.dropLocation = bookingToCancel.pickUpLocation;
      bookingToCancel.actualDropTime = cancelTime.getFullYear()+'-'+((cancelTime.getMonth()+1)<10?('0'+(cancelTime.getMonth()+1)):(cancelTime.getMonth()+1))+'-'+(cancelTime.getDate()<10?'0'+cancelTime.getDate():cancelTime.getDate())+' '+(cancelTime.getHours()<10?'0'+cancelTime.getHours():cancelTime.getHours())+':'+cancelTime.getMinutes();
      bookingToCancel.actualLengthOfRental = "0";
      bookingToCancel.rentFee = "0";
      bookingToCancel.lateFee = "0";

      let updatedBooking = await bookingToCancel.save();
      if(updatedBooking){
        let updatedVehicleStatus = await Vehicles.findByIdAndUpdate(bookingToCancel.vehicleId,{ $set: { status: 'Available' }});
        if(updatedVehicleStatus){
          res.status(200).send('CANCELLED');
        } else {
          console.log('Error in updating booked vehicle status to Available in case of no late fee');
          res.status(500).send('INTERNAL_SERVER_ERROR');
        }
      } else {
        console.log('Error in updating Booking when no late fee');
        res.status(500).send('INTERNAL_SERVER_ERROR');
      }
    } else {
      console.log('Late Cancellation Fee will be incurred');
      let vehicleInvolved = await Vehicles.findById(bookingToCancel.vehicleId);
      if(vehicleInvolved){
        // making use of assumption that an admin can only create vehicle type with unique case insensitive name
        let vehicleTypeInvolved = await VehicleTypes.findOne({createBy:vehicleInvolved.createdBy,name:vehicleInvolved.type});
        if(vehicleTypeInvolved){
          bookingToCancel.status = "past";
          bookingToCancel.dropLocation = bookingToCancel.pickUpLocation;
          bookingToCancel.actualDropTime = cancelTime.getFullYear()+'-'+((cancelTime.getMonth()+1)<10?('0'+(cancelTime.getMonth()+1)):(cancelTime.getMonth()+1))+'-'+(cancelTime.getDate()<10?'0'+cancelTime.getDate():cancelTime.getDate())+' '+(cancelTime.getHours()<10?'0'+cancelTime.getHours():cancelTime.getHours())+':'+cancelTime.getMinutes();
          bookingToCancel.actualLengthOfRental = "0";
          bookingToCancel.rentFee = "0";
          bookingToCancel.lateFee = ""+vehicleTypeInvolved.lateCancellationCharge;

          let updatedBooking = await bookingToCancel.save();
          if(updatedBooking){
            let updatedVehicleStatus = await Vehicles.findByIdAndUpdate(bookingToCancel.vehicleId,{ $set: { status: 'Available' }});
            if(updatedVehicleStatus){
              res.status(201).send('CANCELLED_WITH_LATE_FEE');
            } else {
              console.log('Error in updating booked vehicle status to Available in case of late fee');
              res.status(500).send('INTERNAL_SERVER_ERROR');
            }
          } else {
            console.log('Error in updating Booking when no late fee');
            res.status(500).send('INTERNAL_SERVER_ERROR');
          }
        } else {
          console.log('Unable to fetch vehicle type details to get lateCancellationFee');
          res.status(500).send('INTERNAL_SERVER_ERROR');
        }
      } else {
        console.log('Unable to fetch vehicle details to get lateCancellationFee');
        res.status(500).send('INTERNAL_SERVER_ERROR');
      }
    }
  } else {
    res.status(400).send('BOOKING_NOT_FOUND');
  }
});

// can say when a driver comes to pick up the vehicle
// the admin can hit this api to start the booking and change status to ongoing and vehicle to InUse
router.post("/startBooking", async(req, res) => {
  console.log('Inside /driver/startBooking');
  console.log(req.body);

  let bookingToStart = await Bookings.findById(req.body.id);
  if(bookingToStart){
    
    let current = new Date();
    let pickUp = new Date(bookingToStart.pickupTime);
    if(current < pickUp) 
    {
      res.status(201).send('START_ONLY_AFTER_PICKUP_TIME');
    } 
    else {
      bookingToStart.status = "ongoing";
      let updatedBooking = await bookingToStart.save();
      if(updatedBooking){
        let updatedVehicleStatus = await Vehicles.findByIdAndUpdate(bookingToStart.vehicleId,{ $set: { status: 'InUse' }});
        if(updatedVehicleStatus){
          res.status(200).send('STARTED');
        } else {
          console.log('Error in updating booked vehicle status to InUse');
          res.status(500).send('INTERNAL_SERVER_ERROR');
        }
      } else {
        console.log('Error in updating Booking to ongoing');
        res.status(500).send('INTERNAL_SERVER_ERROR');
      }
    }
  } else {
    res.status(400).send('BOOKING_NOT_FOUND');
  }
});

// after driver has completed use, he/she will go to frontend, ongoing trip and select for endbooking.
// expects booking _id which is id
// dropLocationId which is _id where car is dropped.
router.post("/endBooking", async(req, res) => {
  console.log('Inside /driver/endBooking');
  console.log(req.body);

  let bookingToEnd = await Bookings.findById(req.body.id);
  if(bookingToEnd){
    let endTime = new Date();
    let pickupTime = new Date(bookingToEnd.pickupTime);

    // difference in dates comes in milliseconds. So dividing by 60*60*1000 to get in hours
    // rounding hoursDiff.
    // length of rentals to be rounded too.
    let hoursDiff = Math.round(Math.abs((endTime - pickupTime)/(60*60*1000)));

    let vehicleInvolved = await Vehicles.findById(bookingToEnd.vehicleId);
    if(vehicleInvolved){
      // making use of assumption that an admin can only create vehicle type with unique case insensitive name
      let vehicleTypeInvolved = await VehicleTypes.findOne({createBy:vehicleInvolved.createdBy,name:vehicleInvolved.type});
      if(vehicleTypeInvolved){
        if(bookingToEnd.lengthOfRental >= hoursDiff){
          bookingToEnd.status = "past";
          bookingToEnd.dropLocation = req.body.dropLocationId;
          bookingToEnd.actualDropTime = endTime.getFullYear()+'-'+((endTime.getMonth()+1)<10?('0'+(endTime.getMonth()+1)):(endTime.getMonth()+1))+'-'+(endTime.getDate()<10?'0'+endTime.getDate():endTime.getDate())+' '+(endTime.getHours()<10?'0'+endTime.getHours():endTime.getHours())+':'+endTime.getMinutes();
          bookingToEnd.actualLengthOfRental = ""+hoursDiff;
          bookingToEnd.rentFee = ""+(hoursDiff * vehicleTypeInvolved.hourlySlab[hoursDiff]);
          bookingToEnd.lateFee = ""+0;

          let updatedBooking = await bookingToEnd.save();
          if(updatedBooking){
            let updatedVehicleStatus = await Vehicles.findByIdAndUpdate(bookingToEnd.vehicleId,{ $set: { status: 'Available', location: req.body.dropLocationId}});
            if(updatedVehicleStatus){
              res.status(200).send(updatedBooking);
            } else {
              console.log('Error in updating booked vehicle status to Available in end Booking api');
              res.status(500).send('INTERNAL_SERVER_ERROR');
            }
          } else {
            console.log('Error in updating Booking in end Booking api');
            res.status(500).send('INTERNAL_SERVER_ERROR');
          }
        } else {
          bookingToEnd.status = "past";
          bookingToEnd.dropLocation = req.body.dropLocationId;
          bookingToEnd.actualDropTime = endTime.getFullYear()+'-'+((endTime.getMonth()+1)<10?('0'+(endTime.getMonth()+1)):(endTime.getMonth()+1))+'-'+(endTime.getDate()<10?'0'+endTime.getDate():endTime.getDate())+' '+(endTime.getHours()<10?'0'+endTime.getHours():endTime.getHours())+':'+endTime.getMinutes();
          bookingToEnd.actualLengthOfRental = ""+hoursDiff;
          bookingToEnd.rentFee = ""+(bookingToEnd.lengthOfRental * vehicleTypeInvolved.hourlySlab[bookingToEnd.lengthOfRental]);
          bookingToEnd.lateFee = ""+((hoursDiff - bookingToEnd.lengthOfRental)*(vehicleTypeInvolved.lateCharges));

          let updatedBooking = await bookingToEnd.save();
          if(updatedBooking){
            let updatedVehicleStatus = await Vehicles.findByIdAndUpdate(bookingToEnd.vehicleId,{ $set: { status: 'Available', location: req.body.dropLocationId}});
            if(updatedVehicleStatus){
              res.status(201).send(updatedBooking);
            } else {
              console.log('Error in updating booked vehicle status to Available in end Booking api with late delivery');
              res.status(500).send('INTERNAL_SERVER_ERROR');
            }
          } else {
            console.log('Error in updating Booking in end Booking api with late delivery');
            res.status(500).send('INTERNAL_SERVER_ERROR');
          }
        }
      } else {
        console.log('Unable to find vehicle type details involved in booking');
        res.status(400).send('VEHICLE_TYPE_NOT_FOUND');
      }
    } else {
      console.log('Unable to find vehicle details involved in booking');
      res.status(400).send('VEHICLE_NOT_FOUND');
    }
  } else {
    res.status(400).send('BOOKING_NOT_FOUND');
  }
});

// expects id which is booking _id
router.post("/cancelBooking", async(req, res) => {
  console.log('Inside /driver/cancelBooking');
  console.log(req.body);

  let bookingToCancel = await Bookings.findById(req.body.id);
  if(bookingToCancel){
    let cancelTime = new Date();
    let pickupTime = new Date(bookingToCancel.pickupTime);

    // difference in dates comes in milliseconds. So dividing by 60*60*1000 to get in hours
    let hoursDiff = Math.abs((cancelTime - pickupTime)/(60*60*1000));
    if(hoursDiff >= 1) {
      console.log('No Late Cancellation Fee');
      bookingToCancel.status = "past";
      bookingToCancel.dropLocation = bookingToCancel.pickUpLocation;
      bookingToCancel.actualDropTime = cancelTime.getFullYear()+'-'+((cancelTime.getMonth()+1)<10?('0'+(cancelTime.getMonth()+1)):(cancelTime.getMonth()+1))+'-'+(cancelTime.getDate()<10?'0'+cancelTime.getDate():cancelTime.getDate())+' '+(cancelTime.getHours()<10?'0'+cancelTime.getHours():cancelTime.getHours())+':'+cancelTime.getMinutes();
      bookingToCancel.actualLengthOfRental = "0";
      bookingToCancel.rentFee = "0";
      bookingToCancel.lateFee = "0";

      let updatedBooking = await bookingToCancel.save();
      if(updatedBooking){
        let updatedVehicleStatus = await Vehicles.findByIdAndUpdate(bookingToCancel.vehicleId,{ $set: { status: 'Available' }});
        if(updatedVehicleStatus){
          res.status(200).send('CANCELLED');
        } else {
          console.log('Error in updating booked vehicle status to Available in case of no late fee');
          res.status(500).send('INTERNAL_SERVER_ERROR');
        }
      } else {
        console.log('Error in updating Booking when no late fee');
        res.status(500).send('INTERNAL_SERVER_ERROR');
      }
    } else {
      console.log('Late Cancellation Fee will be incurred');
      let vehicleInvolved = await Vehicles.findById(bookingToCancel.vehicleId);
      if(vehicleInvolved){
        // making use of assumption that an admin can only create vehicle type with unique case insensitive name
        let vehicleTypeInvolved = await VehicleTypes.findOne({createBy:vehicleInvolved.createdBy,name:vehicleInvolved.type});
        if(vehicleTypeInvolved){
          bookingToCancel.status = "past";
          bookingToCancel.dropLocation = bookingToCancel.pickUpLocation;
          bookingToCancel.actualDropTime = cancelTime.getFullYear()+'-'+((cancelTime.getMonth()+1)<10?('0'+(cancelTime.getMonth()+1)):(cancelTime.getMonth()+1))+'-'+(cancelTime.getDate()<10?'0'+cancelTime.getDate():cancelTime.getDate())+' '+(cancelTime.getHours()<10?'0'+cancelTime.getHours():cancelTime.getHours())+':'+cancelTime.getMinutes();
          bookingToCancel.actualLengthOfRental = "0";
          bookingToCancel.rentFee = "0";
          bookingToCancel.lateFee = ""+vehicleTypeInvolved.lateCancellationCharge;

          let updatedBooking = await bookingToCancel.save();
          if(updatedBooking){
            let updatedVehicleStatus = await Vehicles.findByIdAndUpdate(bookingToCancel.vehicleId,{ $set: { status: 'Available' }});
            if(updatedVehicleStatus){
              res.status(201).send('CANCELLED_WITH_LATE_FEE');
            } else {
              console.log('Error in updating booked vehicle status to Available in case of late fee');
              res.status(500).send('INTERNAL_SERVER_ERROR');
            }
          } else {
            console.log('Error in updating Booking when no late fee');
            res.status(500).send('INTERNAL_SERVER_ERROR');
          }
        } else {
          console.log('Unable to fetch vehicle type details to get lateCancellationFee');
          res.status(500).send('INTERNAL_SERVER_ERROR');
        }
      } else {
        console.log('Unable to fetch vehicle details to get lateCancellationFee');
        res.status(500).send('INTERNAL_SERVER_ERROR');
      }
    }
  } else {
    res.status(400).send('BOOKING_NOT_FOUND');
  }
});


// expects driver's _id to fetch him/her all their bookings
router.post("/bookings", async(req, res) => {
  console.log('Inside /driver/bookings');
  console.log(req.body);

  let bookings = await Bookings.find({driverId:req.body.id});
  if(bookings){
    let result = []
    for(let each of bookings){
      let pickUpLocationInformation = await Locations.findById(each.pickUpLocation);
      let vehicleInformation = await Vehicles.findById(each.vehicleId);

      // since both will have _id, we would like to have _id of booking
      // _id of location can be get from booking's pickupLocation
      // thats why booking document spread later to overwrite earlier's _id
      result.push({rentalLocation:pickUpLocationInformation,
                  booking:each,
                  vehicle:vehicleInformation});
    }
    //console.log(result);
    res.status(200).send(result);
  } else {
    res.status(400).send('USER_NOT_FOUND');
  }
});


router.post("/search", async(req, res) => {
  console.log('Inside /driver/search');
  console.log(req.body);
  try{
    let vehicles = await Vehicles.find({});
    let result = [];
    for(let each of vehicles){
      let rentalLocationInformation = await Locations.findById(each.location);
      let vehicleTypeInformation = await VehicleTypes.findOne({name:each.type});

      // since both will have _id, we would like to have _id of booking
      // _id of location can be get from booking's pickupLocation
      // thats why booking document spread later to overwrite earlier's _id
      result.push({rentalLocation: rentalLocationInformation,
                  vehicle: each,
                  vehicleType: vehicleTypeInformation
                  });
    }
    res.status(200).send(result);
  } catch (err) {
    console.log('Error in /driver/search: '+err);
    res.status(500).send('DATABASE_ERROR');
  }
});

router.post("/getUser",async(req, res) =>  {
  console.log('Inside /driver/getUser');
  console.log(req.body);
    let result = await Drivers.findOne({email:req.body.email});
    if(result){
      res.status(200).send(result);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
})

// If a user has bookings associated (upcoming or ongoing), right now, we don't allow 
// his/her membership to get cancelled.
router.post("/terminateMembership",async(req, res) =>  {
  console.log('Inside /driver/terminateMembership');
  console.log("Hii Body:");
  console.log(req.body);
  try {//status: { $in: ["Booked","ongoing"]} }
    let book=false;
    let booking = await Bookings.findOne({driverId: req.body.id,  status:{$ne: 'past'} });
    if(booking){
      console.log(booking);
      console.log('User has booking associated. So cannot terminate membership');
      if(booking.status=="upcoming" || booking.status=="ongoing"){
        book=true;
        res.status(400).send('Bookings Associated');
      }else{
        console.log(booking);
      let result = await Drivers.findOne({_id:req.body.id});
      if(result){
        console.log(result);
        if(result.isActive=="true"){
          result.isActive = "false";
        }else{
          result.isActive = "true";
        }
        let updateResponse = await result.save();
        if(updateResponse){
          res.status(200).send('Updated');
        } else {
          res.status(500).send('Database Error');
        }
      }
    }
  }else{
    
      console.log(booking);
      let result = await Drivers.findOne({_id:req.body.id});
      if(result){
        console.log(result);
        if(result.isActive=="true"){
          result.isActive = "false";
        }else{
          result.isActive = "true";
        }
        let updateResponse = await result.save();
        if(updateResponse){
          res.status(200).send('Updated');
        } else {
          res.status(500).send('Database Error');
        }
  }
}
  } catch (err){
    res.status(500).send('Database Error');
  }


})

router.post("/getCompanyFee",async(req, res) =>  {
  console.log('Inside /admin/getCompanyFee');
  console.log(req.body);
    let result = await Companies.findOne({_id:"5eb09ac2c15dff0411fc7581"});
    if(result){
      res.status(200).send(result.memberShipFee);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
})

// send username or id in this api
router.post("/renewMembership",async(req, res) =>  {
  console.log('Inside /driver/renewMembership');
  console.log("Hii Body:");
  console.log(req.body);
  try {
    let result = null;
    if(req.body.username)
      result = await Drivers.findOne({username:req.body.username});
    else if(req.body.id)
      result = await Drivers.findById(req.body.id);
    console.log(result);
    if(result){
      console.log('Found user');
      let customDate = new Date();
      // mm/dd/yyyy format.
      // checking if end date lies in next year.
      let endDate = ((customDate.getMonth() + 7) < 10?('0'+(customDate.getMonth() + 7)):customDate.getMonth() + 7)+'/'+(customDate.getDate() < 10?'0'+customDate.getDate():customDate.getDate())+'/'+customDate.getFullYear();
      if((customDate.getMonth() + 7) > 12){
        endDate = ((customDate.getMonth() + 7 - 12) < 10?('0'+(customDate.getMonth() + 7 - 12)):customDate.getMonth() + 7 - 12)+'/'+(customDate.getDate() < 10?'0'+customDate.getDate():customDate.getDate())+'/'+(customDate.getFullYear() + 1);
      }
      result.registrationEndDate =endDate;
      let updateResponse = await result.save();
      if(updateResponse){
        res.status(200).send('Updated');
      } else {
        res.status(500).send('Database Error');
      }
    }else{
      res.status(500).send('Database Error');
    }
} catch (err){
  res.status(500).send('Database Error');
}
})


router.post("/apiname",requireAuth,function(req, res) {
})


module.exports = router;
