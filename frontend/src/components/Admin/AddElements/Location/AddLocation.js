import React, { Component } from "react";
import { Col, Row, Container, ListGroup } from "react-bootstrap";
import "./Location.css";
import axios from "axios";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-dropdown/style.css";

import { serverIp, serverPort } from "../../../../config";

const hostAddress = "" + serverIp + ":" + serverPort + "";
class AddLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      capacity: ""
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.addLocation = this.addLocation.bind(this);
  }

  addLocation = () => {
    const data = {
      name: this.state.locationName,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      capacity: this.state.capacity,
      emailId: localStorage.getItem("email")
    };
    axios.defaults.withCredentials = false;
    axios
      .post(hostAddress + "/admin/createRentalLocation", data)
      .then(response => {
       if(response.status===200 && response.data === 'RENTAL_LOCATION_CREATED'){
        console.log("Response data after add Location post-->" + response.data);
        alert("Location Added Successfully!");
        window.location.reload();
       }else if(response.status===200 && response.data === 'Already Present'){
        console.log("Response data after add Location post-->" + response.data);
        alert("Please select other unique location name!");
       } else{
        alert("Unable to add Location!:(")
       }
      })
      .catch(err => {
        console.log(err.status);
        alert(err.response.data["error"]);
      });
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  clearForm = () => {
    window.location.reload();
  };



  render() {
    let redirectNav = null;
    if (localStorage.getItem("email") == null) {
      redirectNav = <Redirect to="/login" />;
    }
    if (localStorage.getItem("role") == "Driver") {
      redirectNav = <Redirect to="/login" />;
    }

    return (
      <div className="addForm">
        {redirectNav}
        <Container>
          <h5>Add Location</h5>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  placeholder="Location Name"
                  name="locationName"
                  id="locationName"
                  onChange={this.inputChangeHandler}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Capacity"
                  name="capacity"
                  id="capacity"
                  onChange={this.inputChangeHandler}
                />
              </Col>
            </Form.Row>
            <br></br>
            <Form.Row>
              <Col>
                <Form.Control
                  placeholder="Address"
                  name="street"
                  id="street"
                  onChange={this.inputChangeHandler}
                />
              </Col>
            </Form.Row>
            <br></br>
            <Form.Row>
              <Col>
                <Form.Control
                  placeholder="City"
                  name="city"
                  id="city"
                  onChange={this.inputChangeHandler}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="State"
                  name="state"
                  id="state"
                  onChange={this.inputChangeHandler}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Zipcode"
                  name="zipcode"
                  id="zipcode"
                  onChange={this.inputChangeHandler}
                />
              </Col>
            </Form.Row>
            <br></br>
            <span>
              <Button className="buttonButton" onClick={this.addLocation}>
                Add
              </Button>
            </span>
            <span>
              <Button className="cancelButton" onClick={this.clearForm}>
                Clear
              </Button>
            </span>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddLocation;
