const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  location is _id in locations collection
  createBy will be emailId of admins collection
  primaryLocation will be location when added to a rental location or moved to another location by admin
  registrationTag assumed to be unique. So before creation will do a findone on that.
*/
const VehicleSchema = new Schema({
  model:{type:String,required:true},
  makeYear:{type:Number,required:true},
  registrationTag:{type:String, required:true},
  currentMileage:{type:Number,required:true},
  serviceDate:{type:String,required:true},
  condition:{type:String,required:true},
  type:{type:String,required:true},
  location:{type:String, required:true},
  status:{type:String,default:"Available"}, // change to book on doing a booking. to in use when driver start a booking
  createdBy:{type:String,required:true},
  primaryLocation:{type:String,required:true}
},{
  collection:'vehicles'
});

module.exports = mongoose.model('vehicles',VehicleSchema,'vehicles');