import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import EmployeePage from './components/employee/EmployeePage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EmployeePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
