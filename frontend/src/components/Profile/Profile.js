import React, { useState, Profiler } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";
//import Navbar from "../Navbar/Navbar";
import Navbar from "../Navbar/HorizontalNav";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Redirect } from "react-router";

import {
  Table,
  Media,
  Modal,
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
} from "react-bootstrap";

import { serverIp, serverPort } from "../../config";
const hostAddress = "" + serverIp + ":" + serverPort + "";


// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      modalIsOpen: false,
      companyFees: ""
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleTerminate = this.handleTerminate.bind(this);
    this.terminateMember = this.terminateMember.bind(this);
    this.renewMember = this.renewMember.bind(this);
  }

  componentWillMount = async () => {
    axios.defaults.withCredentials = true;

    const data = {
      email: localStorage.getItem("email")
    };

    axios.post(hostAddress + "/driver/getUser", data).then(response => {
      if (response.status == 200) {
        this.setState({
          user: response.data
        });
      } else {
        window.alert("Error in fetching Details");
      }
    });   
  };


  handleTerminate = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  terminateMember = e => {
    axios.defaults.withCredentials = true;

    const data = {
      email: localStorage.getItem("email"),
      id:this.state.user._id
    };

    axios.post(hostAddress + "/driver/terminateMembership", data).then(response => {
      if (response.status == 200) {
        alert("Membership Terminated!");
        localStorage.clear();
        window.location.reload();
        // this.setState({
        //   user: response.data
        // });
      } else {
        window.alert("Error in fetching Details");
      }
    });
  };

  renewMember = e =>{
    axios.defaults.withCredentials = true;

    const data = {
      id:localStorage.getItem("id")
    };

    axios.post(hostAddress + "/driver/renewMembership", data).then(response => {
      if (response.status == 200) {
        alert("Membership Renewed!");
        window.location.reload();
      } else {
        window.alert("Error in Renewing:(");
      }
    });
  }

  render() {
    let personalProfileDetails = null;
    let modalContent = null;

    modalContent = (
      <div>
      
        <p>Once you terminate your mebership, you will be logged out of the system and will not be able to login in again. </p><p>Are sure you want to terminate membership?</p>
        <span>
          <Button className="buttonButton" onClick={this.handleClose}>
            Cancel
          </Button>
        </span>
        <span>
          <Button className="cancelButton" onClick={this.terminateMember}>
            Terminate
          </Button>
        </span>
      </div>
    );

    //if(this.state.editFlag==false){
    personalProfileDetails = (
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
            <b>Name</b> {this.state.user.name}
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
            <b>Username</b> {this.state.user.username}
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <i
              class="fas fa-envelope"
              style={{
                margin: "10px 10px 20px 0px",
                fontSize: "1.2rem",
                color: "rgb(7, 146, 123)"
              }}
            ></i>
            <b>Email</b> {this.state.user.email}
          </Col>
          <Col>
            {" "}
            <i
              class="fas fa-mobile"
              style={{
                margin: "10px 10px 20px 0px",
                fontSize: "1.2rem",
                color: "rgb(7, 146, 123)"
              }}
            ></i>
            <b>Mobile</b> {this.state.user.mobile}
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <i
              class="fas fa-address-card"
              style={{
                margin: "10px 10px 20px 0px",
                fontSize: "1.2rem",
                color: "rgb(7, 146, 123)"
              }}
            ></i>
            <b>Address </b> {this.state.user.street}
          </Col>
          <Col>
            {" "}
            <i
              class="fas fa-city"
              style={{
                margin: "10px 10px 20px 0px",
                fontSize: "1.2rem",
                color: "rgb(7, 146, 123)"
              }}
            ></i>
            <b>City</b> {this.state.user.city}
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <i
              class="fas fa-flag-usa"
              style={{
                margin: "10px 10px 20px 0px",
                fontSize: "1.2rem",
                color: "rgb(7, 146, 123)"
              }}
            ></i>
            <b>State</b> {this.state.user.state}
          </Col>
          <Col>
            {" "}
            <i
              class="fas fa-hashtag"
              style={{
                margin: "10px 10px 20px 0px",
                fontSize: "1.2rem",
                color: "rgb(7, 146, 123)"
              }}
            ></i>
            <b>Zipcode</b> {this.state.user.zipcode}
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <i
              class="fas fa-id-badge"
              style={{
                margin: "10px 10px 20px 0px",
                fontSize: "1.2rem",
                color: "rgb(7, 146, 123)"
              }}
            ></i>
            <b>License Number</b> {this.state.user.licenseNumber}
          </Col>
          <Col>
            {" "}
            <i
              class="fas fa-flag-usa"
              style={{
                margin: "10px 10px 20px 0px",
                fontSize: "1.2rem",
                color: "rgb(7, 146, 123)"
              }}
            ></i>
            <b>License State</b> {this.state.user.licenseState}
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <i
              class="fas fa-calendar-day"
              style={{
                margin: "10px 10px 20px 0px",
                fontSize: "1.2rem",
                color: "rgb(7, 146, 123)"
              }}
            ></i>
            <b>MemberShip Start Date</b> {this.state.user.registrationDate}
          </Col>
          <Col>
            {" "}
            <i
              class="fas fa-calendar-day"
              style={{
                margin: "10px 10px 20px 0px",
                fontSize: "1.2rem",
                color: "rgb(7, 146, 123)"
              }}
            ></i>
            <b>MemberShip End Date</b> {this.state.user.registrationEndDate}
          </Col>
        </Row>
        <br></br>
        <Button className="buttonButton" onClick={this.handleTerminate}>
          {" "}
          Terminate Membership
        </Button>
      </div>
    );

    let redirectNav = null;
    if (localStorage.getItem("email") == null) {
      redirectNav = <Redirect to="/login" />;
    }
    if (localStorage.getItem("role") == "Admin") {
      redirectNav = <Redirect to="/login" />;
    }

    return (
      <div className="mainDiv">
        <Navbar />
        {redirectNav}
        
        {/* <div className="navDiv">
          <Navbar />
        </div> */}
        <div className="homeDiv">
          <Container>
          <Modal show={this.state.modalIsOpen} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <h6>
                    <b>Confirmation</b>
                  </h6>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>{modalContent}</Modal.Body>
            </Modal>
            <Row>
              <Col sm={10}>
                <h3>Personal Details</h3>
                {personalProfileDetails}
              </Col>
            </Row>
            
            <hr></hr>

            <Row>
              <h3> Membership Charges</h3>
            </Row>
            <div>
              <Table>
                <thead>
                  <th> Membership Duration</th>
                  <th>Membership Charges</th>
                </thead>
                <tbody>
                  <td> 6 months</td>
                  <td>
                    {"$ 49.99"}
                  </td>
                  <td> </td>
                </tbody>
              </Table>
            </div>
            <Button className="buttonButton" onClick={this.renewMember}> Renew Membership</Button>
            {/* <h3>Payment Details</h3>
            <Button className="buttonButton"> Edit Payment Options</Button>
            <br></br> */}
          </Container>
        </div>
        
      </div>
    );
  }
}
export default Profile;
