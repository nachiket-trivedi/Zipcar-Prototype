var express = require("express");
var router = express.Router();
var Drivers = require("../models/drivers");
var Admins = require("../models/admins");
var Companies = require("../models/companies");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const config = require('../config');


router.post("/driverLogin", function(req, res) {
  console.log("Inside Driver Login");
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  var resMsg = "";
  var uname;
  var pkg;
  let passwordInDb = "";

  Drivers.find({ username: username }, function(err, result, fields) {
    if (err) {
      res.send({msg:'Database Error'});
    }
    console.log(result);
    if (result != null && result.length > 0) {
      if(result[0].isActive === 'true'){
        let todayDate = new Date();

        let userEndDateArray = result[0].registrationEndDate.split("/");
        let userEndDate = new Date(userEndDateArray[2]+'-'+userEndDateArray[0]+'-'+userEndDateArray[1]);

        if(userEndDate >= todayDate){
          uname = result[0].name;
          console.log(uname);
          passwordInDb = result[0].password;
          console.log(passwordInDb);
          bcrypt.compare(password, passwordInDb, function(err, resp) {
            if (resp) {
              console.log("alaukika logs in!Hahaha");
              resMsg = "Login Successful";
              var token = {
                username: username,
                email: result[0].email,
                user: "driver"
              };

              var signed_token = jwt.sign(token, config.secret, {
                expiresIn: 86400 // in seconds
              });

              pkg = {
                id: result[0]._id,
                msg: resMsg,
                name: uname,
                email: result[0].email,
                token: signed_token
              };
              console.log(pkg);
              res.send(JSON.stringify(pkg));
              res.end("Successful Login");
            } else {
              resMsg = "Invalid Password";
              pkg = {
                msg: resMsg
              };
              console.log(pkg);
              res.send(JSON.stringify(pkg));
              res.end("Unsuccessful Login");
            }
          });
        } else {
          /*
            We can also say here, like user is active, like user did not cancel membership
            admin did not cancel user membership
            But account endDate got crossed, so isActive will still be true
            we can redirect user using below message to a page where user renews membership
            on click of that, end date gets updated in db and user can login again.
          */
          console.log('User account has expired');
          pkg = {
            msg: "Account Expired"
          };
          console.log(pkg);
          res.send(JSON.stringify(pkg));
          res.end("Unsuccessful Login");
        }
      } else {
        pkg = {
          msg: "Not a active User!"
        };
        console.log(pkg);
        res.send(JSON.stringify(pkg));
        res.end("Unsuccessful Login");
      }
    } else {
      pkg = {
        msg: "User not Found!"
      };
      console.log(pkg);
      res.send(JSON.stringify(pkg));
      res.end("Unsuccessful Login");
    }
  });
});

router.post("/adminLogin", function(req, res) {
  console.log("Inside Admin Login /users/adminLogin");
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  var resMsg = "";
  var uname;
  var pkg;
  let passwordInDb = "";

  Admins.find({ username: username }, function(err, result, fields) {
    if (err) {
      console.log('Database Error: '+err);
      res.send({msg:'Database Error'});
    }
    console.log(result);
    if (result != null && result.length > 0) {
      uname = result[0].name;
      console.log(uname);
      passwordInDb = result[0].password;
      console.log(passwordInDb);
      bcrypt.compare(password, passwordInDb, function(err, resp) {
        if (resp) {
          console.log("alaukika logs in!Hahaha");
          resMsg = "Login Successful";
          var token = {
            username: username,
            email: result[0].email,
            user: "admin"
          };

          var signed_token = jwt.sign(token, config.secret, {
            expiresIn: 86400 // in seconds
          });
          pkg = {
            id: result[0]._id,
            msg: resMsg,
            name: uname,
            email: result[0].email,
            token: signed_token
          };
          console.log(pkg);
          res.send(JSON.stringify(pkg));
          res.end("Successful Login");
        } else {
          resMsg = "Invalid Password";
          pkg = {
            msg: resMsg
          };
          res.send(JSON.stringify(pkg));
          res.end("Unsuccessful Login");
        }
      });
    } else {
      pkg = {
        msg: "User not Found!"
      };
      console.log(pkg);
      res.send(JSON.stringify(pkg));
      res.end("Unsuccessful Login");
    }
  });
});

