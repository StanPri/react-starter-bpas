import React from 'react';
import {Link} from 'react-router';
import Search from './Search';
import EmployeeDetails from './EmployeeDetails';
import PageNumbers from './PageNumbers';
import EmployeeResultsList from './EmployeeResultsList';
import ManagerDetails from './ManagerDetails';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import '../../styles/style.css';

class EmployeeIndex extends React.Component {
  render() {
    return (
    <Grid fluid>

      <Row>
        <Col xs={6} xsOffset={3}>
          <Search />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={6}>
          <EmployeeResultsList />
          <PageNumbers />
        </Col>
        <Col xs={12} lg={6}>
          <EmployeeDetails />
        </Col>
        <Col xs={11} lg={5}>
          <ManagerDetails />
        </Col>
      </Row>

    </Grid>


    );
  }
}

export default EmployeeIndex;
