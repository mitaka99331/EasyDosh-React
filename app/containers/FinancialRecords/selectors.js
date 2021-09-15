import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the financialRecords state domain
 */

const selectFinancialRecordsDomain = state =>
  state.financialRecords || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FinancialRecords
 */

const makeSelectFinancialRecords = () =>
  createSelector(
    selectFinancialRecordsDomain,
    substate => substate,
  );

const makeSelectActiveIndex = () =>
  createSelector(
    selectFinancialRecordsDomain,
    substate => substate.activeIndex,
  );

const makeSelectFilters = () =>
  createSelector(
    selectFinancialRecordsDomain,
    substate => substate.filters,
  );

const makeSelectCreateFinancialRecordErrors = () =>
  createSelector(
    selectFinancialRecordsDomain,
    substate => substate.createFinancialRecordErrors,
  );

const makeSelectFinancialRecordsData = () =>
  createSelector(
    selectFinancialRecordsDomain,
    substate => substate.financialRecords,
  );

const makeSelectCategoryStats = () =>
  createSelector(
    selectFinancialRecordsDomain,
    substate => substate.categoryStats,
  );

export default makeSelectFinancialRecords;
export {
  selectFinancialRecordsDomain,
  makeSelectActiveIndex,
  makeSelectCreateFinancialRecordErrors,
  makeSelectFinancialRecordsData,
  makeSelectCategoryStats,
  makeSelectFilters,
};
