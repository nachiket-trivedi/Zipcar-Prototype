import React from 'react';
import { Card, Button, Modal, ListGroup } from 'react-bootstrap';
import {Col, FormGroup, Label, FormText} from 'reactstrap';
import axios from "axios";
import Dropdown from "react-dropdown";
import {serverIp,serverPort} from '../../config';
import {Redirect} from 'react-router';

const hostAddress=""+serverIp+":"+serverPort+"";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationShow:false,
      locations:[],
      rentalLocation:'',
    };
    console.log(props);
    this.capitalize = this.capitalize.bind(this);
    this.startBooking = this.startBooking.bind(this);
    this.handleApplicationClose = this.handleApplicationClose.bind(this);
    this.applyForJob = this.applyForJob.bind(this);
    this.endBooking = this.endBooking.bind(this);
    this.cancelBooking = this.cancelBooking.bind(this);
    this.rentalLocationChangeHandler = this.rentalLocationChangeHandler.bind(this);
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

  capitalize(word) {
    if (word) {
      word = word.split(' ').map((eachWord) => eachWord.charAt(0).toUpperCase() + eachWord.substring(1)).join(' ');
      return word;
    }
    return '';
  }

  startBooking = async(e) =>{
    e.preventDefault();
    axios.defaults.withCredentials = true;
    let startBookingResponse = await axios.post(hostAddress + "/driver/startBooking",{id:this.props.eachBooking.booking._id});
    if(startBookingResponse.status === 200){
      window.alert('Booking Started Successfully');
      window.location.reload();
    } else if(startBookingResponse.status === 201){
      window.alert('Booking Can Only be started on or after pickup time');
      window.location.reload();
    } else {
      window.alert('Error in starting Booking');
      window.location.reload();
    }
  }

  rentalLocationChangeHandler(e){
    console.log(e);
    this.setState({
      rentalLocation:e.value
    });
  }

  applyForJob(e){
    e.preventDefault();
    this.setState({
      applicationShow:true
    })
  }

  handleApplicationClose(){
    this.setState({
      applicationShow:false
    })
  }

  endBooking = async(e)=>{
    e.preventDefault();
    axios.defaults.withCredentials = true;
    let startBookingResponse = await axios.post(hostAddress + "/driver/endBooking",{id:this.props.eachBooking.booking._id, dropLocationId: this.state.rentalLocation._id});
    if(startBookingResponse.status === 200){
      window.alert('Booking Ended Successfully with No Late Fee');
      window.location.reload();
    } else if(startBookingResponse.status === 201){
      window.alert('Booking Ended Successfully with No Late Fee');
      window.location.reload();
    } else {
      window.alert('Error in ending Booking');
      window.location.reload();
    }
  }

  cancelBooking = async(e)=>{
    e.preventDefault();
    axios.defaults.withCredentials = true;
    let startBookingResponse = await axios.post(hostAddress + "/driver/cancelBooking",{id:this.props.eachBooking.booking._id});
    if(startBookingResponse.status === 200){
      window.alert('Booking Cancelled Successfully with No Charge');
      window.location.reload();
    } else if(startBookingResponse.status === 201){
      window.alert('Booking Cancelled Successfully with Late Cancellation Charge');
      window.location.reload();
    } else {
      window.alert('Error in cancelling Booking');
      window.location.reload();
    }
  }

  render() {
    let redirectNav = null;
    if (localStorage.getItem("email") == null) {
      redirectNav = <Redirect to="/login" />;
    }
    if (localStorage.getItem("role") == "Admin") {
      redirectNav = <Redirect to="/login" />;
    }

    let startBookingButton = '';
    let cancelBookingButton = '';
    if(this.props.eachBooking.booking.status === 'upcoming'){
      startBookingButton = <Button className="buttonButton" onClick={this.startBooking}>Start Booking</Button>
      cancelBookingButton = <Button variant="danger" onClick={this.cancelBooking}>Cancel Booking</Button>
    }

    let endBookingButton = '';
    if(this.props.eachBooking.booking.status === 'ongoing'){
      endBookingButton = <Button className="buttonButton" onClick={this.applyForJob}>End Booking</Button>
    }

    let cardFooter = <Card.Footer>
                        <b>Length of Rental: </b>
                        {' '}
                        <i>{this.props.eachBooking.booking.lengthOfRental} Hours</i>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <b>Car Condition: </b>
                        {' '}
                        <i>{this.props.eachBooking.vehicle.condition}</i>
                      </Card.Footer>

    let actualEndTime = 'N/A';
    if(this.props.eachBooking.booking.status === 'past'){
      actualEndTime = this.props.eachBooking.booking.actualDropTime;

      cardFooter = <Card.Footer>
                      <b>Desired Rental Hours: </b>
                      {' '}
                      <i>{this.props.eachBooking.booking.lengthOfRental} Hours</i>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <b>Actual Rental Hours: </b>
                      {' '}
                      <i>{this.props.eachBooking.booking.actualLengthOfRental}</i>
                      <br />
                      <b>Rent Fee: </b>
                      {' '}
                      <i>${this.props.eachBooking.booking.rentFee}</i>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <b>Late Fee: </b>
                      {' '}
                      <i>${this.props.eachBooking.booking.lateFee}</i>
                    </Card.Footer>
    }

    return (
      <div>
        {redirectNav}
        <div>
          <br />
          <Card border="success" className="text-center">
            <Card.Body>
              <Card.Title>
                {this.capitalize(this.props.eachBooking.vehicle.model)}
                {' '}
                | {' '}
                {this.props.eachBooking.rentalLocation?this.capitalize(this.props.eachBooking.rentalLocation.locationName):'N/A'}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <i>
                  {this.props.eachBooking.rentalLocation?this.capitalize(this.props.eachBooking.rentalLocation.street):'N/A'}
                  {', '}
                  {this.props.eachBooking.rentalLocation?this.capitalize(this.props.eachBooking.rentalLocation.city):''}
                  {', '}
                  {this.props.eachBooking.rentalLocation?this.capitalize(this.props.eachBooking.rentalLocation.state):''}
                  {', '}
                  {this.props.eachBooking.rentalLocation?this.props.eachBooking.rentalLocation.zipcode:''}
                  {' '}
                </i>
              </Card.Subtitle>
              <Card.Text>
                <b>Pick Up Time: </b>{this.props.eachBooking.booking.pickupTime}
                <br />
                <b>Drop Time: </b>{actualEndTime}
              </Card.Text>
              {startBookingButton}{' '}{cancelBookingButton}{' '}{endBookingButton}
            </Card.Body>
            {cardFooter}
          </Card>
          <br />
        </div>
        <div>
          <Modal show={this.state.applicationShow} onHide={this.handleApplicationClose} >
            <Modal.Header closeButton>
              <Modal.Title>
                Select Dropping Rental Location
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup row>
                  <Label for="location" sm={2}>Select Location</Label>
                  <Col sm={10}>
                    <Dropdown
                      options={this.state.locations}
                      name="location"
                      placeholder="Dropping Location"
                      value={(this.state.rentalLocation===''?'':this.state.rentalLocation.locationName)}
                      onChange={this.rentalLocationChangeHandler}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 4, offset:3 }}>
                    {/* I am using Button of react-bootstrap and not reactstrap and hence cannot give onSubmit for form and giving onClick of button */}
                    <Button className="buttonButton" style={{width:150,height:50}} onClick={this.endBooking}>End Booking</Button>
                  </Col>
                </FormGroup>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Booking;
