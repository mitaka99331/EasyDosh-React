import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUserProfilePageDomain = state =>
  state.userProfilePage || initialState;

const makeSelectUserProfilePage = () =>
  createSelector(
    selectUserProfilePageDomain,
    substate => substate,
  );

const makeSelectChangePasswordError = () =>
  createSelector(
    selectUserProfilePageDomain,
    substate => substate.changePasswordErrorsMap,
  );
export default makeSelectUserProfilePage;
export { selectUserProfilePageDomain, makeSelectChangePasswordError };
