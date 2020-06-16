const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  name:{type:String,required:true},
  username:{type:String, required:true},
  password:{type:String,required:true},
  licenseState:{type:String,required:true},
  licenseNumber:{type:String,required:true},
  email:{type:String,required:true},
  street:{type:String, required:true},
  city:{type:String,required:true},
  state:{type:String,required:true},
  zipcode:{type:Number,required:true},
  mobile:{type:String,required:true},
  creditCardInfo:{
    number:{type:String,required:true},
    name:{type:String,required:true},
    expiration:{type:String,required:true},
    cvv:{type:String,required:true}
  },
  isActive:{type:String,default:"true"},
  registrationDate:{type:String,required:true},
  registrationEndDate:{type:String,required:true}
},{
  collection:'drivers'
});

module.exports = mongoose.model('drivers',DriverSchema,'drivers');