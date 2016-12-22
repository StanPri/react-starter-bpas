import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './css/style.less';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadItems} from './actions/itemActions';

const store = configureStore();
store.dispatch(loadItems());


render(

  <Provider store = {store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,

    document.getElementById('app')
);
