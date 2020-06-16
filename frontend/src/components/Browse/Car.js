import React from 'react';
import { Card, Button, Modal, Table} from 'react-bootstrap';
import {Col, FormGroup, Label} from 'reactstrap';
import {serverIp,serverPort} from '../../config';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(props);
    this.capitalize = this.capitalize.bind(this);
  }

  capitalize(word) {
    if (word) {
      word = word.split(' ').map((eachWord) => eachWord.charAt(0).toUpperCase() + eachWord.substring(1)).join(' ');
      return word;
    }
    return '';
  }

  render() {
    return (
        <div>
          <br />
          <Card border="success" className="text-center">
            <Card.Body>
              <Card.Title>
                {this.capitalize(this.props.eachVehicle.vehicle.model)}
                {' '}
                | {' '}
                {this.capitalize(this.props.eachVehicle.vehicleType.name)}
                {' '}
                | {' '}
                {this.capitalize(this.props.eachVehicle.rentalLocation.locationName)}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <i>
                  {this.capitalize(this.props.eachVehicle.rentalLocation.street)}
                  {', '}
                  {this.capitalize(this.props.eachVehicle.rentalLocation.city)}
                  {', '}
                  {this.capitalize(this.props.eachVehicle.rentalLocation.state)}
                  {', '}
                  {this.props.eachVehicle.rentalLocation.zipcode}
                  {' '}
                </i>
              </Card.Subtitle>
              <Card.Text>
                <Table striped bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>0 - 5</th>
                      <th>6 - 10</th>
                      <th>11 - 15</th>
                      <th>16 - 20</th>
                      <th>21 - 24</th>
                      <th>25 - 34</th>
                      <th>35 - 44</th>
                      <th>45 - 60</th>
                      <th>61 - 72</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {this.props.eachVehicle.vehicleType.hourlySlab[0]}
                      </td>
                      <td>
                        {this.props.eachVehicle.vehicleType.hourlySlab[6]}
                      </td>
                      <td>
                        {this.props.eachVehicle.vehicleType.hourlySlab[11]}
                      </td>
                      <td>
                        {this.props.eachVehicle.vehicleType.hourlySlab[16]}
                      </td>
                      <td>
                        {this.props.eachVehicle.vehicleType.hourlySlab[21]}
                      </td>
                      <td>
                        {this.props.eachVehicle.vehicleType.hourlySlab[25]}
                      </td>
  
                      <td>
                        {this.props.eachVehicle.vehicleType.hourlySlab[35]}
                      </td>
                      <td>
                        {this.props.eachVehicle.vehicleType.hourlySlab[45]}
                      </td>
                      <td>
                        {this.props.eachVehicle.vehicleType.hourlySlab[61]}
                      </td>
                    </tr>
                  </tbody>
                </Table>{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <b>Late Cancellation Fee: </b>
              {' '}
              <i>${this.props.eachVehicle.vehicleType.lateCancellationCharge}</i>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              <b>Late Return Fee: </b>
              {' '}
              <i>${this.props.eachVehicle.vehicleType.lateCharges}/Hour</i>
              <br />
              <b>Condition: </b>
              <i>{this.props.eachVehicle.vehicle.condition}</i>
              &nbsp;
              &nbsp;
              <b>Mileage: </b>
              <i>{this.props.eachVehicle.vehicle.currentMileage}</i>
              &nbsp;
              &nbsp;
              <b>Last Service Date: </b>
              <i>{this.props.eachVehicle.vehicle.serviceDate}</i>
            </Card.Footer>
          </Card>
          <br />
        </div>
    );
  }
}

export default Car;
