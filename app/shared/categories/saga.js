import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  getCategoriesSuccessfulAction,
  setNoCategoriesAction,
} from './actions';
import { GET_USER_CATEGORIES_REQUEST } from './constants';

export function* performGetUserCategories() {
  try {
    const requestURL = `http://localhost:8000/api/getUserCategories`;
    const options = {
      method: 'GET',
      credentials: 'include',
    };

    const resp = yield call(request, requestURL, options);

    if (!resp || resp.message === 'Authentication failed') {
      window.location.reload();
    }

    if (resp.length === 0) {
      yield put(setNoCategoriesAction(true));
      return;
    }

    yield put(getCategoriesSuccessfulAction(resp));
    yield put(setNoCategoriesAction(false));
  } catch (err) {
    console.log(err);
  }
}

export default function* categoriesSaga() {
  yield takeLatest(GET_USER_CATEGORIES_REQUEST, performGetUserCategories);
}
