import React, { Component } from "react";
import { Col, Row, Container, ListGroup, Table } from "react-bootstrap";
import "./Location.css";
import axios from "axios";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-dropdown/style.css";
import { TabProvider, Tab, Tabs, TabPanel, TabList } from "react-web-tabs";

import { serverIp, serverPort } from "../../../../config";
const hostAddress = "" + serverIp + ":" + serverPort + "";

class ViewLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationList: [],
      myLocationList: []
    };
    
    this.deleteLocation = this.deleteLocation.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }



  componentWillMount = async () => {
    axios.defaults.withCredentials = true;

    const data = {
      emailId: localStorage.getItem("email")
    };

    axios
      .post(hostAddress + "/admin/getRentalLocations", data)
      .then(response => {
        if (response.status == 200) {
          this.setState({
            myLocationList: this.state.myLocationList.concat(response.data)
          });
        } else {
          window.alert("Error in fetching Rental Location");
        }
      });

    axios.post(hostAddress + "/admin/getRentalLocations").then(response => {
      if (response.status == 200) {
        this.setState({
          locationList: this.state.locationList.concat(response.data)
        });
      } else {
        window.alert("Error in fetching Rental Location");
      }
    });
  };

  updateLocation = e => {
    this.setState({
      editFlag: e
    });
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

 

  deleteLocation = value => {
    const data = {
      id: value
    };
    axios.defaults.withCredentials = true;
    axios
      .post(hostAddress + "/admin/deleteRentalLocation", data)
      .then(response => {
        if (response.status === 200 && response.data === 'DELETED') {
          alert("Location Deleted!!");
          window.location.reload();
        } else if(response.status === 200 && response.data === 'Vehicles Present'){
          alert('First Reassign Vehicles to Other Locations');
          //window.location.reload();
        } else {
          window.alert("Error in fetching Rental Location");
        }
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

    let details1 = null;
    let details2 = null;

    let displayDetails = [];
    let displayDetails2 = [];

    details1 = this.state.myLocationList.map(item => {
      displayDetails.push(
        <tr>
          <td>{item.locationName}</td>
          <td>{item.capacity}</td>
          <td>{item.street}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.zipcode}</td>

          <td>
            <span>
              <button
                style={{ border: "0px", marginLeft: "8pxpx" }}
                class="fas fa-trash-alt"
                onClick={this.deleteLocation.bind(this, item._id)}
              ></button>
            </span>
          </td>
        </tr>
      );
    });

    details2 = this.state.locationList.map(item => {
      displayDetails2.push(
        <tr>
          <td>{item.locationName}</td>
          <td>{item.capacity}</td>
          <td>{item.street}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.zipcode}</td>
          <td>{item.createBy}</td>
         
        </tr>
      );
    });

    let tableDetails = null;
    let tableDetails2 = null;
    if (this.state.myLocationList.length == 0) {
      tableDetails = (
        <div>
          <center>
            <h2 className="centerClass"> Nothing to Show!:(</h2>
          </center>
        </div>
      );
    } else {
      tableDetails = (
        <Table responsive>
          <thead>
            <tr>
              <th>Location</th>
              <th>Capacity</th>
              <th>Address</th>
              <th>State</th>
              <th>City</th>
              <th>Zipcode</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {details1}
            {displayDetails}
          </tbody>
        </Table>
      );
    }

    if (this.state.locationList.length == 0) {
      tableDetails2 = (
        <div>
          <center>
            <h2 className="centerClass"> Nothing to Show!:(</h2>
          </center>
        </div>
      );
    } else {
      tableDetails2 = (
        <Table responsive>
          <thead>
            <tr>
              <th>Location</th>
              <th>Capacity</th>
              <th>Address</th>
              <th>State</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Created By</th>
          
            </tr>
          </thead>
          <tbody>
            {details2}
            {displayDetails2}
          </tbody>
        </Table>
      );
    }
    return (
      <div className="mainDiv">
        {redirectNav}
        <Container>
          <h4>
            <b>Locations List</b>
          </h4>
          <br></br>

          <Tabs
            defaultTab="one"
            className="tabClass"
            onChange={tabId => {
              console.log(tabId);
            }}
          >
            <TabList>
              <Tab className="tabss" tabFor="one">
                Created By Me
              </Tab>

              <Tab className="tabss" tabFor="two">
                All
              </Tab>
            </TabList>
            <hr></hr>

            <TabPanel tabId="one">{tableDetails}</TabPanel>

            <TabPanel tabId="two">{tableDetails2}</TabPanel>
          </Tabs>
          <br></br>
        </Container>
      </div>
    );
  }
}

export default ViewLocation;
