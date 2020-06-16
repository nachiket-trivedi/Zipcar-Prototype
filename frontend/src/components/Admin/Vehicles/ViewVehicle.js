import React, { Component } from "react";
import {
  Col,
  Row,
  Container,
  ListGroup,
  Table,
  CardColumns,
  Card
} from "react-bootstrap";
import "./Vehicle.css";
import axios from "axios";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-dropdown/style.css";
import { TabProvider, Tab, Tabs, TabPanel, TabList } from "react-web-tabs";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";
import { serverIp, serverPort } from "../../../config";
const hostAddress = "" + serverIp + ":" + serverPort + "";

let delFlag = false;
let redirectVar = null;
class ViewVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFlag: null,
      model: "",
      makeYear: "",
      registrationTag: "",
      currentMileage: "",
      serviceDate: "",
      condition: "",
      status: "",
      primaryRegion: "",
      location: "",
      location2: "",
      locationList: [],
      statusList: ["Available", "Unusable"],
      conditionList: ["Old", "New", "OK", "Damaged"],
      type: "",
      typeList: [],
      vehicleList: [],
      createdBy: "",
      createdByList: ["Me", "All"]
    };
    this.updateVehicle = this.updateVehicle.bind(this);
    this.deleteVehicle = this.deleteVehicle.bind(this);
    this.searchVehicle = this.searchVehicle.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  componentDidMount = () => {
    axios.post(hostAddress + "/admin/getRentalLocations").then(response => {
      if (response.status == 200) {
        let locationsArray = response.data.map(eachLocation => {
          return {
            label: eachLocation.locationName,
            value: eachLocation
          };
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
    axios.post(hostAddress + "/admin/getVehicleTypes").then(response => {
      if (response.status == 200) {
        let typeArray = response.data.map(eachvehicleType => {
          return {
            value: eachvehicleType.name
          };
        });
        this.setState({
          typeList: typeArray
        });
      } else {
        window.alert("Error in fetching Vehicle Type");
      }
    });

    axios.post(hostAddress + "/admin/getVehicles").then(response => {
      if (response.status == 200) {
        this.setState({
          vehicleList: this.state.vehicleList.concat(response.data)
        });
      } else {
        window.alert("Error in fetching Vehicles");
      }
    });
  };

  

  cancelChanges = value => {
    this.setState({
      editFlag: null
    });
  };
  updateVehicle = e => {
    this.setState({
      editFlag: e
    });
  };
  saveChanges = value => {
    if (this.state.model == "") {
      this.state.model = this.state.editFlag.vehicle.model;
    }
    if (this.state.makeYear == "") {
      this.state.makeYear = this.state.editFlag.vehicle.makeYear;
    }

    if (this.state.registrationTag == "") {
      this.state.registrationTag = this.state.editFlag.vehicle.registrationTag;
    }
    if (this.state.currentMileage == "") {
      this.state.currentMileage = this.state.editFlag.vehicle.currentMileage;
    }

    if (this.state.serviceDate == "") {
      this.state.serviceDate = this.state.editFlag.vehicle.serviceDate;
    }
    if (this.state.condition == "") {
      this.state.condition = this.state.editFlag.vehicle.condition;
    }

    if (this.state.type == "") {
      this.state.type = this.state.editFlag.vehicle.type;
    }

    if (this.state.location2 == "") {
      this.state.location2 = this.state.editFlag.vehicle.location;
    }

    const data = {
      model: this.state.model,
      makeYear: this.state.makeYear,
      registrationTag: this.state.registrationTag,
      currentMileage: this.state.currentMileage,
      serviceDate: this.state.serviceDate,
      condition: this.state.condition.value,
      type: this.state.type.value,
      location: this.state.location2.value._id,
      id: this.state.editFlag.vehicle._id,
      emailId:localStorage.getItem('email')
    };
    
    console.log(data);

    axios.defaults.withCredentials = true;
    axios
      .post(hostAddress + "/admin/updateVehicle", data)
      .then(response => {
        // alert("Hi")
        if (response.status === 200 && response.data === 'VEHICLE_UPDATED') {
          console.log("Response data after update Vehicle -->" + response.data);
          alert("Vehicle Updated Successfully!");
          window.location.reload();
        } else if(response.status === 200 && response.data === 'Capacity Reached'){
          console.log("Response data after update Vehicle -->" + response.data);
          alert("Capacity full of new Location. Select another location");
        } else {
          alert("Unable to update Vehicle!:(");
        }
      })
      .catch(err => {
        console.log(err.status);
        alert("Unable to update Vehicle!:(");
      });
    this.setState({
      editFlag: null
    });
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  locationChangeHandler = value => {
    this.setState({
      location: value
    });
    this.location.value = { value };
  };

  createdByChangeHandler = value => {
    this.setState({
      createdBy: value
    });
    this.createdBy.value = { value };
  };

  typeChangeHandler = value => {
    this.setState({
      type: value
    });
    this.type.value = { value };
  };

  statusChangeHandler = value => {
    this.setState({
      status: value
    });
    this.status.value = { value };
  };

  conditionChangeHandler = value => {
    this.setState({
      condition: value
    });
    this.condition.value = { value };
  };

  location2ChangeHandler = value => {
    this.setState({
      location2: value
    });
    this.location2.value = { value };
  };

  clearForm = () => {
    window.location.reload();
  };

  deleteVehicle = value => {
    const data = {
      id: value.vehicle._id,
      emailId:localStorage.getItem('email')
    };
    axios.defaults.withCredentials = true;
    axios.post(hostAddress + "/admin/deleteVehicle", data).then(response => {
      console.log(response);
      if (response.status === 200 && response.data === 'DELETED') {
        alert("Vehicle Deleted!!");
        window.location.reload();
      } else if(response.status === 200 && response.data === 'VEHICLE_NOT_FOUND'){
        alert("Vehicle Not created by You, so cannot Delete!!");
        window.location.reload();
      } else if(response.status === 200 && response.data === 'Bookings Associated'){
        alert("Vehicle has booking associated, so cannot Delete!!");
      }else {
        alert("Error in deleting Vehicle Type");
      }
    });
  };

  searchVehicle = () => {
    let data = null;

    if (this.state.createdBy.value == "Me") {
      if (this.state.location) {
        data = {
          emailId: localStorage.getItem("email"),
          location: this.state.location.value._id
        };
      } else {
        data = {
          emailId: localStorage.getItem("email")
        };
      }
    } else {
      if (this.state.location) {
        data = {
          location: this.state.location.value._id
        };
      } else {
        data = null;
      }
    }

    axios.defaults.withCredentials = true;

    axios.post(hostAddress + "/admin/getVehicles", data).then(response => {
      if (response.status == 200) {
        //alert("Hola");
        this.setState({
          vehicleList: response.data
        });
      } else {
        window.alert("Error in fetching Vehicles");
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
    let vehicleDetails = null;

    let body1 = null;
    let details = [];

    //Add iterator to display all
    body1 = this.state.vehicleList.map(item => {
      console.log('Inside this.state.vehicleList.map');
      console.log(item);
      if (this.state.editFlag == item) {
        details.push(
          <tr>
            <td>
              <input
                type="text"
                placeholder={item.vehicle.model}
                name="model"
                id="model"
                onChange={this.inputChangeHandler.bind(this)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder={item.vehicle.makeYear}
                name="makeYear"
                id="makeYear"
                onChange={this.inputChangeHandler.bind(this)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder={item.vehicle.registrationTag}
                name="registrationTag"
                id="registrationTag"
                onChange={this.inputChangeHandler.bind(this)}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder={item.vehicle.currentMileage}
                name="currentMileage"
                id="currentMileage"
                onChange={this.inputChangeHandler.bind(this)}
              />
            </td>
            <td>
              <input
                type="date"
                placeholder={item.vehicle.serviceDate}
                name="serviceDate"
                id="serviceDate"
                onChange={this.inputChangeHandler.bind(this)}
              />
            </td>
            <td>
              <Dropdown
                options={this.state.conditionList}
                name="condition"
                placeholder="Condition"
                ref={ref => (this.condition = ref)}
                onChange={this.conditionChangeHandler}
                value={this.state.condition}
              />
            </td>
            <td>
              <Dropdown
                options={this.state.statusList}
                name="status"
                placeholder="Status"
                ref={ref => (this.status = ref)}
                onChange={this.statusChangeHandler}
                value={this.state.status}
              />
            </td>
            <td>
              <Dropdown
                options={this.state.locationList}
                name="location2"
                placeholder="Location"
                ref={ref => (this.location2 = ref)}
                onChange={this.location2ChangeHandler}
                value={this.state.location2}
              />
            </td>
            <td>{(item.primaryLocation)?item.primaryLocation.locationName:'N/A'}</td>
            <td>
              {" "}
              <Dropdown
                options={this.state.typeList}
                name="type"
                placeholder="Type"
                ref={ref => (this.type = ref)}
                onChange={this.typeChangeHandler}
                value={this.state.type}
              />
            </td>
            <td>
              <span>
                <button
                  style={{ border: "none", marginRight: "8px" }}
                  class="fas fa-save"
                  onClick={this.saveChanges.bind(this, item)}
                ></button>
              </span>
              <span>
                <button
                  style={{ border: "0px", marginLeft: "8pxpx" }}
                  class="fas fa-times"
                  onClick={this.cancelChanges.bind(this, item)}
                ></button>
              </span>
            </td>
          </tr>
        );
      } else {
        details.push(
          <tr>
            <td>{item.vehicle.model}</td>
            <td>{item.vehicle.makeYear}</td>
            <td>{item.vehicle.registrationTag}</td>
            <td>{item.vehicle.currentMileage}</td>
            <td>{item.vehicle.serviceDate}</td>
            <td>{item.vehicle.condition}</td>
            <td>{item.vehicle.status}</td>
            <td>{item.rentalLocation.locationName}</td>
            <td>{(item.primaryLocation)?item.primaryLocation.locationName:'N/A'}</td>
            <td>{item.vehicle.type}</td>
            <td>
              <span>
                <button
                  style={{ border: "none", marginRight: "8px" }}
                  class="fas fa-pencil-alt"
                  onClick={this.updateVehicle.bind(this, item)}
                ></button>
              </span>
              <span>
                <button
                  style={{ border: "0px", marginLeft: "8pxpx" }}
                  class="fas fa-trash-alt"
                  onClick={this.deleteVehicle.bind(this, item)}
                ></button>
              </span>
            </td>
          </tr>
        );
      }
    });

    if (this.state.vehicleList.length == 0) {
      vehicleDetails = (
        <div>
          <center>
            <h4>Nothing to show here!:(</h4>
          </center>
        </div>
      );
    } else {
      vehicleDetails = (
        <Table responsive>
          <thead>
            <tr>
              <th>Model</th>
              <th>Make Year</th>
              <th>Registration Tag</th>
              <th>Current Mileage</th>
              <th>Service Date</th>
              <th>Condition</th>
              <th>Status</th>
              <th>Location</th>
              <th>Primary Region</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {body1}
            {details}
          </tbody>
        </Table>
      );
    }

    return (
      <div className="mainDivFull">
        {redirectVar}
        {redirectNav}
        <Container>
          <h4>
            <b>Vehicle List</b>
          </h4>
          <br></br>
          <Row>
            <Col>
              <Dropdown
                options={this.state.createdByList}
                name="createdBy"
                placeholder="Created By"
                ref={ref => (this.createdBy = ref)}
                onChange={this.createdByChangeHandler}
                value={this.state.createdBy}
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
            <Col>
              <span>
                <Button className="buttonButton" onClick={this.searchVehicle}>
                  Filter
                </Button>
              </span>
              <span>
                <Button className="cancelButton" onClick={this.clearForm}>
                  Clear
                </Button>
              </span>
            </Col>
          </Row>
          <br></br>
          {vehicleDetails}
        </Container>
      </div>
    );
  }
}

export default ViewVehicle;
