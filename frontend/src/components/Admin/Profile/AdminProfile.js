import React, { useState, Profiler } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";
import Navbar from "../../Navbar/Navbar";
import "./AdminProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {Redirect} from 'react-router';

import {
  Jumbotron,
  Media,
  Container,
  ButtonGroup,
  Row,
  Col,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";



class Profile extends React.Component {
constructor(props){
    super(props);
    this.state = {
        editFlag: false,
        username:"",
        email:"",
        mobile:"",
        name:"",
        companyId:"",
        state:"",
        company:"",
        companyList:["Company 1","COmpany 2"]
      };
  
      this.updatePage = this.updatePage.bind(this);
      this.saveForm = this.saveForm.bind(this);
      this.inputChangeHandler = this.inputChangeHandler.bind(this);
      this.companyChangeHandler = this.companyChangeHandler.bind(this);
    }
    updatePage = e => {
      this.setState({
          editFlag:true
      });
    };
    companyChangeHandler = value => {
      this.setState({
        company: value
      });
      this.company.value = { value };
      // this.company.value = { value };
    };
    // companyChangeHandler = value => {
    //   this.setState({
    //     company: value
    //   });
    //   this.company.value = { value };
    //   // this.company.value = { value };
    // };
  
    clearForm = e =>{
      this.setState({
        name:"",
        company:"",
        state:"",
        mobile:"",
        editFlag: false
      });
    }  
    inputChangeHandler = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    
    



  saveForm= e =>{
    //axios call to update profile
    this.setState({
        editFlag:false
    });
  }

  render() {
     
    let redirectNav = null;
    if(localStorage.getItem('email')==null){
      redirectNav=<Redirect to="/login"/>
    }
    if(localStorage.getItem('role')=="Driver"){
      redirectNav=<Redirect to="/login"/>
    }
let personalProfileDetails=null;
if(this.state.editFlag==false){
    personalProfileDetails =
          <div>
            <br></br>
            <Row>
              <Col>
                <i
                  class="fas fa-user"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i>
               <b>Name</b> {' '}Alaukika Diwanji
              </Col>
              <Col>
                <i
                  class="fas fa-key"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i>
                <b>Username</b>{' '}alaukikaalaukika
              </Col>
            </Row>
            <Row>
              <Col> <i
                  class="fas fa-envelope"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i><b>Email</b>{' '}alaukika@email.com</Col>
              <Col> <i
                  class="fas fa-mobile"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i><b>Mobile</b>{' '}6695658909</Col>
            </Row>
            <Row>
              <Col> <i
                  class="fas fa-address-card"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i><b>Company </b>{' '}XYZ Company</Col>
                 <Col> <i
                  class="fas fa-city"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i><b>State</b>{' '}CA</Col>
            </Row>
         
            <br></br>
            <Button className="buttonButton" onClick={this.updatePage}> Update</Button>
          </div>
       
}else{
    personalProfileDetails = 
          <div>
            <br></br>
            <Row>
              <Col>
                <i
                  class="fas fa-user"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i>
               <b>Name</b> {' '}<input type="text" value="Alaukika Diwanji" name="name" id="name" onChange={this.inputChangeHandler.bind(this)}/>
              </Col>
              <Col>
                <i
                  class="fas fa-key"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i>
                <b>Username</b>{' '}alaukikalaukika
              </Col>
            </Row>
            <Row>
              <Col> <i
                  class="fas fa-envelope"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i><b>Email</b>{' '}alaukika@email.com</Col>
              <Col> <i
                  class="fas fa-mobile"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i><b>Mobile</b>{' '}<input type="number" value="6695658909" name="mobile" id="mobile" onChange={this.inputChangeHandler.bind(this)}/></Col>
            </Row>
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
                  /></Col>
                 <Col> <i
                  class="fas fa-city"
                  style={{
                    margin: "10px 10px 20px 0px",
                    fontSize: "1.2rem",
                    color: "rgb(7, 146, 123)"
                  }}
                ></i><b>State</b>{' '}<input type="text" value="CA" name="state" id="state" onChange={this.inputChangeHandler.bind(this)}/></Col>
            </Row>
           
            
            <br></br>
            <Row>

            <Button className="buttonButton" onClick={this.saveForm}> Save</Button>
            <Button className="cancelButton" onClick={this.clearForm}> Cancel</Button>
            </Row>
           
          </div>
       
}

    return (
      <div className="mainDiv">
        {redirectNav}
        <Navbar />
        {/* <div className="navDiv">
          <Navbar />
        </div> */}
        <div className="homeDiv">
          <Container>
            <br></br>
            <br></br>
            <Row>
              <Col sm={8}>
                <h3>Personal Details</h3>
                {personalProfileDetails}
              </Col>
              <Col sm={4} className="floatR">
                {/* <Media>
                  <Media
                    object
                    className="imageBox"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHlYyJhoxpn0uPTkuea1SMnlsFWjWAdahvg7VLON2aL-9nKLWJ&s"
                    alt="Profileimage"
                  />
                </Media> */}
              </Col>
            </Row>
           
            
          </Container>
        </div>
      </div>
    );
  }
}
export default Profile;
