import { call, put, takeLatest } from 'redux-saga/effects';
import { reset } from 'redux-form';
import request from 'utils/request';
import { renameKeyInObject } from 'utils/helpers';
import { CHANGE_PASSWORD_REQUEST } from './constants';
import { changePasswordFailedAction } from './actions';

export function* performChangePassword({
  oldPassword,
  newPassword,
  confirmNewPassword,
}) {
  try {
    const requestURL = `http://localhost:8000/api/changePassword`;
    const options = {
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        oldPassword,
        newPassword,
        newPassword_confirmation: confirmNewPassword,
      }),
    };
    const resp = yield call(request, requestURL, options);

    if (resp.message !== 'Password successfully changed') {
      if (resp.message === 'Authentication failed') {
        window.location.reload();
      }

      const newResp = renameKeyInObject(resp, 'oldPassword', 'Old password');
      yield put(changePasswordFailedAction(newResp));
      yield put(reset('changePassword'));
      return;
    }

    yield put(reset('changePassword'));
  } catch (err) {
    console.log(err);
  }
}

export default function* userProfilePageSaga() {
  yield takeLatest(CHANGE_PASSWORD_REQUEST, performChangePassword);
}
