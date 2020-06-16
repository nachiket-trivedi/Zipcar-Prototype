import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import { Redirect } from "react-router";
import "./Navbar.css";

let redirectNav = null,
  selectedNav,
  navbarTag = null;

class Navbar extends React.Component {
  navHandler = e => {
    selectedNav = e;
    if (e === "home") {
      redirectNav = <Redirect to="/adminHome" />;
    }else if (e === "addElement/location") {
      redirectNav = <Redirect to="/adminLocation" />;
    }else if (e === "addElement/vehicleType") {
      redirectNav = <Redirect to="/adminVehicleType" />;
    } else if (e === "users") {
      redirectNav = <Redirect to="/adminUsers" />;
    }else if (e === "profile") {
      redirectNav = <Redirect to="/adminProfile" />;
    }else if (e === "vehicle") {
      redirectNav = <Redirect to="/adminVehicle" />;
    }else if (e === "logout") {
      localStorage.clear();
      redirectNav = <Redirect to="/login" />;
    }
    this.setState({});
  };

  render() {
    if (true) {
      navbarTag = (
        <SideNav
          onSelect={selected => {
            this.navHandler(selected);
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav selected={selectedNav}>
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>

              <NavText>
                <b>Home</b>
              </NavText>
            </NavItem>

            <NavItem eventKey="addElement">
              <NavIcon>
                <i
                  className="fa fa-fw fa-list"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>
                <b>Add Basics</b>
              </NavText>

              <NavItem eventKey="addElement/location">
             
                <NavText><b>Locations</b></NavText>
              </NavItem>
              <NavItem eventKey="addElement/vehicleType">
                <NavText><b>Vehicle Type</b></NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="users">
              <NavIcon>
                <i
                  className="fa fa-fw fa-user"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>
                <b>Users</b>
              </NavText>
            </NavItem>

            <NavItem eventKey="vehicle">
              <NavIcon>
                <i
                  className="fa fa-fw fa-car"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>
                <b>Map Cars</b>
              </NavText>
            </NavItem>
            {/* <NavItem eventKey="profile">
              <NavIcon>
                <i
                  className="fa fa-fw fa-id-card"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>
                <b> Profile</b>
              </NavText>
            </NavItem> */}

            <NavItem eventKey="logout">
              <NavIcon>
                <i
                  className="fa fa-fw fa-sign-out-alt"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>
                <b>Logout</b>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      );
    }

    return (
      <div>
        {redirectNav}
        {navbarTag}
      </div>
    );
  }
}
export default Navbar;
