import { CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_FAIL } from './constants';

export function changePasswordAction({
  oldPassword,
  newPassword,
  confirmNewPassword,
}) {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    oldPassword,
    newPassword,
    confirmNewPassword,
  };
}

export function changePasswordFailedAction(error) {
  return {
    type: CHANGE_PASSWORD_FAIL,
    error,
  };
}
