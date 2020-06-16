const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
hourlySlab will be an hourly indexed array of numbers
which will tell if vehicle rented for 5 hours, what is the price hourlySlab[5 or 4] will tell the price
createBy will contain admin email id
*/
const VehicleTypeSchema = new Schema({
  createBy:{type:String,required:true},
  name:{type:String,required:true},
  hourlySlab:[Number],
  lateCharges:{type:Number, required:true},
  lateCancellationCharge:{type:Number,required:true},
},{
  collection:'vehicleTypes'
});

module.exports = mongoose.model('vehicleTypes',VehicleTypeSchema,'vehicleTypes');