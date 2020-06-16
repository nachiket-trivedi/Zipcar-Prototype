import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Booking from './Booking';
import axios from "axios";
import Navbar from "../Navbar/HorizontalNav";
import './BookingCommon.css';
import {Redirect} from 'react-router';

import {serverIp,serverPort} from '../../config';
const hostAddress=""+serverIp+":"+serverPort+"";

class OngoingBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postings: [],
      numberOfJobsToShowPerPage: 5,
      currentActivePage: 1,
    };
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount = async() =>{
    axios.defaults.withCredentials = true;
    let bookingsArray = [];
    let allLocationResponse = await axios.post(hostAddress + "/driver/bookings",{id:localStorage.getItem("id")});
    console.log('ComponentWillMount in OngoingBooking response');
    console.log(allLocationResponse);
    if(allLocationResponse.status === 200){
      bookingsArray = allLocationResponse.data.filter((eachBooking)=>{
        if(eachBooking.booking.status === 'ongoing')
          return true;
        else return false;
      });
      if(bookingsArray.length > 0){
        this.setState({
          postings: bookingsArray
        });
      } else {
        this.setState({
          noRecord:"true"
        });
      }
    } else {
      window.alert('Error in fetching Booking Information');
    }
  }

  jobList() {
    if (this.state.postings.length > 0) {
      const eachPageJobCards = [];
      let count = 0;
      const activePage = this.state.currentActivePage;
      for (let i = (activePage - 1) * this.state.numberOfJobsToShowPerPage; i < this.state.postings.length && count < this.state.numberOfJobsToShowPerPage; i++, count++) {
        eachPageJobCards.push(<Booking eachBooking={this.state.postings[i]} key={this.state.postings[i].booking._id} />);
      }
      return eachPageJobCards;
    }
    return [];
  }

  onPageChange(e) {
    console.log(e.target.value);
    let currentPage = this.state.currentActivePage;
    if (e.target.value === 'next') {
      currentPage += 1;
    } else if (e.target.value === 'prev') {
      currentPage -= 1;
    } else if (currentPage !== parseInt(e.target.value)) {
      currentPage = parseInt(e.target.value);
    } else return;
    this.setState({
      currentActivePage: currentPage,
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
    
    if (!localStorage.getItem('id')) {
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.location.href = '/';
    }
    let noRecordFoundMessage = '';
    if (this.state.noRecord) {
      noRecordFoundMessage = (
        <Alert variant="info">
          You have not made any Bookings.
        </Alert>
      );
    }
    let pagesBar = null;
    if (this.state.postings.length > 0) {
      const totalPageCount = Math.ceil(this.state.postings.length / this.state.numberOfJobsToShowPerPage);
      const allPages = [];
      for (let i = 1; i <= totalPageCount; i++) {
        allPages.push(
          <PaginationItem active={i === this.state.currentActivePage}>
            <PaginationLink name={i} value={i} onClick={this.onPageChange}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }
      pagesBar = (
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled={this.state.currentActivePage === 1}>
            <PaginationLink previous name="prev" value="prev" onClick={this.onPageChange} />
          </PaginationItem>
          {allPages}
          <PaginationItem disabled={this.state.currentActivePage === totalPageCount}>
            <PaginationLink next name="next" value="next" onClick={this.onPageChange} />
          </PaginationItem>
        </Pagination>
      );
    }
    return (
      <div className="mainDiv">
        {redirectNav}
        <Navbar />
        <div className="coverImage"></div>
        <hr></hr>

        <Container>
          <div>
            <div>
              <div className="main-div-studentProfile">
                <div className="main-relative-div-studentProfile">
                  <div className="row">
                    <div className="col-md-4-CompanyHome">
                      <div className="experienceHeading">
                        <h2 />
                      </div>
                    </div>
                    <div className="col-md-8-CompanyHome">
                      <div className="educationCard">
                        <div className="experienceHeading">
                          {noRecordFoundMessage}
                          {this.jobList()}
                          <br />
                          {pagesBar}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4-CompanyHome">
                      <div className="experienceHeading">
                        <h2 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default OngoingBooking;
