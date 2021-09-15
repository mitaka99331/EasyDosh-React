import {
  DEFAULT_ACTION,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  REGISTER_REQUEST,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function login({ email, password, rememberMe }) {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
    rememberMe,
  };
}

export function loginSuccess(message) {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    message,
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_REQUEST_FAIL,
    error,
  };
}

export function register({ name, email, password, confirmPassword }) {
  return {
    type: REGISTER_REQUEST,
    name,
    email,
    password,
    confirmPassword,
  };
}

export function registerSuccessful(message) {
  return {
    type: REGISTER_REQUEST_SUCCESS,
    message,
  };
}

export function registerFailed(error) {
  return {
    type: REGISTER_REQUEST_FAIL,
    error,
  };
}
