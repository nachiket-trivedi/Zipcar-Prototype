import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import AdminHome from './components/Admin/AdminHome';
import AdminUser from './components/Admin/AdminUserList';
import AdminLocation from './components/Admin/AdminLocation';
import AdminVehicleType from './components/Admin/AdminVehicleType';
import AdminProfile from './components/Admin/Profile/AdminProfile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddVehicleType from './components/Admin/AddElements/VehicleType/AddVehicleType';
import AddVehicle from './components/Admin/Vehicles/AddVehicle';
import AdminVehicle from './components/Admin/AdminVehicle';
import UpdateVehicle from './components/Admin/Vehicles/EditVehicle';

import UpcomingBooking from './components/Bookings/UpcomingBooking';
import OngoingBooking from './components/Bookings/OngoingBooking';
import PastBooking from './components/Bookings/PastBooking';
import CarList from './components/Browse/CarList';
import * as serviceWorker from './serviceWorker';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/adminHome" component={AdminHome}/>
        <Route path="/adminUsers" component={AdminUser}/>
        <Route path="/adminVehicleType" component={AdminVehicleType}/>
        <Route path="/adminProfile" component={AdminProfile}/>
        <Route path="/addVehicleType" component={AddVehicleType}/>
        <Route path="/adminLocation" component={AdminLocation}/>
        <Route path="/addVehicle" component={AddVehicle}/>
        <Route path="/updateVehicle" component={UpdateVehicle}/>
        <Route path="/adminVehicle" component={AdminVehicle}/>
        <Route path="/upcomingBooking" component={UpcomingBooking}/>
        <Route path="/ongoingBooking" component={OngoingBooking}/>
        <Route path="/pastBooking" component={PastBooking}/>
        <Route path="/browse" component={CarList}/>
      </Router>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
