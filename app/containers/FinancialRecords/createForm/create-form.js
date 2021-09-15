import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field, change } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import CustomInput from 'components/CustomInput';
import ErrorList from 'components/ErrorList';
import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomDropdown from 'components/CustomDropdown';
import messages from './messages';
import { validate } from './validate';
import { makeSelectCreateFinancialRecordErrors } from '../selectors';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  dispatch: PropTypes.func,
  categories: PropTypes.array.isRequired,
  intl: PropTypes.object,
  valid: PropTypes.bool,
  createFinancialRecordErrors: PropTypes.object,
};

const createCategoryOptions = categories =>
  categories.map(({ label, categoryId }) => ({
    key: categoryId,
    text: label,
    value: categoryId,
  }));

const typeSelectionOptions = [
  {
    key: '1',
    text: 'Expense',
    value: 'expense',
  },
  {
    key: '2',
    text: 'Income',
    value: 'income',
  },
];

const CreateFinanceRecordFormPure = ({
  handleSubmit,
  dispatch,
  categories,
  valid,
  intl: { formatMessage },
  createFinancialRecordErrors,
}) => {
  const handleSelectChange = (field, value) => {
    dispatch(change('financeCreate', field, value));
  };

  return (
    <Fragment>
      <ErrorList errorMessages={createFinancialRecordErrors} />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="description">
            <FormattedMessage {...messages.description} />
          </label>
          <Field
            name="description"
            type="text"
            placeholder={formatMessage(messages.description)}
            position="left center"
            component={CustomInput}
          />
        </Form.Field>
        {/* TODO (Mihail): This will be used when we introduce a proper calendar  picker */}
        {/* Will be used later */}
        {/* <Form.Field> */}
        {/*  <label htmlFor="date"> */}
        {/*    <FormattedMessage {...messages.date} /> */}
        {/*  </label> */}
        {/*  <Field */}
        {/*    id="date" */}
        {/*    name="date" */}
        {/*    placeholder={formatMessage(messages.date)} */}
        {/*    position="left center" */}
        {/*    component={CustomInput} */}
        {/*  /> */}
        {/* </Form.Field> */}

        <Form.Field>
          <label htmlFor="category">
            <FormattedMessage {...messages.category} />
          </label>
          <Field
            name="category"
            type="text"
            placeholder={formatMessage(messages.category)}
            position="left center"
            search
            selection
            component={CustomDropdown}
            options={createCategoryOptions(categories)}
            onChangeHandler={(_e, { value }) =>
              handleSelectChange('category', value)
            }
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="recordType">
            <FormattedMessage {...messages.type} />
          </label>
          <Field
            name="recordType"
            type="text"
            placeholder={formatMessage(messages.type)}
            position="left center"
            search
            selection
            component={CustomDropdown}
            options={typeSelectionOptions}
            onChangeHandler={(_e, { value }) =>
              handleSelectChange('recordType', value)
            }
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="sum">
            <FormattedMessage {...messages.amount} />
          </label>
          <Field
            id="sum"
            name="sum"
            type="number"
            position="left center"
            placeholder={formatMessage(messages.amount)}
            component={CustomInput}
          />
        </Form.Field>
        <Button type="submit" disabled={!valid}>
          <FormattedMessage {...messages.create} />
        </Button>
      </Form>
    </Fragment>
  );
};

CreateFinanceRecordFormPure.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  createFinancialRecordErrors: makeSelectCreateFinancialRecordErrors(),
});

const withConnect = connect(mapStateToProps);

const CreateFinanceRecordForm = compose(
  reduxForm({
    form: 'financeCreate',
    validate,
  }),
  injectIntl,
  withConnect,
  memo,
)(CreateFinanceRecordFormPure);

export default CreateFinanceRecordForm;
