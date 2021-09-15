import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loadingIndicator state domain
 */

const selectLoadingIndicatorDomain = state =>
  state.loadingIndicator || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoadingIndicator
 */

const makeSelectLoadingIndicator = () =>
  createSelector(
    selectLoadingIndicatorDomain,
    substate => substate,
  );

const makeSelectScopes = () =>
  createSelector(
    selectLoadingIndicatorDomain,
    substate => substate.scopes,
  );

export default makeSelectLoadingIndicator;
export { selectLoadingIndicatorDomain, makeSelectScopes };
