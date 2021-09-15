/*
 *
 * FinancialRecords reducer
 *
 */
import produce from 'immer';
import { formatDate } from 'utils/helpers';

import {
  CREATE_FINANCE_RECORD_ERRORS,
  FETCH_CATEGORY_STATS_SUCCESS,
  FETCH_FINANCIAL_RECORDS_SUCCESS,
  SET_TAB_PANE,
  SET_DATE_FILTER,
} from './constants';

export const initialState = {
  activeIndex: 0,
  createFinancialRecordErrors: {},
  financialRecords: [],
  categoryStats: [],
  filters: { fromDate: null, toDate: null },
};

/* eslint-disable default-case, no-param-reassign */
const financialRecordsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_TAB_PANE:
        draft.activeIndex = action.index;
        break;
      case CREATE_FINANCE_RECORD_ERRORS:
        draft.createFinancialRecordErrors = action.errors;
        break;
      case FETCH_FINANCIAL_RECORDS_SUCCESS:
        draft.financialRecords = action.records;
        break;
      case FETCH_CATEGORY_STATS_SUCCESS:
        draft.categoryStats = action.stats;
        break;
      case SET_DATE_FILTER:
        draft.filters = {
          ...state.filters,
          fromDate: action.fromDate ? formatDate(action.fromDate) : null,
          toDate: action.toDate ? formatDate(action.toDate) : null,
        };
        break;
    }
  });

export default financialRecordsReducer;
