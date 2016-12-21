import * as types from "../actions/actionTypes";

export default function itemReducer(state = [], action){
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;

    default:
      return state;
  }
}
