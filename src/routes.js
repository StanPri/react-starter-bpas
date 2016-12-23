import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import App from './components/App';
import MainPage from './components/application/_MainPage';
import AboutPage from './components/about/_AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="about" component={AboutPage} />
    <Redirect from="*" to="/" />
  </Route>
);
