import {combineReducers} from 'redux';
import items from './itemReducer';
import fetchCallsInProgress from './fetchStatusReducer';

const rootReducer = combineReducers({
  items,
  fetchCallsInProgress
});

export default rootReducer;
