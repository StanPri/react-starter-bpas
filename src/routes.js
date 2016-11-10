import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import EmployeeIndex from './components/employee/EmployeeIndex';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EmployeeIndex} />
    <Route path="about" component={AboutPage} />
  </Route>
);
