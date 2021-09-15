import produce from 'immer';
import {
  DEFAULT_ACTION,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAIL,
} from './constants';

export const initialState = {
  loginMessage: '',
  loginErrors: {},
  registerMessage: '',
  registerErrors: {},
};

/* eslint-disable default-case, no-param-reassign */
const authenticationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOGIN_REQUEST_SUCCESS:
        draft.loginMessage = action.message;
        break;
      case LOGIN_REQUEST_FAIL:
        draft.loginErrors = action.error;
        break;
      case REGISTER_REQUEST_SUCCESS:
        draft.registerMessage = action.message;
        break;
      case REGISTER_REQUEST_FAIL:
        draft.registerErrors = action.error;
        break;
    }
  });

export default authenticationReducer;
