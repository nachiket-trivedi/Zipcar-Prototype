import React, { Component } from 'react';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';


const renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
    <div className="autocomplete-root">
        <input {...getInputProps({ className: 'form-control js-launchModal tt-hint', autoFocus: true, placeholder: "Where to go?" })} />
        <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => (
                <div {...getSuggestionItemProps(suggestion)}>
                    <span>{suggestion.description}</span>
                </div>
            ))}
        </div>
    </div>
);

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            sDate: "",
            eDate: "",
            s1Date: moment().format('MM-DD-YYYY'),
            e1Date: moment().format('MM-DD-YYYY'),
            guest: 1,
            search: false,
            properties: []
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleCityChange = city => {
        this.setState({ city });
    };



    handleDateChange(event, picker) {

        this.setState({
            sDate: picker.startDate.format('MM-DD-YYYY'),
            eDate: picker.endDate.format('MM-DD-YYYY'),
            s1Date: picker.startDate.format('MM-DD-YYYY'),
            e1Date: picker.endDate.format('MM-DD-YYYY')
        })
    }

    handleGuest = (e) => {

        this.setState({
            guest: e.target.value
        })

    }

    handleSearch() {
        this.setState({
            search: true
        })
    }

    componentDidMount() {
        this.setState({
            properties: ["Prop1,Prop2"]
        })
    }

    render() {
        let search = null;
        

        let properties = null
        let propertyHeader = null
        // if (cookie.load('isOwner') == 1 && cookie.load('id')) {
        //     propertyHeader = "Your Properties"
        //     properties = this.state.properties.map(property => {
        //         let fadeImages = property.photos.split(',');

        //         return (
        //             <div className='col-md-4' style={{ marginTop: '20px' }}>
        //                 <div class="hit__content1" >
        //                     <div className='row'>
        //                         <img class="card-img-top col-md-12" src={fadeImages[0]} alt="Card image cap" style={{ padding: '0px', height: '250px' }} ></img>
        //                         <div className="col-md-12" style={{ marginTop: '20px' }}>
        //                             <span class="" style={{ marginLeft: '20px', marginTop: '20px', fontWeight: 'bold' }}>
        //                                 Head Line:
        //                             </span>
        //                         </div>
        //                         <div className="col-md-12" >
        //                             <span class="" style={{ marginLeft: '20px', fontWeight: 'bold' }}>
        //                                 {property.headline}
        //                             </span>
        //                         </div>
        //                         <div className="col-md-12" style={{ marginTop: '10px' }}>
        //                             <span class="" style={{ marginLeft: '20px', marginTop: '20px', fontWeight: 'bold' }}>
        //                                 Available Time:
        //                             </span>
        //                         </div>
        //                         <div className="col-md-12" >
        //                             <span class="" style={{ marginLeft: '20px', fontWeight: 'bold' }}>
        //                                 {property.availableFrom} to {property.availableTill}
        //                             </span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         )

        //     })
        // }
        if (true) {
            propertyHeader = "Your Bookings"
            properties = this.state.properties.map(property => {
                let fadeImages = null;

                return (
                    <div className='col-md-4' style={{ marginTop: '20px' }}>
                        <div class="hit__content1" >
                            <div className='row'>
                                <img class="card-img-top col-md-12" src='https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg' alt="Card image cap" style={{ padding: '0px', height: '250px' }} ></img>
                                <div className="col-md-12" style={{ marginTop: '20px' }}>
                                    <span class="" style={{ marginLeft: '20px', marginTop: '20px', fontWeight: 'bold' }}>
                                        Head Line:
                                        </span>
                                </div>
                                <div className="col-md-12" >
                                    <span class="" style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                                        {property.headline}
                                    </span>
                                </div>
                                <div className="col-md-12" style={{ marginTop: '10px' }}>
                                    <span class="" style={{ marginLeft: '20px', marginTop: '20px', fontWeight: 'bold' }}>
                                        Booked Time:
                                        </span>
                                </div>
                                <div className="col-md-12" >
                                    <span class="" style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                                        {property.bookedFrom} to {property.bookedTill}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })
        }

        return (
            <div>
                <header role="banner">
                    <div class="HeroImage" style={{ backgroundImage: "url(https://csvcus.homeaway.com/rsrcs/stab-cms-resources/0.10.30/images/homepage/jumbotron/ptaHpNextHeroImage/large.jpg)", height: '90vh' }}>
                        <div class="HeroImage__content">
                            <div class="Jumbotron">
                                <div class="Jumbotron__wrapper">
                                    <div class="Jumbotron__content">
                                        <h1 class="HeadLine">
                                            <span class="HeadLine__text">Book beach houses, cabins,</span>
                                            <span class="HeadLine__text">condos and more, worldwide</span>
                                        </h1>
                                        <div id="stab-searchbox" class="mobile-inline">
                                            <div class="stab-searchbox">
                                                <form class="js-searchForm " method="post">
                                                    <legend>
                                                        <span class="searchbox-title">Search</span>
                                                        <i class="icon-close icon-white close-form-xs-modal" aria-hidden="true"></i>
                                                    </legend>
                                                    <div class="searchbox-input searchbox-input-where-to form-group has-icon">
                                                        <PlacesAutocomplete value={this.state.city} onChange={this.handleCityChange}>
                                                            {renderFunc}

                                                        </PlacesAutocomplete>
                                                        <i class="icon-location form-control-icon" aria-hidden="true"></i>
                                                        <label class="sr-only" for="searchKeywords">Where do you want to go?</label>

                                                    </div>

                                                    <div class="searchbox-input searchbox-input-arrive form-group has-icon">
                                                        <DateRangePicker onEvent={this.handleDateChange} >
                                                            <input type="text" value={this.state.sDate} id="stab-searchbox-start-date" class="form-control js-startDate" name="from-date" tabindex="2" readOnly={true} placeholder="Arrive" />
                                                            <i aria-hidden="true" class="icon-calendar form-control-icon"></i>
                                                            <label class="sr-only" for="stab-searchbox-start-date">Arrive</label>
                                                        </DateRangePicker>
                                                    </div>

                                                    <div class="searchbox-input searchbox-input-arrive form-group has-icon">
                                                        <DateRangePicker onEvent={this.handleDateChange} startDate={this.state.s1Date} endDate={this.state.e1Date}>
                                                            <input type="text" value={this.state.eDate} id="stab-searchbox-end-date" class="form-control js-endDate" name="to-date" tabindex="3" readOnly={true} placeholder="Depart" />
                                                            <i class="icon-calendar form-control-icon" aria-hidden="true"></i>
                                                            <label class="sr-only" for="stab-searchbox-end-date">Depart</label>
                                                        </DateRangePicker>
                                                    </div>





                                                    <div id="pets-search-warning" class="guest-selector-view">
                                                        <div id="stab-guest-selector" class="form-group searchbox-input searchbox-select icon-usergroup">
                                                            <select value={this.state.guest} onChange={this.handleGuest} class="form-control js-guestSelectorInput" tabindex="4" placeholder="Guests">
                                                                <option value="1">1 Guest</option>
                                                                <option value="2">2 Guests</option>
                                                                <option value="3">3 Guests</option>
                                                                <option value="4">4 Guests</option>
                                                                <option value="5">5 Guests</option>
                                                                <option value="6">6 Guests</option>
                                                                <option value="7">7 Guests</option>
                                                                <option value="8">8 Guests</option>
                                                                <option value="9">9 Guests</option>
                                                                <option value="10">10 Guests</option>
                                                            </select>

                                                        </div>
                                                    </div>

                                                    <button class="btn btn-primary btn-lg searchbox-submit js-searchSubmit" data-effect="ripple" type="button" tabindex="5" data-loading-animation="true" onClick={this.handleSearch}>
                                                        Search
                                                </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ValueProps hidden-xs">
                                        <ul class="ValueProps__list">
                                            <li class="ValueProps__item">
                                                <strong class="ValueProps__title">Your whole vacation starts here</strong>
                                                <span class="ValueProps__blurb">Choose a rental from the world's best selection</span>
                                            </li>
                                            <li class="ValueProps__item">
                                                <strong class="ValueProps__title">Book and stay with confidence</strong>
                                            </li>
                                            <li class="ValueProps__item">
                                                <strong class="ValueProps__title">Your vacation your way</strong>
                                                <span class="ValueProps__blurb">More space, more privacy, no compromises</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='col-md-12'>
                    <br />
                    <div className='col-md-12'>
                        <h2 style={{ textAlign: 'center', color: 'steelblue', fontWeight: 'bold', fontSize: '22px' }}>{propertyHeader}</h2>
                    </div>
                    {properties}
                </div>
            </div>

        )
    }
}

//export Home Component
export default Home;