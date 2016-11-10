import React, { PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table';

class EmployeeResultsList extends React.Component {
  render () {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Group</th>
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

EmployeeResultsList.propTypes = {
};

export default EmployeeResultsList;
