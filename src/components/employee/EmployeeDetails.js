import React, { PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';

class EmployeeDetails extends React.Component {
  render () {
    return (
      <Table bordered>
        <thead>
          <tr className="active">
            <th colSpan="2">
              <h2 className="pull-left"></h2>
              <Button className="pull-right" bsSize="large">Print</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>  // repeated for number of entires
            <td></td> // repeated for number of entiry fields
          </tr>
        </tbody>
      </Table>
    );
  }
}

EmployeeDetails.propTypes = {
};

export default EmployeeDetails;
