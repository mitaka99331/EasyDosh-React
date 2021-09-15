import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import { reset } from 'redux-form';
import { LOGIN_REQUEST, REGISTER_REQUEST } from './constants';
import {
  registerFailed,
  loginSuccess,
  loginFailed,
  registerSuccessful,
} from './actions';
import { ROOT } from '../../constants';

export function* performLogin({ email, password, rememberMe }) {
  try {
    const requestURL = `http://localhost:8000/api/login`;
    const options = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ email, password, rememberMe }),
    };

    const response = yield call(request, requestURL, options);

    if (!response.access_token) {
      yield put(loginFailed(response));
      yield put(reset('login'));
      return;
    }

    yield put(loginSuccess('Successfully logged in!'));
    yield put(push(ROOT));
  } catch (err) {
    console.log(err);
  }
}

export function* performRegister(action) {
  try {
    const requestURL = `http://localhost:8000/api/register`;

    const { name, email, password, confirmPassword } = action;

    const options = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      }),
    };

    const response = yield call(request, requestURL, options);

    // User encounterd validation errors
    if (!response.message === 'Register successful' || !response.access_token) {
      yield put(registerFailed(response));
      yield put(reset('register'));
      return;
    }

    yield put(registerSuccessful('Successfully registered!'));
    window.location.reload();
  } catch (err) {
    yield put(registerFailed(err));
    console.log(err);
  }
}

export default function* authenticationSaga() {
  yield takeLatest(LOGIN_REQUEST, performLogin);
  yield takeLatest(REGISTER_REQUEST, performRegister);
}