router.post("/adminSignup", async(req, res) => {
  console.log('Inside /users/adminSignup');
  console.log(req.body);
  var found = false;
  var respmsg = "";

  let companyCodeCheck = await Companies.findOne({_id:req.body.companyId, companyCode: req.body.companyCode});

  if(companyCodeCheck){
    var admin = Admins({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.name,
      mobile: req.body.mobile,
      companyId: req.body.companyId,
      stateId: req.body.stateId
    });
    Admins.find({ username: req.body.username }, function(err, result, fields) {
      if (result.length > 0) {
        found = true;
      }
      console.log("Admin found or not: " + found);
      if (found) {
        respmsg = "Email Already in Use!";
        var pkg = {
          resmsg: respmsg
        };
        console.log(pkg);
        res.send(JSON.stringify(pkg));
      } else {
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
          admin.password = hash;
          admin.save(function(error, result) {
            if (error) {
              console.log(error);
              respmsg = "Error in adding!";
              var pkg = {
                resmsg: respmsg
              };
              console.log(pkg);
              res.send(JSON.stringify(pkg));
            } else {
              console.log("Howdyyy");
              respmsg = "Admin Registered Successfully!";
              var token = {
                username: result.username,
                email: result.email,
                user: "admin"
              };
              var signed_token = jwt.sign(token, config.secret, {
                expiresIn: 86400 // in seconds
              });
              var pkg = {
                resmsg: respmsg,
                token: signed_token
              };
              console.log(pkg);
              res.send(JSON.stringify(pkg));
            }
          });
        });
      }
    });
  } else {
    res.send({resmsg:'Invalid code'});
  }
});

router.post("/driverSignup", function(req, res) {
  console.log('Inside /users/driverSignup');
  console.log(req.body);

  let creditCardDetails = new Map();

  creditCardDetails.set('123456789012345',{number:"123456789012345",name:"Sarthak",expiration:"10/20",cvv:"100"});
  creditCardDetails.set('123456789067890',{number:"123456789067890",name:"Nachiket",expiration:"10/20",cvv:"100"});
  creditCardDetails.set('111112222233333',{number:"111112222233333",name:"Amit",expiration:"10/20",cvv:"100"});
  creditCardDetails.set('444445555566666',{number:"444445555566666",name:"Alaukika",expiration:"10/20",cvv:"100"});

  var found = false;
  var respmsg = "";

  //Write code to check if company code in request matches the company code in the Company Table
  var driver = Drivers({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    name: req.body.name,
    mobile: req.body.mobile,
    licenseState: req.body.licenseState,
    licenseNumber: req.body.licenseNumber,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    creditCardInfo: req.body.creditCardInfo,
    isActive: "true",
    registrationDate: req.body.registrationDate, // mm/dd/yyyy format
    registrationEndDate: req.body.registrationEndDate // mm/dd/yyyy format
  });
  Drivers.find({ username: req.body.username }, function(err, result, fields) {
    if (result.length > 0) {
      found = true;
    }
    console.log("Driver found or not: " + found);
    if (found) {
      respmsg = "Email Already in Use!";
      var pkg = {
        resmsg: respmsg
      };
      console.log(pkg);
      res.send(JSON.stringify(pkg));
    } else {
      if(req.body.creditCardInfo && req.body.creditCardInfo.number && creditCardDetails.has(req.body.creditCardInfo.number)){
        let card = creditCardDetails.get(req.body.creditCardInfo.number);
        if(card.number === req.body.creditCardInfo.number && card.name === req.body.creditCardInfo.name && card.expiration === req.body.creditCardInfo.expiration && card.cvv === req.body.creditCardInfo.cvv){
          bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            driver.password = hash;
            driver.save(function(error, result) {
              if (error) {
                console.log(error);
                respmsg = "Error in adding!";
                var pkg = {
                  resmsg: respmsg
                };
                console.log(pkg);
                res.send(JSON.stringify(pkg));
              } else {
                console.log("Howdyyy");
                respmsg = "Driver Registered Successfully!";
                var token = {
                  username: result.username,
                  email: result.email,
                  user: "driver"
                };
                var signed_token = jwt.sign(token, config.secret, {
                  expiresIn: 86400 // in seconds
                });
                var pkg = {
                  resmsg: respmsg,
                  token: signed_token
                };
                console.log(pkg);
                res.send(JSON.stringify(pkg));
              }
            });
          });
        } else {
          res.send({resmsg:"Invalid Card Details"});
        }
      } else {
        res.send({resmsg:"Invalid Card Details"});
      }
    }
  });
});

/*
Create a company document using Postman.
*/
router.post("/companySignup", async(req, res) => {
  console.log('Inside /users/companySignup');
  console.log(req.body);

  let user = await Companies.findOne({companyName:{'$regex':'^'+req.body.companyName+'$',$options:'i'}});
  if(user){
    res.status(400).send('NAME_ALREADY_EXIST');
  } else {
    let companyToCreate = '';
    companyToCreate = Companies({
      companyName: req.body.companyName,
      memberShipFee: parseFloat(req.body.memberShipFee),
      companyCode: req.body.companyCode
    });

    let savedUser = await companyToCreate.save();
    if(savedUser){
      console.log('Successfully Created Company');
      res.status(200).send("COMPANY_CREATED");
    } else {
      console.log(`Saving Error in companySignup: ${error}`);
      res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  }

});

module.exports = router;
