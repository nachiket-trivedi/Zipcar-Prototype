import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Col, Button, FormGroup, Input, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Car from './Car';
import axios from "axios";
import Dropdown from 'react-dropdown';
import './CarList.css';
import Navbar from "../Navbar/HorizontalNav";

import {serverIp,serverPort} from '../../config';
const hostAddress=""+serverIp+":"+serverPort+"";

class CarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVehicles: [],
      filteredVehicles: [],
      numberOfJobsToShowPerPage: 5,
      currentActivePage: 1,
      searchValue: '',
      selectedOption:'',
      userOptions:['Rental Location','Vehicle Model','Car Type'],
    };
    this.onPageChange = this.onPageChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeSelectedOptionHandler = this.onChangeSelectedOptionHandler.bind(this);
    this.findVehiclesHandler = this.findVehiclesHandler.bind(this);
    this.handleSearchReset = this.handleSearchReset.bind(this);
  }

  componentDidMount = async() =>{
    axios.defaults.withCredentials = true;
    try{
      let allVehicleResponse = await axios.post(hostAddress + "/driver/search");
      console.log('ComponentWillMount in CarList response');
      console.log(allVehicleResponse);
      if(allVehicleResponse.status === 200){
        if(allVehicleResponse.data.length > 0){
          this.setState({
            allVehicles:allVehicleResponse.data,
            filteredVehicles:allVehicleResponse.data
          });
        } else {
          this.setState({
            noRecord:"true"
          });
        }
      } else {
        window.alert('Error in fetching Vehicles');
      }
    } catch(err){
      window.alert('Error in fetching vehicles');
    }
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  onChangeSelectedOptionHandler(e){
    this.setState({
      selectedOption:e.value
    });
  }

  findVehiclesHandler(e){
    e.preventDefault();
    if(this.state.selectedOption!=='Rental Location' && this.state.selectedOption!=='Vehicle Model' && this.state.selectedOption!=='Car Type'){
      window.alert('Please select category from dropdown');
    } else {
      let searchedVehicles = [];
      if(this.state.selectedOption === 'Rental Location'){
        for(let each of this.state.allVehicles){
          if(each.rentalLocation.locationName.toLowerCase().includes(this.state.searchValue.toLowerCase())){
            searchedVehicles.push(each);
          }
        }
        this.setState({
          filteredVehicles:searchedVehicles
        });
      } else if(this.state.selectedOption === 'Vehicle Model'){
        for(let each of this.state.allVehicles){
          if(each.vehicle.model.toLowerCase().includes(this.state.searchValue.toLowerCase())){
            searchedVehicles.push(each);
          }
        }
        this.setState({
          filteredVehicles:searchedVehicles
        });
      } else if(this.state.selectedOption === 'Car Type'){
        for(let each of this.state.allVehicles){
          if(each.vehicle.type.toLowerCase().includes(this.state.searchValue.toLowerCase())){
            searchedVehicles.push(each);
          }
        }
        this.setState({
          filteredVehicles:searchedVehicles
        });
      } else {
        window.alert('Wrong option');
      }
    }
  }

  jobList() {
    if (this.state.filteredVehicles.length > 0) {
      const eachPageJobCards = [];
      let count = 0;
      const activePage = this.state.currentActivePage;
      for (let i = (activePage - 1) * this.state.numberOfJobsToShowPerPage; i < this.state.filteredVehicles.length && count < this.state.numberOfJobsToShowPerPage; i++, count++) {
        eachPageJobCards.push(<Car eachVehicle={this.state.filteredVehicles[i]} key={this.state.filteredVehicles[i].vehicle._id} />);
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

  handleSearchReset(e) {
    e.preventDefault();
    this.setState({
      searchValue: '',
      selectedOption: '',
      currentActivePage:1,
      filteredVehicles:this.state.allVehicles
    });
  }

  render() {
    if (!localStorage.getItem('id')) {
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.location.href = '/';
    }
    let noRecordFoundMessage = '';
    if (this.state.noRecord) {
      noRecordFoundMessage = (
        <Alert variant="info">
          No vehicles present currently. Please Come back later
        </Alert>
      );
    }
    let pagesBar = null;
    if (this.state.filteredVehicles.length > 0) {
      const totalPageCount = Math.ceil(this.state.filteredVehicles.length / this.state.numberOfJobsToShowPerPage);
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
        <Navbar />
        <div className="coverImage"></div>
        <hr></hr>

        <Container>
          <div>
          <div id="postingsFilters">
              <div data-hook="quick-filters">
                <div className="style__card___1rhof style__fitted___5wNfd" data-hook="card">
                  <div className="style__card-item___B1f7m style__medium___2atZe">
                    <div className="style__input-fields___3mtFs">
                      <form onSubmit={this.findVehiclesHandler} style={{width:1200}}>
                        <FormGroup row>
                          <Col sm={6}>
                            <Input type="text" name="searchValue" id="searchValue" 
                                    placeholder="Rental Location Name, Vehicle Model or Car Type..." 
                                    value={this.state.searchValue} 
                                    name="searchValue"
                                    onChange={this.onChange} 
                                    pattern="^[a-zA-Z]+([ .]{1}[a-zA-Z]+)*$"
                                    title="It can only contain letters, single space character and period. It must start with letter and cannot end with special character"
                                    required/>
                          </Col>
                          <Col sm={3}>
                            <Dropdown
                                options={this.state.userOptions}
                                onChange={this.onChangeSelectedOptionHandler}
                                value={this.state.selectedOption}
                                placeholder="Given Search Is.."
                                required
                            />
                          </Col>
                          <Col sm={3}>
                            <Button className="buttonButton" style={{width:100,height:40}}>Search</Button>
                            {' '}
                          <Button color="danger" style={{ width: 100, height: 40 }} onClick={this.handleSearchReset}>Reset</Button>
                          </Col>
                        </FormGroup>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default CarList;
