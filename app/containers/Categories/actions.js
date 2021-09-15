import {
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  CREATE_NEW_CATEGORY_REQUEST,
  CREATE_NEW_CATEGORY_SUCCESS,
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY_SUCCESS,
} from './constants';

export function deleteCategoryAction(categoryId) {
  return {
    type: DELETE_CATEGORY_REQUEST,
    categoryId,
  };
}

export function deleteCategorySuccessfulAction(categoryId) {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    categoryId,
  };
}

export function createCategoryAction(label, budget) {
  return {
    type: CREATE_NEW_CATEGORY_REQUEST,
    label,
    budget,
  };
}

export function createCategorySuccessfulAction(category) {
  return {
    type: CREATE_NEW_CATEGORY_SUCCESS,
    category,
  };
}

export function editCategoryAction(id, label, budget) {
  return {
    type: EDIT_CATEGORY_REQUEST,
    id,
    label,
    budget,
  };
}

export function editCategorySuccessfulAction(category) {
  return {
    type: EDIT_CATEGORY_SUCCESS,
    category,
  };
}
