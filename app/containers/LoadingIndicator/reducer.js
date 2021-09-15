/*
 *
 * LoadingIndicator reducer
 *
 */
import produce from 'immer';
import { LOADING_TRUE, LOADING_FALSE } from './constants';

export const initialState = {
  scopes: {},
};

/* eslint-disable default-case, no-param-reassign */
const loadingIndicatorReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOADING_TRUE:
        draft.scopes[action.scope] = true;
        break;
      case LOADING_FALSE:
        draft.scopes[action.scope] = false;
        break;
    }
  });

export default loadingIndicatorReducer;
