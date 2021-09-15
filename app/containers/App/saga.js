import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import { GET_USER_INFO } from './constants';
import { getUserInfoSuccessfully } from './actions';

export function* performGettingUserInfo() {
  try {
    const requestURL = `http://localhost:8000/api/getUser`;
    const options = {
      method: 'GET',
      credentials: 'include',
    };
    const resp = yield call(request, requestURL, options);

    if (!resp.credentials || resp.message === 'Authentication failed') {
      yield put(push('/'));
      return;
    }

    yield put(getUserInfoSuccessfully(resp.credentials));
  } catch (err) {
    console.log(err);
  }
}

export default function* appSaga() {
  yield takeLatest(GET_USER_INFO, performGettingUserInfo);
}
