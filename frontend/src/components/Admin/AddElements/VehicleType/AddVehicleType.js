import React, { Component } from "react";
import { Col, Row, Container, ListGroup } from "react-bootstrap";
import "./VehicleType.css";
import axios from "axios";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";
import Navbar from "../../../Navbar/Navbar";


import { serverIp, serverPort } from "../../../../config";
const hostAddress = "" + serverIp + ":" + serverPort + "";

class AddVehicleType extends Component {
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
      slab9:""
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.addVehicleType=this.addVehicleType.bind(this);
    this.clearForm=this.clearForm.bind(this);
  }

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clearForm =() =>{
    window.location.reload();
  }

  addVehicleType = () => {
    console.log("Heyy")
    const data = {
      name:this.state.name,
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
      emailId: localStorage.getItem("email")
    };
//alert(data)
    axios.defaults.withCredentials = true;
    axios
      .post(hostAddress + "/admin/createVehicleType", data)
      .then(response => {
       // alert("Hi")
       if(response.status===200 && response.data === 'VEHICLE_TYPE_CREATED'){
        console.log("Response data after add Vehicle Type post-->" + response.data);
        alert("Vehicle Type Added Successfully!");
        window.location.href = "/adminVehicleType";
       }else if(response.status===200 && response.data === 'Already Present'){
        console.log("Response data after add Vehicle Type post-->" + response.data);
        alert("Vehicle Type Already Present! Please select another name");
       } else{
        alert("Unable to add Vehicle Type!:(")
       }
      })
      .catch(err => {
        console.log(err.status);
        alert("Unable to add Vehicle Type!:(");
      });
  }

  render() {
    let displayDetails = null;
    return (
      <div className="mainDiv">
        <Navbar />
        <br></br>
        <div>
          <a href="/adminVehicleType">
            <Button className="buttonButton2"> Back </Button>{" "}
          </a>
        </div>
        <div className="addForm">
          <Container>
            <h5>Add Vehicle-Type</h5>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Vehicle Type Name" name="name" id="name" onChange={this.inputChangeHandler.bind(this)}/>
                </Col>
              </Form.Row>
              <br></br>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Late Charges" name="lateCharges" id="lateCharges" onChange={this.inputChangeHandler.bind(this)} />
                </Col>

                <Col>
                <Form.Control placeholder="Late Cancellation Charges" name="lateCancellationCharge" id="lateCancellationCharge" onChange={this.inputChangeHandler.bind(this)} />
                </Col> 
              </Form.Row>
              <br></br>
              <Row>
                <Col>
                <h6>Hourly Slabs</h6>
                </Col>
               
              </Row>
              <br></br>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="0 - 5 Hours" name="slab1" id="slab1" onChange={this.inputChangeHandler.bind(this)} />
                </Col>
                <Col>
                  <Form.Control placeholder="6 - 10 Hours" name="slab2" id="slab2" onChange={this.inputChangeHandler.bind(this)} />
                </Col>
                <Col>
                <Form.Control placeholder="11 - 15 Hours" name="slab3" id="slab3" onChange={this.inputChangeHandler.bind(this)} />
                </Col> 
              </Form.Row>
              
              <br></br>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="16 - 20 Hours" name="slab4" id="slab4" onChange={this.inputChangeHandler.bind(this)} />
                </Col>
                <Col>
                  <Form.Control placeholder="21 - 24 Hours" name="slab5" id="slab5" onChange={this.inputChangeHandler.bind(this)} />
                </Col>
                <Col>
                <Form.Control placeholder="25 - 34 Hours" name="slab6" id="slab6" onChange={this.inputChangeHandler.bind(this)} />
                </Col> 
              </Form.Row>
              <br></br>
              
              <Form.Row>
                <Col>
                  <Form.Control placeholder="35 - 44 Hours" name="slab7" id="slab7" onChange={this.inputChangeHandler.bind(this)} />
                </Col>
                <Col>
                  <Form.Control placeholder="45 - 60 Hours" name="slab8" id="slab8" onChange={this.inputChangeHandler.bind(this)} />
                </Col>
                <Col>
                <Form.Control placeholder="61 - 72 Hours" name="slab9" id="slab9" onChange={this.inputChangeHandler.bind(this)} />
                </Col> 
              </Form.Row>
              <br></br>
              <Form.Row>
                <span>
                    <Button className="buttonButton" onClick={this.addVehicleType}>Add</Button>{' '}
                  </span>
                  <span style={{marginLeft:"1%"}}>
                   
                  </span>
                  <span>
                    <Button className="cancelButton" onClick={this.clearForm}>Clear</Button>
                  </span>
              
              </Form.Row>
            </Form>
            <br></br>
          
          </Container>
        </div>
      </div>
    );
  }
}

export default AddVehicleType;
