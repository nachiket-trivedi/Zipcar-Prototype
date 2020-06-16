const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// vehicleId is _id of vehicle
// driverId is _id of driver
// pickup location is _id of location.
// vehicle type name of type - like Small Car, Full Size Car, Truck etc

const BookingSchema = new Schema({
  driverId:{type:String,required:true},
  pickUpLocation:{type:String,required:true},
  vehicleType:{type:String,required:true},
  pickupTime:{type:String,required:true}, // send date time in this format from frontend "2011-07-14 14:23"
  lengthOfRental:{type:Number,required:true},
  status:{type:String,default:"upcoming"},
  vehicleId:{type:String,required:true},
  dropLocation:{type:String,default:""},
  actualDropTime:{type:String,default:""}, // send date time in this format from frontend "2011-07-14 14:23"
  actualLengthOfRental:{type:String,default:""}, // populate in backend using diff in hours of current time to pickUpTime
  rentFee:{type:String,default:""}, // populate in backend when vehicle dropped (lengthOfRental * slab of vehicleType - select that vehicleType where createdBy of vehicle matches createdBy of vehicleType to ensure we are using slab created by an admin whose vehicle we used)
  lateFee:{type:String,default:""} // populate in backend when vehicle dropped (actualHours - originalHours * lateCharges of vehicleType - select that vehicleType where createdBy of vehicle matches createdBy of vehicleType to ensure we are using slab created by an admin whose vehicle we used)
},{
  collection:"bookings"
});

module.exports = mongoose.model('bookings',BookingSchema,'bookings');
