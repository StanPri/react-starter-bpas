import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar, Button} from 'react-bootstrap';
import json2csv from 'json2csv';
const ca_gov_logo = require('../../images/ca_gov_logo.png');
const cio_logo = require('../../images/cio_logo.png');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: []
    };
  }

  render() {
    return (
      <Navbar fixedTop fluid>
        <input type="checkbox" id="navbar-toggle-cbox" className="hidden"/>
        <div className="navbar-header">
          <label htmlFor="navbar-toggle-cbox" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" onClick={toggleMenuOnClick}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </label>
          <a href="http://www.ca.gov"><img className="header-ca-logo" src={ca_gov_logo}/></a>
          <a href="http://www.cio.ca.gov" className="header-cio-logo"><img src={cio_logo}/></a>
          <h1 className="header-title">Application</h1>
        </div>
        <div className="navbar-collapse collapse hidden" id="navbar">
          <ul className="nav navbar-nav navbar-right">
            <li onClick={toggleMenuOnClick}>
              <IndexLink to="/" activeClassName="active">
                <Button className="btn-outline">Main Page</Button>
              </IndexLink>
            </li>
            <li onClick={toggleMenuOnClick}>
              <Link to="/about" activeClassName="active">
                <Button className="btn-outline">About</Button>
              </Link>
            </li>
          </ul>
        </div>
        <div id="navbar-overlay" className="hidden" onClick={toggleMenuOnClick}/>
      </Navbar>
    );
  }
}

function toggleMenuOnClick(e) {
  if (document.body.clientWidth < 768) {
    document.getElementById('navbar-overlay').classList.toggle('hidden');
    document.getElementById('navbar').classList.toggle('hidden');
  }
}

function sortByKey(array, key) {
  return array.sort(function(a, b) {
    let x = a[key];
    let y = b[key];
    return ((x < y)
      ? -1
      : ((x > y)
        ? 1
        : 0));
  });
}

export default Header;
