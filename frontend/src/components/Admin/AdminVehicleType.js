import React, { Component } from "react";
import { Col, Row, Container, ListGroup } from "react-bootstrap";
import "./Admin.css";
import axios from "axios";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar/Navbar";
import "react-dropdown/style.css";
import ViewVehicleType from "./AddElements/VehicleType/ViewVehicleType";

class AdminVehicleType extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {};

  render() {
    let displayDetails = null;
    let redirectNav = null;
    if(localStorage.getItem('email')==null){
      redirectNav=<Redirect to="/login"/>
    }
    if(localStorage.getItem('role')=="Driver"){
      redirectNav=<Redirect to="/login"/>
    }
    return (
      <div className="mainDiv">
        {redirectNav}
        <Navbar />
        <div>
          <a href="/addVehicleType">
            <Button className="buttonButton2">Add </Button>{" "}
          </a>
        </div>
        <div>
          <hr></hr>
          <ViewVehicleType />
        </div>
      </div>
    );
  }
}

export default AdminVehicleType;
