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
import "./VehicleType.css";
import axios from "axios";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-dropdown/style.css";
import { TabProvider, Tab, Tabs, TabPanel, TabList } from "react-web-tabs";

import { serverIp, serverPort } from "../../../../config";
const hostAddress = "" + serverIp + ":" + serverPort + "";


class ViewVehicleType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId:localStorage.getItem('email'),
      name:"",
      lateCharges:"",
      lateCancellationCharge:"",
      slab1:"",
      slab2:"",
      slab3:"",
      slab4:"",
      slab5:"",
      slab6:"",
      slab7:"",
      slab8:"",
      slab9:"",
      editFlag: null,
      vehicleTypeList:[],
      myVehicleTypeList:[]
    };
    this.updateMainDetails = this.updateMainDetails.bind(this);
    this.deleteMainDetails = this.deleteMainDetails.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount = () => {
    axios.defaults.withCredentials = true;

    const data = {
      emailId: localStorage.getItem("email")
    };

    axios
      .post(hostAddress + "/admin/getVehicleTypes", data)
      .then(response => {
        if (response.status == 200) {
          this.setState({
            myVehicleTypeList: this.state.myVehicleTypeList.concat(response.data)
          },()=>{
            console.log('myVehicleList');
            console.log(this.state.myVehicleTypeList);
          });
        } else {
          window.alert("Error in fetching Vehicle Type");
        }
      });

      axios
      .post(hostAddress + "/admin/getVehicleTypes")
      .then(response => {
        if (response.status == 200) {
          this.setState({
            vehicleTypeList: this.state.vehicleTypeList.concat(response.data)
          });
        } else {
          window.alert("Error in fetching Vehicle Type");
        }
      });
  };


  updateMainDetails = e => {
    this.setState({
      editFlag: e
    });
  };

  deleteMainDetails = e => {
    const data = {
      id: e._id,
      name:e.name,
      emailId:e.createBy
    };
    console.log('Vehicle Type Details to be deleted');
    console.log(data);
    axios.defaults.withCredentials = true;
    axios
      .post(hostAddress + "/admin/deleteVehicleType", data)
      .then(response => {
        if (response.status == 200) {
          alert("Vehicle-Type Deleted!!");
          window.location.reload();
        } else {
          alert("Please reassign associated vehicles to other types before deleting.");
        }
      }).catch(err=>{
        console.log('Inside delete vehicle type catch');
        alert("Please reassign associated vehicles to other types before deleting.");
      });
  };

  cancelChanges = value => {
    this.setState({
      editFlag: null
    });
  };

  saveChanges = value => {
  
    if(this.state.lateCharges==""){
      this.state.lateCharges=this.state.editFlag.lateCharges
    }
    if(this.state.lateCancellationCharge==""){
      this.state.lateCancellationCharge=this.state.editFlag.lateCancellationCharge
    }
    if(this.state.slab1==""){
      this.state.slab1=this.state.editFlag.hourlySlab[0]
    }
    if(this.state.slab2==""){
      this.state.slab2=this.state.editFlag.hourlySlab[6]
    }
    if(this.state.slab3==""){
      this.state.slab3=this.state.editFlag.hourlySlab[11]
    }
    if(this.state.slab4==""){
      this.state.slab4=this.state.editFlag.hourlySlab[16]
    }
    if(this.state.slab5==""){
      this.state.slab5=this.state.editFlag.hourlySlab[21]
    }
    if(this.state.slab6==""){
      this.state.slab6=this.state.editFlag.hourlySlab[26]
    }
    if(this.state.slab7==""){
      this.state.slab7=this.state.editFlag.hourlySlab[36]
    }
    if(this.state.slab8==""){
      this.state.slab8=this.state.editFlag.hourlySlab[46]
    }
    if(this.state.slab9==""){
      this.state.slab9=this.state.editFlag.hourlySlab[66]
    }
    const data={
      id:this.state.editFlag._id,
      lateCharges:this.state.lateCharges,
      lateCancellationCharge:this.state.lateCancellationCharge,
      slab1:this.state.slab1,
      slab2:this.state.slab2,
      slab3:this.state.slab3,
      slab4:this.state.slab4,
      slab5:this.state.slab5,
      slab6:this.state.slab6,
      slab7:this.state.slab7,
      slab8:this.state.slab8,
      slab9:this.state.slab9,
    }

    axios.defaults.withCredentials = true;
    axios
      .post(hostAddress + "/admin/updateVehicleType", data)
      .then(response => {
       // alert("Hi")
       if(response.status==200){
        console.log("Response data after add Vehicle Type post-->" + response.data);
        alert("Vehicle Type Updated Successfully!");
        window.location.reload();
       }else{
        alert("Unable to update Vehicle Type!:(")
       }
      })
      .catch(err => {
        console.log(err.status);
        alert("Unable to update Vehicle Type!:(");
      });



    this.setState({
      editFlag: null
    });
  };


  render() {
    let vehicleDetails = [];
    let displayDetails = null;
    let vehicleDetails2 = [];
    let displayDetails2 = null;

    if(this.state.myVehicleTypeList.length==0){
      displayDetails=(
        <div>
          <center>
            <h4>
              Nothing to Display!:(
            </h4>
          </center>
        </div>
      )
    }else{
      displayDetails=this.state.myVehicleTypeList.map(item=>{
        if (this.state.editFlag == item) {
              vehicleDetails.push(
                <Card className="text-center fullcard">
                  <Card.Body>
                    <Card.Title>
                      <span>{item.name}</span>
                    </Card.Title>
                    <Card.Text>
                      <div> <input
                                type="number"
                                name="lateCharges"
                                id="lateCharges"
                                placeholder={item.lateCharges}
                                onChange={this.inputChangeHandler.bind(this)}
                              /></div>
                      <div><input
                                type="number"
                                name="lateCancellationCharge"
                                id="lateCancellationCharge"
                                placeholder={item.lateCancellationCharge}
                                onChange={this.inputChangeHandler.bind(this)}
                              /></div>
                    </Card.Text>
                    <Card.Text>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>0 - 5</th>
                            <th>6 - 10</th>
                            <th>11 - 15</th>
                            <th>16 - 20</th>
                            <th>21 - 24</th>
                            <th>25 - 34</th>
                            <th>35 - 44</th>
                            <th>45 - 60</th>
                            <th>61 - 72</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input
                                type="number"
                                placeholder={item.hourlySlab[0]}
                                name="slab1"
                                id="slab1"
                                onChange={this.inputChangeHandler.bind(this)}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="slab2"
                                placeholder={item.hourlySlab[6]}
                                id="slab2"
                                onChange={this.inputChangeHandler.bind(this)}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="slab3"
                                placeholder={item.hourlySlab[11]}
                                id="slab3"
                                onChange={this.inputChangeHandler.bind(this)}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="slab4"
                                placeholder={item.hourlySlab[16]}
                                id="slab4"
                                onChange={this.inputChangeHandler.bind(this)}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="slab5"
                                placeholder={item.hourlySlab[21]}
                                id="slab5"
                                onChange={this.inputChangeHandler.bind(this)}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="slab6"
                                placeholder={item.hourlySlab[26]}
                                id="slab6"
                                onChange={this.inputChangeHandler.bind(this)}
                              />
                            </td>
        
                            <td>
                              <input
                                type="number"
                                name="slab7"
                                id="slab7"
                                placeholder={item.hourlySlab[36]}
                                onChange={this.inputChangeHandler.bind(this)}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="slab8"
                                id="slab8"
                                placeholder={item.hourlySlab[46]}
                                onChange={this.inputChangeHandler.bind(this)}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="slab9"
                                id="slab9"
                                placeholder={item.hourlySlab[66]}
                                onChange={this.inputChangeHandler.bind(this)}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>{" "}
                    </Card.Text>
                    <Card.Text>
                      <span>
                        <Button
                          style={{ border: "none", marginRight: "8px" }}
                          className="buttonButton"
                          onClick={this.saveChanges.bind(this, item)}
                        >Save</Button>
                      </span>
                      <span>
                        <Button
                          style={{ border: "none", marginRight: "8px" }}
                          className="cancelButton"
                          onClick={this.cancelChanges.bind(this, item)}
                        >Cancel</Button>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            } else {
              vehicleDetails.push(
                <Card className="text-center fullcard">
                  <Card.Body>
                  <Card.Title>
                      <span>{item.name}</span>
                    </Card.Title>
                    <Card.Text>
                      <div>Late Charges : <b>{' '}{'$'}{' '} {item.lateCharges}</b></div>
                      <div>Late Cancellation Charges : <b>{' '}{'$'}{' '} {item.lateCancellationCharge}</b></div>
                    </Card.Text>
                    <Card.Text>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>0 - 5</th>
                            <th>6 - 10</th>
                            <th>11 - 15</th>
                            <th>16 - 20</th>
                            <th>21 - 24</th>
                            <th>25 - 34</th>
                            <th>35 - 44</th>
                            <th>45 - 60</th>
                            <th>61 - 72</th>
                          </tr>
                        </thead>
                        <tbody>
                          {" "}
                          <tr>
                          <td> {'$'}{' '}{item.hourlySlab[0]}</td>
                          <td> {'$'}{' '}{item.hourlySlab[6]}</td>
                          <td> {'$'}{' '}{item.hourlySlab[11]}</td>
                          <td> {'$'}{' '}{item.hourlySlab[16]}</td>
                          <td> {'$'}{' '}{item.hourlySlab[21]}</td>
                          <td>{'$'}{' '}{item.hourlySlab[26]}</td>
                          <td> {'$'}{' '}{item.hourlySlab[36]}</td>
                          <td> {'$'}{' '}{item.hourlySlab[46]}</td>
                          <td> {'$'}{' '}{item.hourlySlab[66]}</td>
                          </tr>
                        </tbody>
                      </Table>{" "}
                    </Card.Text>
                    <Card.Text>
                      <span>
                        <Button
                          style={{ border: "none", marginRight: "8px" }}
                          className="buttonButton"
                          onClick={this.updateMainDetails.bind(this, item)}
                        >Edit</Button>
                      </span>
                      <span>
                        <Button
                          style={{ border: "none", marginRight: "8px" }}
                          className="cancelButton"
                          onClick={this.deleteMainDetails.bind(this, item)}
                        >Delete</Button>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            }
            })
    }

    if(this.state.vehicleTypeList.length==0){
      displayDetails2=(
        <div>
          <center>
            <h4>
              Nothing to Display!:(
            </h4>
          </center>
        </div>
      )
    }else{
      displayDetails2=this.state.vehicleTypeList.map(item=>{
              vehicleDetails2.push(
                <Card className="text-center fullcard">
                  <Card.Body>
                  <Card.Title>
                      <span>{item.name}</span>
                    </Card.Title>
                    <Card.Text>
                    <div>Late Charges : <b>{' '}{'$'}{' '} {item.lateCharges}</b></div>
                      <div>Late Cancellation Charges : <b>{'$'}{' '}{' '} {item.lateCancellationCharge}</b></div>
                    </Card.Text>
                    <Card.Text>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>0 - 5</th>
                            <th>6 - 10</th>
                            <th>11 - 15</th>
                            <th>16 - 20</th>
                            <th>21 - 24</th>
                            <th>25 - 34</th>
                            <th>35 - 44</th>
                            <th>45 - 60</th>
                            <th>61 - 72</th>
                          </tr>
                        </thead>
                        <tbody>
                          {" "}
                          <tr>
                          <td>{'$'}{' '}{item.hourlySlab[0]}</td>
                          <td>{'$'}{' '}{item.hourlySlab[6]}</td>
                          <td>{'$'}{' '}{item.hourlySlab[11]}</td>
                          <td>{'$'}{' '}{item.hourlySlab[16]}</td>
                          <td>{'$'}{' '}{item.hourlySlab[21]}</td>
                          <td>{'$'}{' '}{item.hourlySlab[26]}</td>
                          <td>{'$'}{' '}{item.hourlySlab[36]}</td>
                          <td>{'$'}{' '}{item.hourlySlab[46]}</td>
                          <td>{'$'}{' '}{item.hourlySlab[66]}</td>
                          </tr>
                        </tbody>
                      </Table>{" "}
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              );
    
            })
    }
    

    return (
      <div className="mainDiv">
        <Container>
          <h4>
            <b>Vehicle-Type List</b>
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

            <TabPanel tabId="one">{displayDetails}
          {vehicleDetails}</TabPanel>

            <TabPanel tabId="two">{displayDetails2}
          {vehicleDetails2}</TabPanel>
          </Tabs>
          
        </Container>
      </div>
    );
  }
}

export default ViewVehicleType;
