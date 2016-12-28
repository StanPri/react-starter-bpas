//Keeps track of fetch call status
import * as types from './actionTypes';

export function beginFetchCall() {
  return {type: types.BEGIN_FETCH_CALL};
}
