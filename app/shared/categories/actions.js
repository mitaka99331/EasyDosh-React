import {
  GET_USER_CATEGORIES_REQUEST,
  GET_USER_CATEGORIES_SUCCESS,
  SET_NO_CATEGORIES,
} from './constants';

export function getCategoriesAction() {
  return {
    type: GET_USER_CATEGORIES_REQUEST,
  };
}

export function getCategoriesSuccessfulAction(categories) {
  return {
    type: GET_USER_CATEGORIES_SUCCESS,
    categories,
  };
}

export function setNoCategoriesAction(newState) {
  return {
    type: SET_NO_CATEGORIES,
    newState,
  };
}
