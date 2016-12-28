import * as types from "./actionTypes";
import ItemApi from '../api/mockItemApi';
import {beginFetchCall} from './fetchStatusActions';

export function loadItemsSuccess(items)
{
  return { type: types.LOAD_ITEMS_SUCCESS, items };
}

export function createItemSuccess(item)
{
  return { type: types.CREATE_ITEM_SUCCESS, item};
}

export function loadItems() {
  return function(dispatch) {
    //Updates fetch async status in thunk
    dispatch(beginFetchCall());

    return ItemApi.getAllItems().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveItem(item) {
  return function (dispatch, getState) {
    //Updates fetch async status in thunk
    dispatch(beginFetchCall());

    return ItemApi.saveItem(item).then(savedItem => {
      dispatch(createItemSuccess(savedItem));
    }).catch(error => {
      throw(error);
    });
  };
}
