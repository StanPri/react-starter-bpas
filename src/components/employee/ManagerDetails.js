import React, { PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table';

class ManagerDetails extends React.Component {
  render () {
    return (
      <Table bordered>
        <thead>
          <tr className="active">
            <th colSpan="2">
              <h3>Manager</h3>
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

ManagerDetails.propTypes = {
};

export default ManagerDetails;
