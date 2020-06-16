import React, { Component } from "react";
import { Col, Row, Card, Modal } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {serverIp,serverPort} from '../../config';
const hostAddress=""+serverIp+":"+serverPort+"";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SignedUpFlag: false,
      username: "",
      password: "",
      role: "",
      roleList: ["Driver", "Admin"],
      modalIsOpen: false,
    };
  
    this.handleClose = this.handleClose.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.roleChangeHandler = this.roleChangeHandler.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  roleChangeHandler = e => {
    console.log('e in roleChangeHandler');
    console.log(e);
    this.setState({
      role: e.value
    });
    //this.role.value = { value };
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitLogin = e => {
    var headers = new Headers();
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };

    if (this.state.role === "Admin") {
      axios.defaults.withCredentials = true;
      axios
        .post(hostAddress + "/users/adminlogin", data)
        .then(response => {
          console.log(response.data);
          if(response.data.msg === "Login Successful"){
            console.log("Response data after login post-->" + response.data);
            localStorage.setItem("role", "admin");
            localStorage.setItem("email", response.data["email"]);
            localStorage.setItem("id",response.data["id"]);
            localStorage.setItem("username", this.state.username);
            localStorage.setItem("name", response.data["name"]);
            localStorage.setItem("jwtToken",response.data.token)
          } else if(response.data.msg === "Database Error"){
            window.alert('Database Error');
          } else if(response.data.msg === "Invalid Password"){
            window.alert('Invalid Password');
          } else if(response.data.msg === "User not Found!"){
            window.alert('User not found');
          }
          window.location.reload();
        })
        .catch(err => {
          alert("Invalid-in catch");
        });
    } else {
      axios.defaults.withCredentials = true;
      axios
        .post(hostAddress + "/users/driverlogin", data)
        .then(response => {
          if(response.data.msg === "Login Successful"){
            console.log("Response data after login post-->" + response.data);
            localStorage.setItem("role", "driver");
            localStorage.setItem("email", response.data["email"]);
            localStorage.setItem("id",response.data["id"]);
            localStorage.setItem("username", this.state.username);
            localStorage.setItem("name", response.data["name"]);
            localStorage.setItem("jwtToken",response.data.token);
            window.location.reload();
          } else if(response.data.msg === "Database Error"){
            window.alert('Database Error');
            window.location.reload();
          } else if(response.data.msg === "Invalid Password"){
            window.alert('Invalid Password');
            window.location.reload();
          } else if(response.data.msg === "User not Found!"){
            window.alert('User not found');
            window.location.reload();
          } else if (response.data.msg === "Not a active User!") {
            window.alert('Not a active User!');
            window.location.reload();
          } else if(response.data.msg === "Account Expired"){
            window.alert('Account Expired');
            this.setState({
              modalIsOpen: true
            })

            // window.location.reload();
          }
        })
        .catch(err => {
          alert("Invalid-in catch");
        });
    }
  };

  renewMember = e =>{
    e.preventDefault();
    axios.defaults.withCredentials = true;

    const data = {
      username: this.state.username
    };

    axios.post(hostAddress + "/driver/renewMembership", data).then(response => {
      console.log('Membership renew login');
      console.log(response)
      if (response.status === 200) {
        alert("Membership Renewed!");
        window.location.reload();
      } else {
        window.alert("Error in Renewing:(");
      }
    });
  }

  handleClose = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  submitSignup = e => {
    return <Redirect to="/signup" />;
  };

  render() {
    if (localStorage.getItem('role')=== "admin") {
      return <Redirect to="/adminHome" />;
    }else if(localStorage.getItem('role')=== "driver"){
      return <Redirect to="/home" />;
    }

    let modalContent = null;

    modalContent = (
      <div>
      
        <p>Your membership period has ended.</p><p> Do you want to renew it to access your old account?</p>
        <span>
          <Button className="buttonButton" onClick={this.renewMember}>
            Renew
          </Button>
        </span>
        <span>
          <Button className="cancelButton" onClick={this.handleClose}>
            Cancel
          </Button>
        </span>
      </div>
    );

    return (
      <div className="bg">
        <br></br>
        <Modal show={this.state.modalIsOpen} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <h6>
                    <b>Membership Renewal</b>
                  </h6>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>{modalContent}</Modal.Body>
            </Modal>
        <center>
          <Card style={{ width: "24rem" }}>
            <br></br>
            <span
              className="fas fa-car"
              style={{
                marginRight: "10px",
                fontSize: "1.5rem",
                color: "rgb(7, 146, 123)"
              }}
            ></span>

            <h4>Let's get Started!</h4>

            <Form className="input">
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Username" name="username" id="username" onChange={this.inputChangeHandler}/>
                </Col>
                <Col>
                  <Form.Control placeholder="Password" type="password" name="password" id="password" onChange={this.inputChangeHandler} />
                </Col>
              </Form.Row>
              <br></br>
              <Form.Row>
                <Col>
                  {/* <Form.Control placeholder="Role" /> */}
                  <Dropdown
                    options={this.state.roleList}
                    name="role"
                    placeholder="Role"
                    ref={ref => (this.role = ref)}
                    onChange={this.roleChangeHandler}
                    value={this.state.role}
                    required
                  />
                </Col>
              </Form.Row>

              <Form.Row>
                <Col>
                  <center>
                    <br></br>
                    <Button className="buttonButton" onClick={this.submitLogin}>Login</Button>
                  </center>
                </Col>
              </Form.Row>
            </Form>
            <p>
              Go around with your own wheels!{" "}
              <a className="linkColor" href="/signup">
                {" "}
                Register Today
              </a>
            </p>
          </Card>
        </center>
      </div>
    );
  }
}

export default Login;
