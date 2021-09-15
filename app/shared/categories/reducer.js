import produce from 'immer';
import {
  CREATE_NEW_CATEGORY_SUCCESS,
  EDIT_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
} from 'containers/Categories/constants';
import { GET_USER_CATEGORIES_SUCCESS, SET_NO_CATEGORIES } from './constants';

const updateCategory = (categories, id, category) => {
  const index = categories.findIndex(cat => cat.id === id);

  if (index === -1) {
    return categories;
  }

  const newCategories = [...categories];

  newCategories[index] = category;

  return newCategories;
};

const deleteCategory = (categories, id) => {
  const index = categories.findIndex(category => category.id === id);

  if (index === -1) {
    return categories;
  }

  categories.splice(index, 1);
  return categories;
};

export const initialState = {
  categories: [],
  noCategories: false,
};

/* eslint-disable default-case, no-param-reassign */
const sharedCategoriesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER_CATEGORIES_SUCCESS:
        draft.categories = [...action.categories];
        break;

      case SET_NO_CATEGORIES:
        draft.noCategories = action.newState;
        break;

      case CREATE_NEW_CATEGORY_SUCCESS:
        draft.categories = [...draft.categories, action.category];
        break;

      case EDIT_CATEGORY_SUCCESS:
        draft.categories = updateCategory(
          state.categories,
          action.category.id,
          action.category,
        );
        break;
      case DELETE_CATEGORY_SUCCESS:
        draft.categories = [
          ...deleteCategory(state.categories, action.categoryId),
        ];
        break;
    }
  });

export default sharedCategoriesReducer;
