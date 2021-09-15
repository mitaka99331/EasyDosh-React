import { GET_USER_INFO, GET_USER_INFO_SUCCESS } from './constants';

export function getUserInfo() {
  return {
    type: GET_USER_INFO,
  };
}

export function getUserInfoSuccessfully({ id, name, email }) {
  return {
    type: GET_USER_INFO_SUCCESS,
    id,
    name,
    email,
  };
}
