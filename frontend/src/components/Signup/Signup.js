import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TabProvider, Tab, Tabs, TabPanel, TabList } from "react-web-tabs";
import "./Signup.css";
import DriverSignup from './DriverSignup';
import AdminSignup from './AdminSignup';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="bg">
        <br></br>
        <center>
          <Card style={{ width: "25rem" }}>
            <br></br>
            <span
              className="fas fa-car"
              
              style={{
                marginRight: "10px",
                fontSize: "1.5rem",
                color: "rgb(7, 146, 123)"
              }}
            ></span>

            <h4>Create your account</h4>
           
            <center>
            <Tabs
            defaultTab="one"
            className="tabClass"
            onChange={tabId => {
              console.log(tabId);
            }}
          >
            <TabList>
              <Tab className="tabss" tabFor="one">
                Driver
              </Tab>

              <Tab className="tabss" tabFor="two">
                Admin
              </Tab> 

  
            </TabList>
            <hr></hr>
   
            <TabPanel tabId="one">
              <DriverSignup />
            </TabPanel>

            <TabPanel tabId="two">
            <AdminSignup />
            </TabPanel>
           
          </Tabs> 
           
              <br></br>
              <a className="linkColor" href="/login">Already Registered?</a>
              <br></br>
              <br></br>
            </center>
          </Card>
        </center>
      </div>
    );
  }
}

export default Signup;
