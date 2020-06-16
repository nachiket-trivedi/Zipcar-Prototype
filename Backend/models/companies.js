const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
assuming companyName to be unique.
*/
const CompanySchema = new Schema({
  companyName:{type:String,required:true},
  memberShipFee:{type:Number,required:true},
  companyCode:{type:String,required:true}
},{
  collection:"companies"
});

module.exports = mongoose.model('companies',CompanySchema,'companies');