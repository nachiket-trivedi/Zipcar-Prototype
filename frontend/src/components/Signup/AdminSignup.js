import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-dropdown";
import axios from "axios";
import 'react-dropdown/style.css';
import "./Signup.css";

import {serverIp,serverPort} from '../../config';
const hostAddress=""+serverIp+":"+serverPort+"";

class AdminSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyList:[],
      stateList:["CA","TX","MN","IW","NY"],
      username: "",
      password: "",
      email: "",
      name: "",
      mobile: "",
      companyId: "",
      stateId: "",
      companyCode: "",
      company: "",
      stateName:""
    };
    this.submitSignup = this.submitSignup.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.stateChangeHandler = this.stateChangeHandler.bind(this);
    this.companyChangeHandler = this.companyChangeHandler.bind(this);
  }

componentDidMount = async()=>{
  try{
    const companyListResponse = await axios.get(hostAddress + '/company/all');
    if(companyListResponse.status === 200){
      
      let companyNames = companyListResponse.data.map( each => {
        return {
          label: each.companyName,
          value: each._id
        };
      } );
      
      this.setState({
        companyList:companyNames
      });
    }
  } catch(error){
    console.log('Error in fetching companyList in AdminSignup componentDidMount');
    console.log(error);
  }
}
  
  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  stateChangeHandler = e => {
    console.log(e);
    //add StateID API
    // keeping stateId same as state name
    this.setState({
      stateName: e.label,
      stateId: e.value
    });
    //this.role.value = { value };
  };

  companyChangeHandler = e => {
    console.log(e);
    //Add companyId
    this.setState({
      company: e.label,
      companyId: e.value
    });
    //this.stateName.value = { value };
  };

  submitSignup = e => {
    var headers = new Headers();
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      name: this.state.name,
      mobile: this.state.mobile,
      companyId: this.state.companyId,
      stateId: this.state.stateId,
      companyCode: this.state.companyCode
    };

      axios.defaults.withCredentials = true;
      axios
        .post(hostAddress + "/users/adminSignup", data)
        .then(response => {
          if(response.data.resmsg === 'Admin Registered Successfully!'){
            window.alert('Successfully signed up');
            console.log("Response data after signip post-->" + response.data);
            localStorage.setItem("role", "admin");
            localStorage.setItem("email",this.state.email);
            localStorage.setItem("username", this.state.username);
            localStorage.setItem("name", this.state.name);
            localStorage.setItem("jwtToken",response.data.token);
          } else if(response.data.resmsg === 'Email Already in Use!'){
            window.alert('User already registered');
          } else if(response.data.resmsg === 'Error in adding!'){
            window.alert('Database Error');
          } else if(response.data.resmsg === 'Invalid code'){
            window.alert('Invalid company code given');
          }
          window.location.reload();
        })
        .catch(err => {
          alert("Invalid-in catch");
          window.location.reload();
        });
    }

  render() {
    return (
      <div>
         <h5>Admin Sign Up</h5>
              <Form style={{ width: "20rem" }}>
                <Form.Group controlId="formGridName">
                  <Row>
                    <Col>
                      <Form.Control placeholder="Full Name" name="name" id="name" onChange={this.inputChangeHandler}/>
                    </Col>
                    <Col>
                      <Form.Control placeholder="Username" name="username" id="username" onChange={this.inputChangeHandler} />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Control
                    required
                    placeholder="Email"
                    name="email"
                    id="email"
                    type="email" onChange={this.inputChangeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="mobile">
                  <Form.Control
                    type="number"
                    required
                    placeholder="Mobile"
                    name="mobile"
                    id="mobile" onChange={this.inputChangeHandler}
                  />
                </Form.Group>
              
               
                <Form.Group controlId="password">
                  <Form.Control
                    type="password"
                    required
                    placeholder="Password"
                    required
                    name="password"
                    onChange={this.inputChangeHandler}
                  />
                </Form.Group>

                <Form.Group controlId="state">
                  <Dropdown
                    options={this.state.stateList}
                    name="stateName"
                    placeholder="State"
                    ref={ref => (this.stateName = ref)}
                    onChange={this.stateChangeHandler}
                    value={this.state.stateName}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Row>
                    <Col>
                    <Dropdown
                      options={this.state.companyList}
                      name="company"
                      placeholder="Company"
                      ref={ref => (this.company = ref)}
                      onChange={this.companyChangeHandler}
                      value={this.state.company}
                      required
                  />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Company Code" name="companyCode" id="companyCode" onChange={this.inputChangeHandler}/>
                    </Col>
                  </Row>
                </Form.Group>

                <Button className="buttonButton" type="submit" onClick={this.submitSignup}>
                  Sign Up!
                </Button>
              </Form>
              </div>
         
    );
  }
}

export default AdminSignup;
