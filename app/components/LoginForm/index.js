import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { Form } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import CustomInput from 'components/CustomInput';
import CustomCheckbox from 'components/CustomCheckbox';
import ErrorList from 'components/ErrorList';
import messages from './messages';
import { validate } from './validate';

const LoginWrapper = styled.div`
  .field {
    align-self: center;
    text-align: right;
  }
`;

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  failedLogin: PropTypes.object,
};

const Login = ({ handleSubmit, valid, failedLogin }) => (
  <LoginWrapper>
    <ErrorList errorMessages={failedLogin} />
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Field
          id="email"
          name="email"
          position="bottom center"
          placeholder="Email"
          component={CustomInput}
        />
        <Field
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          position="bottom center"
          component={CustomInput}
        />
        <Field
          className="rememberMe"
          name="rememberMe"
          component={CustomCheckbox}
          label="Remember me"
        />
        <Form.Button disabled={!valid}>
          <FormattedMessage {...messages.signin} />
        </Form.Button>
      </Form.Group>
    </Form>
  </LoginWrapper>
);

Login.propTypes = propTypes;

const LoginForm = reduxForm({
  form: 'login',
  validate,
})(Login);

export default LoginForm;
