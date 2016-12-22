import * as types from "./actionTypes";
import ItemApi from '../api/mockItemApi';

export function loadItemsSuccess(items)
{
  return { type: types.LOAD_ITEMS_SUCCESS, items };
}

export function loadItems() {
  return function(dispatch) {
    return ItemApi.getAllItems().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}
