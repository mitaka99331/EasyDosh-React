import produce from 'immer';
import { CHANGE_PASSWORD_FAIL } from './constants';

export const initialState = {
  changePasswordErrorsMap: {},
};

/* eslint-disable default-case, no-param-reassign */
const userProfilePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_PASSWORD_FAIL:
        draft.changePasswordErrorsMap = action.error;
        break;
    }
  });

export default userProfilePageReducer;
