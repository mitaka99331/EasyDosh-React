import { LOGOUT_REQUEST } from './constants';

export function logout() {
  return {
    type: LOGOUT_REQUEST,
  };
}
