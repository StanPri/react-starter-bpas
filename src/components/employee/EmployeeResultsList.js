import React, { PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table';
import Employees from   '../../api/EmployeeList';

class EmployeeResultsList extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      employees: Employees.slice(0, 14)
    };
  }

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
          {Object.keys(this.state.employees).map((key) => {
              return (<tr key = {key}>
                <td>{this.state.employees[key]["GivenName"]}</td>
                <td>{this.state.employees[key]["SurName"]}</td>
                <td>{this.state.employees[key]["Department"]}</td>
              </tr> );
            })
          }
        </tbody>
      </Table>
    );
  }
}

EmployeeResultsList.propTypes = {
};

export default EmployeeResultsList;
