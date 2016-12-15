import React, {PropTypes} from 'react';
import {
  Col,
  Grid,
  Row,
  ListGroup,
  ListGroupItem,
  Image
} from 'react-bootstrap';


class AboutPage extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <h2>About</h2>
            <p>
              This is the page where we describe the application.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

AboutPage.propTypes = {};

export default AboutPage;
