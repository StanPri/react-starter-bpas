import * as types from "./actionTypes";
import ItemApi from '../api/mockItemApi';

export function loadItemsSuccess(items)
{
  return { type: types.LOAD_ITEMS_SUCCESS, items };
}

export function createItemSuccess(item)
{
  return { type: types.CREATE_ITEM_SUCCESS, item}
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

export function saveItem(item) {
  return function (dispatch, getState) {
    return ItemApi.saveItem(item).then(savedItem => {
      dispatch(createItemSuccess(savedItem));
    }).catch(error => {
      throw(error);
    });
  };
}
