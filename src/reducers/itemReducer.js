import * as types from "../actions/actionTypes";

export default function itemReducer(state = [], action){
  switch (action.type) {

    case types.LOAD_ITEMS_SUCCESS:
      return action.items;
      
    case types.CREATE_ITEM_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.item)
      ];

    default:
      return state;
  }
}
