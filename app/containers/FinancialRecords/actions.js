/*
 *
 * FinancialRecords actions
 *
 */

import {
  CREATE_FINANCE_RECORD,
  CREATE_FINANCE_RECORD_ERRORS,
  FETCH_CATEGORY_STATS,
  FETCH_CATEGORY_STATS_SUCCESS,
  FETCH_FINANCIAL_RECORDS,
  FETCH_FINANCIAL_RECORDS_SUCCESS,
  SET_TAB_PANE,
  SET_DATE_FILTER,
} from './constants';

export function createFinanceRecordAction({
  description,
  date,
  category,
  recordType,
  sum,
}) {
  return {
    type: CREATE_FINANCE_RECORD,
    description,
    date,
    category,
    recordType,
    sum,
  };
}

export function setTabPane(index) {
  return {
    type: SET_TAB_PANE,
    index,
  };
}

export function setCreateFinanceRecordErrorsAction(errors) {
  return {
    type: CREATE_FINANCE_RECORD_ERRORS,
    errors,
  };
}

export function fetchFinancialRecordsAction(filters) {
  return {
    type: FETCH_FINANCIAL_RECORDS,
    filters,
  };
}

export function fetchFinancialRecordsSuccessAction(records) {
  return {
    type: FETCH_FINANCIAL_RECORDS_SUCCESS,
    records,
  };
}

export function fetchCategoryStatsAction() {
  return {
    type: FETCH_CATEGORY_STATS,
  };
}

export function fetchCategoryStatsSuccessAction(stats) {
  return {
    type: FETCH_CATEGORY_STATS_SUCCESS,
    stats,
  };
}

export function setDateFilterAction({ fromDate, toDate }) {
  return {
    type: SET_DATE_FILTER,
    fromDate,
    toDate,
  };
}
