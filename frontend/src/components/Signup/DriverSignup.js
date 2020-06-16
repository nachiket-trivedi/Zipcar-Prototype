import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Signup.css";
import axios from "axios";
import {serverIp,serverPort} from '../../config';
const hostAddress=""+serverIp+":"+serverPort+"";

class DriverSignup extends Component {
  constructor(props) {
    super(props);
    this.state = { companyList:["C1","C2","C3"],
    stateList:["CA","TX","MN","IW","NY"],
    username: "",
    password: "",
    email: "",
    name: "",
    mobile: "",
    licenseState: "",
    street: "",
    licenseNumber: "",
    city: "",
    stateName:"",
    zipcode:"",
    creditCardName: "",
    creditCardNumber: "",
    creditCardExpiration: "",
    creditCardCVV: "",
    registrationDate: new Date(),
    registrationEndDate: new Date()
  }
  this.submitSignup = this.submitSignup.bind(this);
  this.inputChangeHandler = this.inputChangeHandler.bind(this);
  };
    
  
componentDidMount(){
//WRITE API TO GET COMPANY LIST
}

submitSignup = e => {
  var headers = new Headers();
  e.preventDefault();
  let customDate = new Date();
  // mm/dd/yyyy format.
  // checking if end date lies in next year.
  let endDate = ((customDate.getMonth() + 7) < 10?('0'+(customDate.getMonth() + 7)):customDate.getMonth() + 7)+'/'+(customDate.getDate() < 10?'0'+customDate.getDate():customDate.getDate())+'/'+customDate.getFullYear();
  if((customDate.getMonth() + 7) > 12){
    endDate = ((customDate.getMonth() + 7 - 12) < 10?('0'+(customDate.getMonth() + 7 - 12)):customDate.getMonth() + 7 - 12)+'/'+(customDate.getDate() < 10?'0'+customDate.getDate():customDate.getDate())+'/'+(customDate.getFullYear() + 1);
  }
  const data = {
    username: this.state.username,
    password: this.state.password,
    email: this.state.email,
    name: this.state.name,
    mobile: this.state.mobile,
    licenseState: this.state.licenseState,
    street: this.state.street,
    licenseNumber: this.state.licenseNumber,
    city: this.state.city,
    state:this.state.stateName,
    zipcode:this.state.zipcode,
    creditCardInfo: {
      number:this.state.creditCardNumber,
      name: this.state.creditCardName,
      expiration: this.state.creditCardExpiration,
      cvv: this.state.creditCardCVV
    },
    registrationDate: ((customDate.getMonth() + 1)<10?('0'+(customDate.getMonth() + 1)):(customDate.getMonth() + 1))+'/'+(customDate.getDate() < 10 ? '0'+customDate.getDate():customDate.getDate())+'/'+customDate.getFullYear(),
    registrationEndDate: endDate
  };

  axios.defaults.withCredentials = true;
  axios
    .post(hostAddress + "/users/driverSignup", data)
    .then(response => {
      console.log(response.data);
      if(response.data.resmsg === 'Driver Registered Successfully!'){
        window.alert('Registered Successfully');
        console.log("Response data after signip post-->" + response.data);
        localStorage.setItem("role", "driver");
        localStorage.setItem("email",this.state.email);
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("name", this.state.name);
        localStorage.setItem("jwtToken",response.data.token);
        window.location.reload();
      } else if(response.data.resmsg === 'Email Already in Use!'){
        window.alert('User already registered');
      } else if(response.data.resmsg === 'Error in adding!'){
        window.alert('Database Error');
        window.location.reload();
      } else if(response.data.resmsg === 'Invalid Card Details'){
        window.alert('Invalid Credit Card Details Provided');
      }
    })
    .catch(err => {
      alert("Invalid-in catch");
    });
}

stateChangeHandler = value => {
  //add StateID API
  this.setState({
    role: value
  });
  this.role.value = { value };
  };
inputChangeHandler = e => {
this.setState({
  [e.target.name]: e.target.value
})
}




  
  render() {
    return (
      <div>

      <h5>Driver Sign Up</h5>
              <Form style={{ width: "20rem" }}>
                <Form.Group controlId="formGridName">
                  <Row>
                    <Col>
                      <Form.Control 
                      placeholder="Full Name" 
                      name="name"
                      onChange={this.inputChangeHandler}/>
                    </Col>
                    <Col>
                    <Form.Control
                    required
                    placeholder="Username"
                    name="username"
                    onChange={this.inputChangeHandler}
                  />
                    </Col>
                  </Row>
                </Form.Group>
                
               
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    required
                    placeholder="Password"
                    required
                    name="password"
                    onChange={this.inputChangeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Control
                    required
                    placeholder="Street"
                    name="street"
                    onChange={this.inputChangeHandler}
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Row>
                    <Col>
                      <Form.Control placeholder="City" name="city" onChange={this.inputChangeHandler} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="State" name="stateName" onChange={this.inputChangeHandler} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Zip Code" name="zipcode" onChange={this.inputChangeHandler}/>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Control
                    required
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={this.inputChangeHandler}
                  />
                </Form.Group>

                <Form.Group controlId="mobile">
                  <Form.Control
                    required
                    placeholder="Mobile"
                    name="mobile"
                    type="number"
                    onChange={this.inputChangeHandler}
                  />
                </Form.Group>
              
                <Form.Group controlId="formGridLicense">
                  <Row>
                    <Col>
                      <Form.Control placeholder="License State" name="licenseState" onChange={this.inputChangeHandler} />
                    </Col>
                   
                    <Col>
                      <Form.Control placeholder="License Number" name="licenseNumber" onChange={this.inputChangeHandler}/>
                    </Col>
                   
                  </Row>
                </Form.Group>
                {/* <Form.Group controlId="license" >
                  <Form.File 
                    id="custom-file"
                    label="Attach License"
                    custom
                  />
                </Form.Group> */}

                  <Form.Group controlId="creditCardNumber">
                    <Form.Control
                      required
                      placeholder="Credit Card Number"
                      name="creditCardNumber"
                      type="number"
                      onChange={this.inputChangeHandler}
                    />
                  </Form.Group>

                <Form.Group controlId="CreditCardDetails">
                  <Row>
                    <Col sm={5}>
                      <Form.Control placeholder="Name" name="creditCardName" onChange={this.inputChangeHandler} />
                    </Col>
                    <Col sm={4}>
                      <Form.Control placeholder="Expiration" name="creditCardExpiration" onChange={this.inputChangeHandler} />
                    </Col>
                    <Col sm={3}>
                      <Form.Control placeholder="CVV" name="creditCardCVV" type="number" onChange={this.inputChangeHandler}/>
                    </Col>
                  </Row>
                </Form.Group>

                <Button className="buttonButton"  type="submit" onClick={this.submitSignup}>
                  Sign Up!
                </Button>
              </Form>
              </div>
         
    );
  }
}

export default DriverSignup;
