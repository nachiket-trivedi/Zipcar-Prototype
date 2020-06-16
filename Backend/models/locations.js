const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// createBy will contain admin email id
const LocationSchema = new Schema({
  locationName:{type:String,required:true},
  street:{type:String, required:true},
  city:{type:String,required:true},
  state:{type:String,required:true},
  zipcode:{type:Number,required:true},
  capacity:{type:Number,required:true},
  createBy:{type:String,required:true}
},{
  collection:'locations'
});

module.exports = mongoose.model('locations',LocationSchema,'locations');