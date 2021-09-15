import { call, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOGOUT_REQUEST } from './constants';

export function* performLogout() {
  try {
    const requestURL = `http://localhost:8000/api/logout`;
    const options = {
      method: 'POST',
      credentials: 'include',
    };
    const resp = yield call(request, requestURL, options);

    if (resp.message !== 'Logout successful') {
      if (resp.message === 'Authentication failed') {
        window.location.reload();
      }
      return;
    }
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}

export default function* logoutSaga() {
  yield takeLatest(LOGOUT_REQUEST, performLogout);
}
