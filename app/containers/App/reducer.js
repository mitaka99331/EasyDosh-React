import produce from 'immer';
import { GET_USER_INFO_SUCCESS } from './constants';

export const initialState = {
  userData: {
    id: 0,
    name: '',
    email: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER_INFO_SUCCESS:
        draft.userData.id = action.id;
        draft.userData.name = action.name;
        draft.userData.email = action.email;
        break;
    }
  });

export default appReducer;
