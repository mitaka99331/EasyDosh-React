/**
 *
 * FinancialRecords
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Segment, Grid, Placeholder, Tab } from 'semantic-ui-react';
import { getCategoriesAction } from 'shared/categories/actions';
import {
  makeSelectCategories,
  makeSelectNoCategories,
} from 'shared/categories/selectors';
import DateFilter from 'components/DateFilter';
import LoadingIndicator from '../LoadingIndicator';

import {
  makeSelectActiveIndex,
  makeSelectCategoryStats,
  makeSelectFinancialRecordsData,
  makeSelectFilters,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  createFinanceRecordAction,
  fetchCategoryStatsAction,
  fetchFinancialRecordsAction,
  setCreateFinanceRecordErrorsAction,
  setTabPane,
  setDateFilterAction,
} from './actions';
import messages from './messages';
import { CATEGORIES } from '../LoadingIndicator/constants';
import CreateFinanceRecordForm from './createForm/create-form';
import CategoryStats from './categoryStats';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  getCategories: PropTypes.func,
  categories: PropTypes.array,
  financialRecords: PropTypes.array,
  categoryStats: PropTypes.array,
  noCategories: PropTypes.bool,
  createRecord: PropTypes.func,
  setActiveTab: PropTypes.func,
  activeIndex: PropTypes.number,
  clearCreateErrors: PropTypes.func,
  fetchFinancialRecords: PropTypes.func,
  fetchCategoryStats: PropTypes.func,
  setDateFilter: PropTypes.func,
  financialRecordsFilters: PropTypes.object,
};

const createPanes = (
  categories,
  createRecord,
  categoryStats,
  setDateFilter,
) => [
  {
    menuItem: 'View Info',
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row style={{ padding: '14px 14px 0px 14px' }}>
            <DateFilter setDateFilter={setDateFilter} />
          </Grid.Row>
          {categoryStats.length > 0 && (
            <Grid.Row>
              <Grid.Column>
                <CategoryStats stats={categoryStats} />
              </Grid.Column>
            </Grid.Row>
          )}
          <Grid.Row>
            <Grid.Column>
              <Placeholder>
                <FormattedMessage {...messages.recordsList} />
                <Placeholder.Image />
              </Placeholder>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Create',
    render: () => (
      <Tab.Pane>
        <CreateFinanceRecordForm
          categories={categories}
          onSubmit={values => createRecord(values)}
        />
      </Tab.Pane>
    ),
  },
];

export const FinancialRecords = ({
  getCategories,
  categories,
  noCategories,
  activeIndex,
  // To be used later
  // financialRecords,
  categoryStats,
  createRecord = () => null,
  setActiveTab = () => null,
  clearCreateErrors = () => null,
  fetchFinancialRecords = () => null,
  fetchCategoryStats = () => null,
  setDateFilter = () => null,
  financialRecordsFilters,
}) => {
  useInjectReducer({ key: 'financialRecords', reducer });
  useInjectSaga({ key: 'financialRecords', saga });

  useEffect(() => {
    getCategories();
    fetchFinancialRecords(financialRecordsFilters);
    fetchCategoryStats();
  }, [financialRecordsFilters]);

  if (noCategories) {
    return (
      <div>
        <FormattedMessage {...messages.noCategories} />
      </div>
    );
  }

  return (
    <LoadingIndicator scope={CATEGORIES}>
      <div>
        <Helmet>
          <title>FinancialRecords</title>
          <meta name="description" content="Description of FinancialRecords" />
        </Helmet>
        <Segment>
          <Tab
            panes={createPanes(
              categories,
              createRecord,
              categoryStats,
              setDateFilter,
            )}
            activeIndex={activeIndex}
            onTabChange={(_e, { activeIndex: tabIndex }) => {
              if (tabIndex === 1) {
                clearCreateErrors();
              }
              setActiveTab(tabIndex);
            }}
          />
        </Segment>
      </div>
    </LoadingIndicator>
  );
};

FinancialRecords.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
  noCategories: makeSelectNoCategories(),
  activeIndex: makeSelectActiveIndex(),
  financialRecords: makeSelectFinancialRecordsData(),
  categoryStats: makeSelectCategoryStats(),
  financialRecordsFilters: makeSelectFilters(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getCategories: () => dispatch(getCategoriesAction()),
    createRecord: values => dispatch(createFinanceRecordAction(values)),
    setActiveTab: index => dispatch(setTabPane(index)),
    clearCreateErrors: () => dispatch(setCreateFinanceRecordErrorsAction({})),
    fetchFinancialRecords: filters =>
      dispatch(fetchFinancialRecordsAction(filters)),
    fetchCategoryStats: () => dispatch(fetchCategoryStatsAction()),
    setDateFilter: date => dispatch(setDateFilterAction(date)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FinancialRecords);
