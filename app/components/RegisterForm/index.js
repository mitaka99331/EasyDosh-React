import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Form } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import CustomInput from 'components/CustomInput';
import ErrorList from 'components/ErrorList';
import messages from './messages';
import { validate } from './validate';
import './styles.css';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  failedRegister: PropTypes.object,
  valid: PropTypes.bool,
};

const Register = ({ handleSubmit, failedRegister, valid }) => (
  <Fragment>
    <h3>
      <FormattedMessage {...messages.header} />
    </h3>
    <ErrorList errorMessages={failedRegister} />
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label htmlFor="name">Username</label>
        <Field
          name="name"
          type="text"
          placeholder="Username"
          position="left center"
          component={CustomInput}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="Email"
          position="left center"
          component={CustomInput}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="password">Password</label>
        <Field
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          position="left center"
          component={CustomInput}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          position="left center"
          placeholder="Confirm Password"
          component={CustomInput}
        />
      </Form.Field>
      <Form.Button disabled={!valid}>
        <FormattedMessage {...messages.signup} />
      </Form.Button>
    </Form>
  </Fragment>
);

Register.propTypes = propTypes;

const RegisterForm = reduxForm({
  form: 'register',
  validate,
})(Register);

export default RegisterForm;
