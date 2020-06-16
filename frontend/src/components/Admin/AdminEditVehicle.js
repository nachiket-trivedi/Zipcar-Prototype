// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;

// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
// import React, { Component } from "react";
// import { Col, Row, Container, ListGroup } from "react-bootstrap";
// import "./Vehicle.css";
// import axios from "axios";
// import { Redirect } from "react-router";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../Navbar/Navbar";
// import "react-dropdown/style.css";
// import Dropdown from "react-dropdown";

// class AdminEditVehicle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: this.props.location.state.model,
//       makeYear: "",
//       registrationTag: "",
//       currentMileage: "",
//       serviceDate: "",
//       condition: "",
//       status: "",
//       primaryRegion: "",
//       location: "",
//       locationList: ["Location 1", "Location 2"],
//       statusList: ["Booked", "Available", "In Use", "Unusable"],
//       conditionList: ["Old", "New", "OK", "Damaged"],
//       type: "",
//       typeList: ["Type1", "Type2"]
//     };
//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.locationChangeHandler = this.locationChangeHandler.bind(this);
//     this.statusChangeHandler = this.statusChangeHandler.bind(this);
//     this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
//     this.typeChangeHandler = this.typeChangeHandler.bind(this);
//     this.addVehicle = this.addVehicle.bind(this);
//   }
//   componentDidMount = () => {
//     //Add Code to Get all Locations
//     //Add Code to Get all Vehicle Types
//   };

//   typeChangeHandler = value => {
//     this.setState({
//       type: value
//     });
//     this.type.value = { value };
//   };

//   locationChangeHandler = value => {
//     this.setState({
//       location: value
//     });
//     this.location.value = { value };
//   };
//   statusChangeHandler = value => {
//     this.setState({
//       status: value
//     });
//     this.status.value = { value };
//   };

//   inputChangeHandler = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   conditionChangeHandler = value => {
//     this.setState({
//       condition: value
//     });
//     this.condition.value = { value };
//   };



//   addVehicle = e => {
//     //Axios Call to add Vehicle
//   };

//   render() {
//     let displayDetails = null;
//     return (
//       <div className="mainDiv">
//         <Navbar />
//         <br></br>
//         <div>
//           <a href="/adminVehicle">
//             <Button className="buttonButton2"> Back </Button>{" "}
//           </a>
//         </div>

//         <div className="addForm">
//           <Container>
//             <h5>Edit Vehicle</h5>
//             <Form>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Model"
//                     name="model"
//                     id="model"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Make Year"
//                     name="makeYear"
//                     id="makeYear"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Registration tag"
//                     name="registrationTag"
//                     id="registrationTag"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Current Mileage"
//                     name="currentMileage"
//                     id="currentMileage"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.typeList}
//                     name="type"
//                     placeholder="Type"
//                     ref={ref => (this.type = ref)}
//                     onChange={this.typeChangeHandler}
//                     value={this.state.type}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.locationList}
//                     name="location"
//                     placeholder="Location"
//                     ref={ref => (this.location = ref)}
//                     onChange={this.locationChangeHandler}
//                     value={this.state.location}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Form.Control
//                     placeholder="Service Date"
//                     name="serviceDate"
//                     id="serviceDate"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     placeholder="Primary State"
//                     name="primaryRegion"
//                     id="primaryRegion"
//                     onChange={this.inputChangeHandler}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <Form.Row>
//                 <Col>
//                   <Dropdown
//                     options={this.state.conditionList}
//                     name="condition"
//                     placeholder="Condition"
//                     ref={ref => (this.condition = ref)}
//                     onChange={this.conditionChangeHandler}
//                     value={this.state.condition}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     options={this.state.statusList}
//                     name="status"
//                     placeholder="Status"
//                     ref={ref => (this.status = ref)}
//                     onChange={this.statusChangeHandler}
//                     value={this.state.status}
//                   />
//                 </Col>
//               </Form.Row>
//               <br></br>
//               <span>
//                 <Button className="buttonButton">Update</Button>
//               </span>
//               <span>
//                 <Button className="cancelButton">Clear</Button>
//               </span>
//             </Form>
//           </Container>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminEditVehicle;
