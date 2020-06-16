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

router.get("/all",async(req, res) => {
  console.log('Inside /company/all');
  let result = await Companies.find({});
  console.log(result);
  if(result){
    res.status(200).send(result);
  } else {
    res.status(500).send('INTERNAL_SERVER_ERROR');
  }
})

module.exports = router;