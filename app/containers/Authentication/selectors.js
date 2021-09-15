import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuthenticationDomain = state =>
  state.authentication || initialState;

const makeSeletLoginMessage = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.loginMessage,
  );
const makeSelectLoginErrors = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.loginErrors,
  );
const makeSelectRegisterErrors = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.registerErrors,
  );
const makeSelectAuthentication = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate,
  );

export default makeSelectAuthentication;
export {
  selectAuthenticationDomain,
  makeSeletLoginMessage,
  makeSelectRegisterErrors,
  makeSelectLoginErrors,
};
