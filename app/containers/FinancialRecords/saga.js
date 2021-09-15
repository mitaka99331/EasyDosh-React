import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { formatDate } from 'utils/helpers';
import { reset } from 'redux-form';
import {
  CREATE_FINANCE_RECORD,
  FETCH_CATEGORY_STATS,
  FETCH_FINANCIAL_RECORDS,
} from './constants';
import {
  fetchCategoryStatsAction,
  fetchCategoryStatsSuccessAction,
  fetchFinancialRecordsSuccessAction,
  setCreateFinanceRecordErrorsAction,
  setTabPane,
} from './actions';

export function* createFinancialRecord({
  description,
  category,
  recordType,
  sum,
}) {
  try {
    const requestURL = `http://localhost:8000/api/createFinancialRecord`;
    const options = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        description,
        date: formatDate(new Date()),
        category_id: category,
        type: recordType,
        sum,
      }),
    };

    const resp = yield call(request, requestURL, options);
    if (!resp.message) {
      yield put(setCreateFinanceRecordErrorsAction(resp));
      return;
    }

    // TODO (Mihail): Rework so that indexes have some semantical meaning. e.g Wrap in named constants
    yield put(setTabPane(0));
    yield put(reset('financeCreate'));
    yield put(fetchCategoryStatsAction());
  } catch (err) {
    console.log(err);
  }
}

const urlPropsBuilder = (url, props) => {
  const searchParams = new URLSearchParams();

  Object.entries(props).forEach(
    ([key, value]) => value && searchParams.set(key, value),
  );
  return searchParams.toString() ? `${url}?${searchParams.toString()}` : url;
};

export function* fetchFinancialRecords({ filters }) {
  try {
    const requestURL = urlPropsBuilder(
      'http://localhost:8000/api/getFinancialRecords',
      filters,
    );
    const options = {
      credentials: 'include',
    };

    const resp = yield call(request, requestURL, options);

    if (resp.message === 'Authentication failed') {
      window.location.reload();
      return;
    }

    yield put(fetchFinancialRecordsSuccessAction(resp));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchCategoryStats() {
  try {
    const requestURL = `http://localhost:8000/api/financialRecordsStats`;
    const options = { credentials: 'include' };

    const resp = yield call(request, requestURL, options);
    if (resp.message === 'Authentication failed') {
      window.location.reload();
      return;
    }

    yield put(fetchCategoryStatsSuccessAction(resp.stats));
  } catch (err) {
    console.log(err);
  }
}

// Individual exports for testing
export default function* financialRecordsSaga() {
  yield takeLatest(CREATE_FINANCE_RECORD, createFinancialRecord);
  yield takeLatest(FETCH_FINANCIAL_RECORDS, fetchFinancialRecords);
  yield takeLatest(FETCH_CATEGORY_STATS, fetchCategoryStats);
}
