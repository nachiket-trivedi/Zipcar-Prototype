import React, { Component } from "react";
import { Col, Row, Container, ListGroup } from "react-bootstrap";
import "./Home.css";
import axios from "axios";
import { Redirect } from "react-router";
import Navbar from "../Navbar/HorizontalNav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import Navbar from '../Navbar/Navbar';
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import TimePicker from "react-time-picker";
import DatePicker from 'react-datepicker';
import {serverIp,serverPort} from '../../config';
const hostAddress=""+serverIp+":"+serverPort+"";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carType:'',
      rentalLocation:'',
      detailPage: false,
      time: "10:00",
      locations:[],
      typeList: ["Small Car", "Full Size Car", "Truck", "Luxury Car"],
      pickUpDate: '',
      pickUpTime: '',
      rentalLength:''
    };
    this.searchResult = this.searchResult.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.carTypeChangeHandler = this.carTypeChangeHandler.bind(this);
    this.rentalLocationChangeHandler = this.rentalLocationChangeHandler.bind(this);
    this.dateChangeHandler = this.dateChangeHandler.bind(this);
    this.timeChangeHandler = this.timeChangeHandler.bind(this);
  }

componentDidMount = async() =>{
  axios.defaults.withCredentials = true;
  let locationsArray = [];
  let allLocationResponse = await axios.get(hostAddress + "/driver/locations");
  if(allLocationResponse.status === 200){
    locationsArray = allLocationResponse.data.map((eachLocation)=>{
      return {
        label:eachLocation.locationName,
        value:eachLocation
      }
    });
    this.setState({
      locations: locationsArray
    });
  } else {
    window.alert('Error in fetching Rental Location');
  }
}

carTypeChangeHandler(e){
  console.log(e);
  this.setState({
    carType:e.value
  });
}

rentalLocationChangeHandler(e){
  console.log(e);
  this.setState({
    rentalLocation:e.value
  });
}

dateChangeHandler(e){
  console.log(e.target.value);
  this.setState({
    pickUpDate:e.target.value
  })
}

timeChangeHandler(e){
  console.log(e.target.value);
  this.setState({
    pickUpTime:e.target.value
  });
}


inputChangeHandler = e => {
  this.setState({
    [e.target.name]: e.target.value
  },()=>{
    console.log(this.state.rentalLength);
  })
}

  searchResult = e => {
    e.preventDefault();
    const data = {
      locationId: this.state.rentalLocation._id,
      driverId: localStorage.getItem("id"),
      type: this.state.carType,
      pickupTime: this.state.pickUpDate+" "+this.state.pickUpTime,
      lengthOfRental: this.state.rentalLength
    }

    let todayDate = new Date();
    let pickupTime = new Date(data.pickupTime);

    // difference in dates comes in milliseconds. So dividing by 60*60*1000 to get in hours
    let hoursDiff = Math.round(Math.abs((pickupTime - todayDate)/(60*60*1000)));

    if(hoursDiff >= 48) {
      window.alert('Can only book for max 2 days ahead');
    } else {
      axios.post(hostAddress+"/driver/createBooking",data)
      .then((response)=>{
        console.log(response);
        if(response.status === 200)
        {
          window.alert('Created Booking');
          window.location.reload();
        } else if(response.status === 201){
          console.log('Created Booking in nearby location');
          window.alert('Created Booking in Nearby Location');
          window.location.reload();
        } else {
          window.alert('Error during booking');
          window.location.reload();
        }
      }).catch((err)=>{
        console.log('Inside catch error during booking: '+err);
        window.alert('Error in Booking');
        window.location.reload();
      });
    }
  };

  render() {
    if (!localStorage.getItem('id')) {
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.location.href = '/';
    }
     
    let redirectNav = null;
    if(localStorage.getItem('email')==null){
      redirectNav=<Redirect to="/login"/>
    }
    if(localStorage.getItem('role')=="Driver"){
      redirectNav=<Redirect to="/login"/>
    }

    let displayDetails = null;

    if (this.state.detailPage == false) {
      displayDetails = (
        <div>
          <Form className="inputForm">
            <Form.Row>
              {" "}
              <Col>
                <Dropdown
                  options={this.state.typeList}
                  name="carType"
                  placeholder="Car Type"
                  value={this.state.carType}
                  onChange={this.carTypeChangeHandler}
                />
              </Col>
              <Col>
                <Dropdown
                  options={this.state.locations}
                  name="location"
                  placeholder="Location"
                  value={(this.state.rentalLocation===''?'':this.state.rentalLocation.locationName)}
                  onChange={this.rentalLocationChangeHandler}
                />
              </Col>
            </Form.Row>
            <br></br>

            <Form.Row>
              <Col>
                <Form.Text>Date</Form.Text>
                <Form.Control label="Date" placeholder="Date" type="date"
                onChange={this.dateChangeHandler}
                />
              </Col>
              <Col>
                <Form.Text>PickUp Time</Form.Text>
                <Form.Control placeholder="Start Time" type="time" 
                onChange={this.timeChangeHandler}/>
                {/* <TimePicker
          onChange={this.onChange}
          value={this.state.time}
        /> */}
              </Col>
              <Col>
                <Form.Text>Length Of Rental</Form.Text>
                <Form.Control
                  label="Length of Rental"
                  placeholder="Length of Rental in Hours"
                  type="number"
                  name="rentalLength"
                  max="72"
                  onChange={this.inputChangeHandler}
                />
              </Col>
            </Form.Row>
            <br></br>
            <Button className="buttonButton" onClick={this.searchResult}>
              Create
            </Button>
          </Form>
        </div>
      );
    } else {
      displayDetails = (
        <div>
          <h6>
            Showing Results for "5-seater 95113 for 4/24/2020 5:00 - 6:00"
          </h6>
          <ListGroup>
            <ListGroup.Item className="listItem">
              <Row>
                <Col>
                  <b> Toyoto Prius</b>
                </Col>
                <Col>
                  <b> San Jose Downtown 95113</b>{" "}
                </Col>
                <Col>
                  <Button
                    style={{
                      backgroundColor: "rgb(7, 146, 123)",
                      border: "1px solid rgb(7, 146, 123)"
                    }}
                    className="bookButton"
                  >
                    Book
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col>
                  <b> Type</b> 5-seater
                </Col>
                <Col>
                  <b>Year</b> 2017
                </Col>
                <Col></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="listItem">
              <Row>
                <Col>
                  <b> Toyoto Prius</b>
                </Col>
                <Col>
                  <b> San Jose Downtown 95113</b>{" "}
                </Col>
                <Col>
                  <Button
                    style={{
                      backgroundColor: "rgb(7, 146, 123)",
                      border: "1px solid rgb(7, 146, 123)"
                    }}
                    className="bookButton"
                  >
                    Book
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col>
                  <b> Type</b> 5-seater
                </Col>
                <Col>
                  <b>Year</b> 2017
                </Col>
                <Col></Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </div>
      );
    }
    
    return (
      <div className="mainDiv">
        {redirectNav}
        <Navbar />
        <div className="coverImage"></div>
        <hr></hr>

        <Container>
          <h3>
            <b>Book a Car!</b>
          </h3>
          {displayDetails}
        </Container>
      </div>
    );
  }
}

export default Home;

