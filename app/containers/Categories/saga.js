import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { reset } from 'redux-form';

import {
  createCategorySuccessfulAction,
  editCategorySuccessfulAction,
  deleteCategorySuccessfulAction,
} from './actions';
import {
  DELETE_CATEGORY_REQUEST,
  CREATE_NEW_CATEGORY_REQUEST,
  EDIT_CATEGORY_REQUEST,
} from './constants';

export function* performDeleteCategory({ categoryId }) {
  try {
    const requestURL = `http://localhost:8000/api/deleteCategory/${categoryId}`;
    const options = {
      method: 'DELETE',
      credentials: 'include',
    };

    const resp = yield call(request, requestURL, options);

    if (resp.message !== 'Successfully deleted') {
      if (resp.message === 'Authentication failed') {
        window.location.reload();
      }

      yield put(deleteCategorySuccessfulAction(categoryId));
      return;
    }
  } catch (err) {
    console.log(err);
    window.location.reload();
  }
}

export function* performCreateNewCategory({ label, budget }) {
  try {
    const requestURL = `http://localhost:8000/api/createCategory`;
    const options = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        label,
        budget,
      }),
    };
    const { categoryId, message } = yield call(request, requestURL, options);

    if (!categoryId && message !== 'Category created successfully.') {
      if (message === 'Authentication failed') {
        window.location.reload();
      }
      return;
    }
    yield put(reset('newCategoryForm'));

    const newCategory = { id: categoryId, label, budget };
    yield put(createCategorySuccessfulAction(newCategory));
  } catch (err) {
    console.log(err);
  }
}

export function* performEditCategory({ id, label, budget }) {
  try {
    const requestURL = `http://localhost:8000/api/editCategory`;

    const options = {
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        id,
        label,
        budget,
      }),
    };

    const resp = yield call(request, requestURL, options);

    if (resp.message !== 'Successfully updated.') {
      if (resp.message === 'Authentication failed') {
        window.location.reload();
      }
      return;
    }

    const editCategory = { id, label, budget };
    yield put(editCategorySuccessfulAction(editCategory));
  } catch (err) {
    console.log(err);
  }
}

export default function* categoriesSaga() {
  yield takeLatest(DELETE_CATEGORY_REQUEST, performDeleteCategory);
  yield takeLatest(CREATE_NEW_CATEGORY_REQUEST, performCreateNewCategory);
  yield takeLatest(EDIT_CATEGORY_REQUEST, performEditCategory);
}
