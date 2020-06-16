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

router.post('/createVehicleType', async(req, res) => {
  console.log('Inside post /admin/createVehicleType');
  console.log(req.body);

  // Checking if vehicle type already present
  // cannot create two vehicle type with same name
  let alreadyPresentVehicleType = await VehicleTypes.findOne({name: { $regex: "^" + req.body.name + "$", $options: "i" }});

  if(alreadyPresentVehicleType){
    res.status(200).send('Already Present');
  } else {
    let slab = Array(73).fill(0);
    slab = slab.fill(parseFloat(req.body.slab1),0,6);
    slab = slab.fill(parseFloat(req.body.slab2),6,11);
    slab = slab.fill(parseFloat(req.body.slab3),11,16);
    slab = slab.fill(parseFloat(req.body.slab4),16,21);
    slab = slab.fill(parseFloat(req.body.slab5),21,25);
    slab = slab.fill(parseFloat(req.body.slab6),25,35);
    slab = slab.fill(parseFloat(req.body.slab7),35,45);
    slab = slab.fill(parseFloat(req.body.slab8),45,61);
    slab = slab.fill(parseFloat(req.body.slab9),61,73);

    let vehicleTypeToCreate = VehicleTypes({
      createBy: req.body.emailId,
      name: req.body.name,
      lateCharges: parseFloat(req.body.lateCharges),
      lateCancellationCharge: parseFloat(req.body.lateCancellationCharge),
      hourlySlab: slab
    });

    let savedVehicleType = await vehicleTypeToCreate.save();
    if(savedVehicleType){
      console.log('Successfully Created Vehicle Type');
      res.status(200).send("VEHICLE_TYPE_CREATED");
    } else {
      console.log(`Saving Error in create Vehicle Type: ${error}`);
      res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  }
});

// To delete a rental location
router.post('/deleteRentalLocation', async(req, res) => {
  console.log('Inside /admin/deleteRentalLocation');
  console.log(req.body);

  let vehiclesPresentInLocation = await Vehicles.findOne({location: req.body.id});
  if(vehiclesPresentInLocation){
    res.status(200).send('Vehicles Present');
  } else {
    // to delete rental location
    let rentalLocationToDelete = await Locations.findByIdAndDelete(req.body.id);
    if(rentalLocationToDelete){
      console.log('Removed following document from mongoose');
      console.log(rentalLocationToDelete);
      res.status(200).send('DELETED');
    } else {
      res.status(500).send('Database Error');
    }
  }
})


// expects _id of vehicleType in id
// name of vehicle type such as Small Car, Luxury Car etc
// emailId of admin who created the vehicle Type
router.post('/deleteVehicleType', async(req, res) => {
  console.log('Inside /admin/deleteVehicleType');
  console.log(req.body);

  //let vehiclePresent = await Vehicles.findOne({type: req.body.name, createdBy: req.body.emailId});
  let vehiclePresent = await Vehicles.findOne({type: req.body.name});
  if(vehiclePresent){
    console.log(vehiclePresent);
    res.status(400).send('VEHICLES_PRESENT');
  } else {
    let vehicleTypeToDelete = await VehicleTypes.findOneAndDelete({_id:req.body.id, createBy: req.body.emailId});
    if(vehicleTypeToDelete){
      console.log('Removed following document from mongoose');
      console.log(vehicleTypeToDelete);
      res.status(200).send('DELETED');
    } else {
      res.status(500).send('Database Error');
    }
  }
});

router.post('/getVehicleTypes', async(req, res) => {
  console.log('Inside post /admin/getVehicleTypes');
  console.log(req.body);
  if(req.body.emailId){
    let result = await VehicleTypes.find({createBy: req.body.emailId});
    if(result){
      res.status(200).send(result);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
  } else {
    let result = await VehicleTypes.find({});
    if(result){
      res.status(200).send(result);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
  }
});


router.post('/createVehicle', async(req, res) => {
  console.log('Inside /admin/createVehicle');
  console.log(req.body);

  let alreadyPresentVehicle = await Vehicles.findOne({registrationTag: req.body.registrationTag});
  if(alreadyPresentVehicle){
    res.status(400).send('Already Present');
  } else {
    let totalVehiclesInLocation = await Vehicles.find({location: req.body.location});
    if(totalVehiclesInLocation)
    {
      let totalVehicles = totalVehiclesInLocation.length;
      let rentalLocation = await Locations.findById(req.body.location);
      if(rentalLocation){
        let locationCapacity = rentalLocation.capacity;
        if(totalVehicles + 1 > locationCapacity){
          console.log('Rental Location Total Capacity Reached');
          res.status(400).send('Capacity Reached');
        } else {
          let vehicleToCreate = Vehicles({
            model: req.body.model,
            makeYear: parseInt(req.body.makeYear),
            registrationTag: req.body.registrationTag,
            currentMileage: parseFloat(req.body.currentMileage),
            serviceDate: req.body.serviceDate, // mm/dd/yyyy format
            condition: req.body.condition,
            type: req.body.type,
            location: req.body.location, // locations _id
            createdBy: req.body.emailId,
            primaryLocation: req.body.location
          });
      
          let savedVehicle = await vehicleToCreate.save();
          if(savedVehicle){
            console.log('Successfully Created Vehicle');
            res.status(200).send("VEHICLE_CREATED");
          } else {
            console.log(`Saving Error in create vehicle: ${error}`);
            res.status(500).send("INTERNAL_SERVER_ERROR");
          }
        }
      } else {
        console.log(`Location finding error in create vehicle: ${error}`);
        res.status(500).send("INTERNAL_SERVER_ERROR");
      }
    } else {
      console.log(`Vehicles finding Error in create vehicle: ${error}`);
      res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  }
});



// accepts _id of vehicle type we want to update.
// along with other parameters sent during createVehicleType except Vehicle Type Name
// vehicle type name being used in vehicles (type field). So not allowing to update vehicle type name
router.post('/updateVehicleType', async(req, res) => {
  console.log('Inside post /admin/updateVehicleType');
  console.log(req.body);

  let vehicleType = await VehicleTypes.findById(req.body.id);
  if(vehicleType){
    let slab = Array(73).fill(0);
    slab = slab.fill(parseFloat(req.body.slab1),0,6);
    slab = slab.fill(parseFloat(req.body.slab2),6,11);
    slab = slab.fill(parseFloat(req.body.slab3),11,16);
    slab = slab.fill(parseFloat(req.body.slab4),16,21);
    slab = slab.fill(parseFloat(req.body.slab5),21,25);
    slab = slab.fill(parseFloat(req.body.slab6),25,35);
    slab = slab.fill(parseFloat(req.body.slab7),35,45);
    slab = slab.fill(parseFloat(req.body.slab8),45,61);
    slab = slab.fill(parseFloat(req.body.slab9),61,73);
    
    vehicleType.lateCharges = parseFloat(req.body.lateCharges);
    vehicleType.lateCancellationCharge = parseFloat(req.body.lateCancellationCharge);
    vehicleType.hourlySlab = slab;
    
    let savedVehicleType = await vehicleType.save();
    if(savedVehicleType){
      console.log('Successfully updated Vehicle Type');
      res.status(200).send("VEHICLE_TYPE_UPDATED");
    } else {
      console.log(`Saving Error in update Vehicle Type: ${error}`);
      res.status(500).send("INTERNAL_SERVER_ERROR");
    }

  } else {
    console.log('Vehicle Type not found');
    res.status(400).send('Not found');
  }
})



router.post('/deleteVehicle', async(req, res) => {
  console.log('Inside /admin/deleteVehicle');
  console.log(req.body);

  try {
    // since on dropping a booking, actualLengthOfRental will be populated
    // could use booking status too, but needs manipulation regarding booking is upcoming, ongoing, or Past
    let booking = await Bookings.findOne({vehicleId: req.body.id, actualLengthOfRental:{$ne: ''}});
    if(booking){
      console.log('Bookings Associated');
      res.status(200).send('Bookings Associated');
    } else {
      let vehicleToDelete = await Vehicles.findOneAndDelete({_id:req.body.id, createdBy:req.body.emailId});
      if(vehicleToDelete){
        console.log('Removed following document from mongoose');
        console.log(vehicleToDelete);
        res.status(200).send('DELETED');
      } else {
        console.log('VEHICLE NOT FOUND');
        res.status(200).send('VEHICLE_NOT_FOUND');
      }
    }
  } catch (err){
    res.status(500).send('Database Error');
  }
});



router.post('/createRentalLocation', async(req, res) => {
  console.log('Inside post of /admin/createRentalLocation');
  console.log(req.body);

  let alreadyPresentRentalLocation = await Locations.findOne({locationName: { $regex: "^" + req.body.name + "$", $options: "i" }});

  if(alreadyPresentRentalLocation){
    res.status(200).send('Already Present');
  } else {
    let rentalLocationToCreate = Locations({
      locationName: req.body.name,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zipcode: parseInt(req.body.zipcode),
      capacity: parseInt(req.body.capacity),
      createBy: req.body.emailId,
    });

    let savedRentalLocation = await rentalLocationToCreate.save();
    if(savedRentalLocation){
      console.log('Successfully Created Rental Location');
      res.status(200).send("RENTAL_LOCATION_CREATED");
    } else {
      console.log(`Saving Error in create rental location: ${error}`);
      res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  }
});

router.post('/getRentalLocations', async(req, res)=>{
  console.log('Inside /admin/getRentalLocations');
  console.log(req.body);

  if(req.body.emailId){
    let result = await Locations.find({createBy: req.body.emailId});
    if(result){
      res.status(200).send(result);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
  } else {
    let result = await Locations.find({});
    if(result){
      res.status(200).send(result);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
  }
});


// accepts rental locations' _id
// checking if location has vehicles, then first reassign vehicles to some other location
// then delete.


// accepts location which is _id where this vehicle needs to be reassigned. 
// Pass same location if want to keep at parent location only.
// pass id of vehicle to update too
// in case driver wants to drop vehicle. Then dont send primaryLocation
// in case admin wants to change vehicles' primary location too in case of reassignment then definitely pass
// primary location
router.post('/updateVehicle', async(req, res) => {
  console.log('Inside /admin/updateVehicle');
  console.log(req.body);

  let vehicleToUpdate = await Vehicles.findOne({_id:req.body.id});
  //let vehicleToUpdate = await Vehicles.findById(req.body.id);
  if(vehicleToUpdate){
    // checking for number of vehicles in new (in case of reassignment) location
    let totalVehiclesInLocation = await Vehicles.find({location: req.body.location});
    if(totalVehiclesInLocation)
    {
      let totalVehicles = totalVehiclesInLocation.length;
      // checking for capacity of the new (in case of reassignment) location.
      let rentalLocation = await Locations.findById(req.body.location);
      if(rentalLocation){
        let locationCapacity = rentalLocation.capacity;

        // if different location & capacity full of new location
        if((req.body.location !== vehicleToUpdate.location) && (totalVehicles + 1 > locationCapacity)){
          console.log('Rental Location Total Capacity Reached');
          res.status(200).send('Capacity Reached');
        } else {
          vehicleToUpdate.model = req.body.model;
          vehicleToUpdate.makeYear = req.body.makeYear;
          vehicleToUpdate.registrationTag = req.body.registrationTag;
          vehicleToUpdate.currentMileage = req.body.currentMileage;
          vehicleToUpdate.serviceDate = req.body.serviceDate;
          vehicleToUpdate.condition = req.body.condition;
          vehicleToUpdate.type = req.body.type;
          vehicleToUpdate.location = req.body.location;
          
          if(req.body.primaryLocation) {
            vehicleToUpdate.primaryLocation = req.body.primaryLocation;
          }
          let savedVehicle = await vehicleToUpdate.save();
          if(savedVehicle){
            console.log('Successfully Updated Vehicle');
            res.status(200).send("VEHICLE_UPDATED");
          } else {
            console.log(`Saving Error in update vehicle: ${error}`);
            res.status(500).send("INTERNAL_SERVER_ERROR");
          }
        }
      } else {
        console.log(`Location finding error in update vehicle: ${error}`);
        res.status(500).send("INTERNAL_SERVER_ERROR");
      }
    } else {
      console.log(`Vehicles finding Error in update vehicle: ${error}`);
      res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  } else {
    console.log('Not Found');
    res.status(400).send('Not found');
  }
});


// expects _id of vehicle in id whose status we want to update
router.post('/updateVehicleStatus', async(req, res)=>{
  console.log('Inside /admin/updateVehicleStatus');
  console.log(req.body);

  let vehicleToUpdate = await Vehicles.findById(req.body.id);
  if(vehicleToUpdate.status === 'Booked' || vehicleToUpdate.status === 'InUse'){
    res.status(201).send('Vehicle associated with a booking');
  } else {
    vehicleToUpdate.status = req.body.status;
    let updateResponse = await vehicleToUpdate.save();
    if(updateResponse){
      res.status(200).send('Updated');
    } else {
      res.status(500).send('Database Error');
    }
  }
});


// To create a vehicle
router.post('/createVehicle', async(req, res) => {
  console.log('Inside /admin/createVehicle');
  console.log(req.body);

  let alreadyPresentVehicle = await Vehicles.findOne({registrationTag: req.body.registrationTag});
  if(alreadyPresentVehicle){
    res.status(400).send('Already Present');
  } else {
    let totalVehiclesInLocation = await Vehicles.find({location: req.body.location});
    if(totalVehiclesInLocation)
    {
      let totalVehicles = totalVehiclesInLocation.length;
      let rentalLocation = await Locations.findById(req.body.location);
      if(rentalLocation){
        //To define a location capacity
        let locationCapacity = rentalLocation.capacity;
        if(totalVehicles + 1 > locationCapacity){
          console.log('Rental Location Total Capacity Reached');
          res.status(400).send('Capacity Reached');
        } else {
          let vehicleToCreate = Vehicles({
            model: req.body.model,
            makeYear: parseInt(req.body.makeYear),
            registrationTag: req.body.registrationTag,
            currentMileage: parseFloat(req.body.currentMileage),
            serviceDate: req.body.serviceDate, // mm/dd/yyyy format
            condition: req.body.condition,
            type: req.body.type,
            location: req.body.location, // locations _id
            createdBy: req.body.emailId,
            primaryLocation: req.body.location
          });
      
          let savedVehicle = await vehicleToCreate.save();
          if(savedVehicle){
            console.log('Successfully Created Vehicle');
            res.status(200).send("VEHICLE_CREATED");
          } else {
            console.log(`Saving Error in create vehicle: ${error}`);
            res.status(500).send("INTERNAL_SERVER_ERROR");
          }
        }
      } else {
        console.log(`Location finding error in create vehicle: ${error}`);
        res.status(500).send("INTERNAL_SERVER_ERROR");
      }
    } else {
      console.log(`Vehicles finding Error in create vehicle: ${error}`);
      res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  }
});



//6 point on requirement need to discuss.
router.post('/getVehicles', async(req, res) => {
  console.log('Inside /admin/getVehicles');
  console.log(req.body);

  if(req.body.emailId && req.body.location){
    let result = await Vehicles.find({createdBy: req.body.emailId, location: req.body.location});
    if(result){
      let allInformation = [];
      for(let each of result){
        let rentalLocationInformation = await Locations.findById(each.location);
        let primaryLocationInformation = await Locations.findById(each.primaryLocation);
        let vehicleTypeInformation = await VehicleTypes.findOne({name:each.type});

        // since both will have _id, we would like to have _id of booking
        // _id of location can be get from booking's pickupLocation
        // thats why booking document spread later to overwrite earlier's _id
        allInformation.push({rentalLocation: rentalLocationInformation,
                              primaryLocation: primaryLocationInformation,
                              vehicle: each,
                              vehicleType: vehicleTypeInformation
                              });
      }
      res.status(200).send(allInformation);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
  } else if(req.body.emailId){
    let result = await Vehicles.find({createdBy: req.body.emailId});
    if(result){
      let allInformation = [];
      for(let each of result){
        let rentalLocationInformation = await Locations.findById(each.location);
        let primaryLocationInformation = await Locations.findById(each.primaryLocation);
        let vehicleTypeInformation = await VehicleTypes.findOne({name:each.type});

        // since both will have _id, we would like to have _id of booking
        // _id of location can be get from booking's pickupLocation
        // thats why booking document spread later to overwrite earlier's _id
        allInformation.push({rentalLocation: rentalLocationInformation,
                              primaryLocation: primaryLocationInformation,
                              vehicle: each,
                              vehicleType: vehicleTypeInformation
                              });
      }
      res.status(200).send(allInformation);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
  } else if(req.body.location){
    let result = await Vehicles.find({location: req.body.location});
    if(result){
      let allInformation = [];
      for(let each of result){
        let rentalLocationInformation = await Locations.findById(each.location);
        let primaryLocationInformation = await Locations.findById(each.primaryLocation);
        let vehicleTypeInformation = await VehicleTypes.findOne({name:each.type});

        // since both will have _id, we would like to have _id of booking
        // _id of location can be get from booking's pickupLocation
        // thats why booking document spread later to overwrite earlier's _id
        allInformation.push({rentalLocation: rentalLocationInformation,
                              primaryLocation: primaryLocationInformation,
                              vehicle: each,
                              vehicleType: vehicleTypeInformation
                              });
      }
      res.status(200).send(allInformation);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
  } else {
    let result = await Vehicles.find({});
    if(result){
      let allInformation = [];
      for(let each of result){
        let rentalLocationInformation = await Locations.findById(each.location);
        let primaryLocationInformation = await Locations.findById(each.primaryLocation);
        let vehicleTypeInformation = await VehicleTypes.findOne({name:each.type});

        // since both will have _id, we would like to have _id of booking
        // _id of location can be get from booking's pickupLocation
        // thats why booking document spread later to overwrite earlier's _id
        allInformation.push({rentalLocation: rentalLocationInformation,
                              primaryLocation: primaryLocationInformation,
                              vehicle: each,
                              vehicleType: vehicleTypeInformation
                              });
      }
      console.log(allInformation)
      res.status(200).send(allInformation);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
  }
});

router.post("/getAllUser",async(req, res) =>  {
  console.log('Inside /admin/getAllUser');
  console.log(req.body);
    let result = await Drivers.find({});
    if(result){
      res.status(200).send(result);
    } else {
      res.status(500).send('INTERNAL_SERVER_ERROR');
    }
})


router.post("/terminateMembership",async(req, res) =>  {
  console.log('Inside /admin/terminateMembership');
  console.log("Hii Body:");
  console.log(req.body);
  try {//status: { $in: ["Booked","ongoing"]} }
    let book=false;
    let booking = await Bookings.findOne({driverId: req.body.id,  status:{$ne: 'past'}});
    if(booking){
      console.log(booking);
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

router.post("/apiname",requireAuth,function(req, res) {
})



module.exports = router;
