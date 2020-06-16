import React, { Component } from "react";
import { Col, Row, Container, ListGroup, Table } from "react-bootstrap";
import "./Admin.css";
import axios from "axios";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar/Navbar";
import "react-dropdown/style.css";

import { serverIp, serverPort } from "../../config";
const hostAddress = "" + serverIp + ":" + serverPort + "";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList:[]
    };
    this.terminateMembership = this.terminateMembership.bind(this);
  }

  componentDidMount = () => {
    axios.defaults.withCredentials = true;

    axios
      .post(hostAddress + "/admin/getAllUser")
      .then(response => {
        if (response.status == 200) {
          this.setState({
            userList: this.state.userList.concat(response.data)
          });
        } else {
          window.alert("Error in fetching Users");
        }
      });

  };

  terminateMembership = value => {
    
    const data = {
      id: value._id
    };
    axios.defaults.withCredentials = true;

    //Axios call to terminate Membership -- change isActive to false
    axios
      .post(hostAddress + "/admin/terminateMembership",data)
      .then(response => {
       // alert(response.status);
        if (response.status == 200) {
          alert("Membership Status Changed!!");
          window.location.reload();
        } 
      }).catch(err=>{
          alert("Couldn't Terminate Membership")
      });
     
    this.setState({});
  };

  render() {
    let displayDetails = null;
    let redirectNav = null;
    let details=[];
    if(localStorage.getItem('email')==null){
      redirectNav=<Redirect to="/login"/>
    }
    if(localStorage.getItem('role')=="Driver"){
      redirectNav=<Redirect to="/login"/>
    }

    displayDetails=this.state.userList.map(item=>{
        details.push(
          <tr>
            <td>{item.username}</td>
            <td>{item.name}</td>
            <td>{item.registrationDate}</td>
            <td>{item.registrationEndDate}</td>
            <td>{item.licenseState}</td>
            <td>{item.licenseNumber}</td>
            <td>{item.isActive}</td>
            {/* Can display Number of bookings which can be a hyperlink to the bookings page of the particular user*/}
            <td>
              <span>
                <Button
                  style={{ border: "0px", marginLeft: "8pxpx" }}
                  className="buttonButton"
                  onClick={this.terminateMembership.bind(
                    this,item)}
                >
                  Change
                </Button>
              </span>
            </td>
          </tr>
        );
      
    })
   

    let tableDetails = null;
    if(this.state.userList.length==0){
      tableDetails =(
        <div>
          <br>
          </br>
          <center>
            <h4> No users to show!</h4>
          </center>
          <br></br>
        </div>
      )
    }else{
       tableDetails =(
        <Table responsive>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Full Name</th>
              <th>Membership Start</th>
              <th>Membership End</th>
              <th>License State</th>
              <th>License Number</th>
              <th>Active Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>{displayDetails}{details}</tbody>
        </Table>
      );
    }
    
    return (
      <div className="mainDiv">
        {redirectNav}
        <Navbar />
        <div className="coverImage2"></div>
        <hr></hr>

        <Container>
          <h3>
            <b>User List</b>
          </h3>
          <br></br>
          {tableDetails}
        </Container>
      </div>
    );
  }
}

export default Users;
