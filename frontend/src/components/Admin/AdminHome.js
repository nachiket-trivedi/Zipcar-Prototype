import React, { Component } from "react";
import { Col, Row, Container, ListGroup, CardDeck,Card } from "react-bootstrap";
import "./Admin.css";
import axios from "axios";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar/Navbar";
import "react-dropdown/style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {};

  render() {
    let displayDetails = null;
    let redirectNav = null;
    if (localStorage.getItem("email") == null) {
      redirectNav = <Redirect to="/login" />;
    }
    if (localStorage.getItem("role") == "Driver") {
      redirectNav = <Redirect to="/login" />;
    }

    return (
      <div className="mainDiv">
        <Navbar />
        <div className="coverImage"></div>
        <hr></hr>
        {redirectNav}
        <Container>
          <div>
            <br></br>
            <center>
            <h4> Select a Category</h4>
            <br></br>
            </center>
          </div>
          <CardDeck>
            <Card style={{border:"0px"}}>
    <center>
              <i class="fas fa-map-marked-alt" style={{ color: "rgb(7, 146, 123)",height: "80%", width: "100%", fontSize:"12rem" }}></i>
              </center>
              <Card.Body>
                <center>
                  <a href="/adminLocation">
                    <Card.Title style={{color:"rgb(7, 146, 123)"}}>Locations</Card.Title>
                  </a>
                </center>
              </Card.Body>
            </Card>
            <Card style={{border:"0px"}}>
            <center>
              <i class="fas fa-grip-horizontal" style={{ color: "rgb(7, 146, 123)",height: "80%", width: "100%", fontSize:"12rem" }}></i>
              </center>
              <Card.Body>
                <center>
                  <a href="/adminVehicleType">
                    <Card.Title style={{color:"rgb(7, 146, 123)"}}>Vehicle Types</Card.Title>
                  </a>
                </center>
              </Card.Body>
            </Card>
            <Card style={{border:"0px"}}>
            <center>
              <i class="fas fa-car-side" style={{ color: "rgb(7, 146, 123)",height: "80%", width: "100%", fontSize:"12rem" }}></i>
              </center>
              <Card.Body>
                <center>
                  <a href="/adminVehicle">
                    <Card.Title style={{color:"rgb(7, 146, 123)"}}>Vehicles</Card.Title>
                  </a>
                </center>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Home;
