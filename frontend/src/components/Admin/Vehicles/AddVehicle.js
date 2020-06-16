import React, { Component } from "react";
import { Col, Row, Container, ListGroup } from "react-bootstrap";
import "./Vehicle.css";
import axios from "axios";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../../Navbar/Navbar";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";

import { serverIp, serverPort } from "../../../config";
const hostAddress = "" + serverIp + ":" + serverPort + "";

class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "",
      makeYear: "",
      registrationTag: "",
      currentMileage: "",
      serviceDate: "",
      condition: "",
      status: "",
      primaryRegion: "",
      location: "",
      locationList: [],
      statusList: ["Available", "Unusable"],
      conditionList: ["Old", "New", "OK", "Damaged"],
      type: "",
      typeList: []
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.locationChangeHandler = this.locationChangeHandler.bind(this);
    this.statusChangeHandler = this.statusChangeHandler.bind(this);
    this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
    this.typeChangeHandler = this.typeChangeHandler.bind(this);
    this.addVehicle = this.addVehicle.bind(this);
    this.clearForm=this.clearForm.bind(this);
  }
  componentDidMount = () => {
    //Add Code to Get all Locations
    axios.post(hostAddress + "/admin/getRentalLocations").then(response => {
      if (response.status == 200) {
        let locationsArray = response.data.map((eachLocation)=>{
          return {
            label:eachLocation.locationName,
            value:eachLocation
          }
        });
        this.setState({
          locationList: locationsArray
        });
      } else {
        window.alert("Error in fetching Rental Location");
      }
    });
    //Add Code to Get all Vehicle Types
    axios.defaults.withCredentials = true;
      axios
      .post(hostAddress + "/admin/getVehicleTypes")
      .then(response => {
        if (response.status == 200) {
          let typeArray = response.data.map((eachvehicleType)=>{
            return {
              value:eachvehicleType.name
            }
          });
          this.setState({
            typeList: typeArray
          });
        } else {
          window.alert("Error in fetching Vehicle Type");
        }
      });
  };

  typeChangeHandler = value => {
    this.setState({
      type: value.value
    });
    this.type.value = { value };
  };

  locationChangeHandler = value => {
    this.setState({
      location: value
    });
    this.location.value = { value };
  };

  conditionChangeHandler = value => {
    this.setState({
      condition: value.value
    });
    this.condition.value = { value };
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  statusChangeHandler = value => {
    this.setState({
      status: value.value
    });
    this.status.value = { value };
  };



  clearForm =() =>{
    window.location.reload();
  }

  addVehicle = e => {
    //Axios Call to add Vehicle
    console.log("Heyy")
    const data = {
      model: this.state.model,
      makeYear: this.state.makeYear,
      registrationTag: this.state.registrationTag,
      currentMileage: this.state.currentMileage,
      serviceDate: this.state.serviceDate, // mm/dd/yyyy format
      condition: this.state.condition,
      type: this.state.type,
      location: this.state.location.value._id, // locations _id
      emailId: localStorage.getItem('email'),
      primaryLocation: this.state.location.value._id
    };
//alert(data)
    axios.defaults.withCredentials = true;
    axios
      .post(hostAddress + "/admin/createVehicle", data)
      .then(response => {
       // alert("Hi")
       if(response.status==200){
        console.log("Response data after add Vehicle Type post-->" + response.data);
        alert("Vehicle Type Added Successfully!");
        window.location.reload();
       }else{
        alert("Unable to add Vehicle Type!:(")
       }
      })
      .catch(err => {
        console.log(err.status);
        alert("Unable to add Vehicle Type!:(");
      });

  };

  render() {
     
    let redirectNav = null;
    if(localStorage.getItem('email')==null){
      redirectNav=<Redirect to="/login"/>
    }
    if(localStorage.getItem('role')=="Driver"){
      redirectNav=<Redirect to="/login"/>
    }
    let displayDetails = null;
    return (
      <div className="mainDiv">
        {redirectNav}
        <Navbar />
        <br></br>
        <div>
          <a href="/adminVehicle">
            <Button className="buttonButton2"> Back </Button>{" "}
          </a>
        </div>

        <div className="addForm">
          <Container>
            <h5>Add Vehicle</h5>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control
                    placeholder="Model"
                    name="model"
                    id="model"
                    onChange={this.inputChangeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Make Year"
                    name="makeYear"
                    id="makeYear"
                    onChange={this.inputChangeHandler}
                  />
                </Col>
              </Form.Row>
              <br></br>
              <Form.Row>
                <Col>
                  <Form.Control
                    placeholder="Registration tag"
                    name="registrationTag"
                    id="registrationTag"
                    onChange={this.inputChangeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Current Mileage"
                    name="currentMileage"
                    id="currentMileage"
                    onChange={this.inputChangeHandler}
                  />
                </Col>
              </Form.Row>
              <br></br>
              <Form.Row>
                <Col>
                  <Dropdown
                    options={this.state.typeList}
                    name="type"
                    placeholder="Type"
                    ref={ref => (this.type = ref)}
                    onChange={this.typeChangeHandler}
                    value={this.state.type}
                  />
                </Col>
                <Col>
                  <Dropdown
                    options={this.state.locationList}
                    name="location"
                    placeholder="Location"
                    ref={ref => (this.location = ref)}
                    onChange={this.locationChangeHandler}
                    value={this.state.location}
                  />
                </Col>
              </Form.Row>
              <br></br>
              <Form.Row>
                <Col>
                  <Form.Control
                    placeholder="Service Date"
                    name="serviceDate"
                    type="date"
                    id="serviceDate"
                    onChange={this.inputChangeHandler}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Primary State"
                    name="primaryRegion"
                    id="primaryRegion"
                    onChange={this.inputChangeHandler}
                  />
                </Col>
              </Form.Row>
              <br></br>
              <Form.Row>
                <Col>
                  <Dropdown
                    options={this.state.conditionList}
                    name="condition"
                    placeholder="Condition"
                    ref={ref => (this.condition = ref)}
                    onChange={this.conditionChangeHandler}
                    value={this.state.condition}
                  />
                </Col>
                <Col>
                  <Dropdown
                    options={this.state.statusList}
                    name="status"
                    placeholder="Status"
                    ref={ref => (this.status = ref)}
                    onChange={this.statusChangeHandler}
                    value={this.state.status}
                  />
                </Col>
              </Form.Row>
              <br></br>
              <span>
                <Button className="buttonButton" onClick={this.addVehicle}>Add</Button>
              </span>
              <span>
                <Button className="cancelButton" onClick={this.clearForm}>Clear</Button>
              </span>
            </Form>
          </Container>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export default AddVehicle;
