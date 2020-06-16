var app = require('../index');
var chai = require('chai');
chai.use(require('chai-http'));
var expect = require('chai').expect;

var agent = require('chai').request.agent(app);

describe('ZipCar Rental', function(){

  it('GET /admin/getVehicleTypes - Verifying Vehicle Type count',function(done){
    agent.post('/admin/getVehicleTypes').send({})
        .then(function(res){
            // console.log(res.body);
            expect(res.body.length).to.equal(5);
            done();
        })
        .catch((e) => {
            done(e);
        });
  });

  it('GET /admin/getRentalLocations - Verifying Rental Locations count',function(done){
    agent.post('/admin/getRentalLocations').send({})
        .then(function(res){
            // console.log(res.body);
            expect(res.body.length).to.equal(5);
            done();
        })
        .catch((e) => {
            done(e);
        });
  });

  it('GET /admin/getVehicles - Verifying all Vehicles count',function(done){
    agent.post('/admin/getVehicles').send({})
        .then(function(res){
            // console.log(res.body);
            expect(res.body.length).to.equal(6);
            done();
        })
        .catch((e) => {
            done(e);
        });
  });

  it('GET /admin/getVehicles - Verifying Vehicles count at a Location',function(done){
    agent.post('/admin/getVehicles').send({"location":"5eb0ed316e7e620981f801cb"})
        .then(function(res){
            // console.log(res.body);
            expect(res.body.length).to.equal(4);
            done();
        })
        .catch((e) => {
            done(e);
        });
  });

  it('GET /admin/getVehicles - Verifying Vehicles count created by an Admin',function(done){
    agent.post('/admin/getVehicles').send({"emailId" : "sarthakssj@gmail.com"})
        .then(function(res){
            // console.log(res.body);
            expect(res.body.length).to.equal(5);
            done();
        })
        .catch((e) => {
            done(e);
        });
  });

  it('GET /admin/getAllUser - Verifying Drivers count',function(done){
    agent.post('/admin/getAllUser').send({})
        .then(function(res){
            // console.log(res.body);
            expect(res.body.length).to.equal(6);
            done();
        })
        .catch((e) => {
            done(e);
        });
  });

  it('GET /company/all - Verifying Company count',function(done){
    agent.get('/company/all').send({})
        .then(function(res){
            //console.log(res);
            expect(res.body.length).to.equal(4);
            done();
        })
        .catch((e) => {
            done(e);
        });
  });

  it('GET /driver/locations - Verifying Locations count',function(done){
    agent.get('/driver/locations').send({})
        .then(function(res){
            //console.log(res);
            expect(res.body.length).to.equal(5);
            done();
        })
        .catch((e) => {
            done(e);
        });
  });

  it('GET /driver/search - Verifying Vehicles count',function(done){
    agent.post('/driver/search').send({})
        .then(function(res){
            //console.log(res);
            expect(res.body.length).to.equal(6);
            done();
        })
        .catch((e) => {
            done(e);
        });
  });
});