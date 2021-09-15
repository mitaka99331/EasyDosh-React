import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSharedCategoriesDomain = state =>
  state.sharedCategories || initialState;

const makeSelectCategories = () =>
  createSelector(
    selectSharedCategoriesDomain,
    substate => substate.categories,
  );

const makeSelectNoCategories = () =>
  createSelector(
    selectSharedCategoriesDomain,
    substate => substate.noCategories,
  );

export {
  selectSharedCategoriesDomain,
  makeSelectCategories,
  makeSelectNoCategories,
};
