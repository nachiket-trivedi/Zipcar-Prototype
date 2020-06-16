const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  username:{type:String,required:true},
  password:{type:String,required:true},
  email:{type:String, required:true},
  mobile:{type:String,required:true},
  name:{type:String,required:true},
  companyId:{type:String,required:true},
  stateId:{type:String,required:true}
},{
  collection:"admins"
});

module.exports = mongoose.model("admins", AdminSchema,"admins");
