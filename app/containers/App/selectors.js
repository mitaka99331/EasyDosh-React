import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectUserId = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.id,
  );

const makeSelectUserInfo = () =>
  createSelector(
    selectGlobal,
    globalState => ({
      name: globalState.userData.name,
      email: globalState.userData.email,
    }),
  );

export { selectGlobal, makeSelectUserId, makeSelectUserInfo };
