import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Redirect } from "react-router";
import "./Navbar.css";
import { NavDropdown, Nav, Form, FormControl, Button } from "react-bootstrap";

class HorizontalNav extends React.Component {
  constructor(props){
    super(props);
    this.state={
      signedOut:false
    }
    this.handleLogout=this.handleLogout.bind(this);
  }

  handleLogout = () => {
    localStorage.clear();
window.location.reload();
    this.setState({
      signedOut:true
    })
  }

  render() {
    return (
      <Navbar variant="dark" style={{ backgroundColor: "rgb(7, 146, 123)",color:"white"}}>
        <Navbar.Brand href="/"  className="fas fa-car"
              style={{
                marginRight: "1ch",
                fontSize: "2rem",
                color: "white",
              }}></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/browse">Browse</Nav.Link>
            <NavDropdown title="Bookings" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/ongoingBooking">Ongoing Bookings</NavDropdown.Item>
              <NavDropdown.Item href="/upcomingBooking">
                Upcoming Bookings
              </NavDropdown.Item>
              <NavDropdown.Item href="/pastBooking">Past Bookings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-sm-2" >
          <Nav.Link href="/profile" style={{margin:"5px",color:"white"}}>Hello! <b className="nameTag">{localStorage.getItem('name')}</b></Nav.Link>
          <Nav.Link onClick={this.handleLogout} className="fas fa-sign-out-alt" style={{
                margin: "2px",
                fontSize: "1.8rem",
                color: "white",
              }}></Nav.Link>
      </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HorizontalNav;
