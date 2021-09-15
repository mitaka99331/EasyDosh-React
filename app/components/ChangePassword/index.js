import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Container, Grid, Segment, Button } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import styled from 'styled-components';
import { FormattedMessage, injectIntl } from 'react-intl';
import CustomInput from 'components/CustomInput';
import ErrorList from 'components/ErrorList';
import { changePasswordFailedAction } from 'containers/UserProfilePage/actions';
import { makeSelectChangePasswordError } from 'containers/UserProfilePage/selectors';
import messages from './messages';
import { validate } from './validate';

const ChangePasswordContainer = styled.div`
  hr {
    margin-bottom: 10px !important;
  }
  .errorList {
    margin-bottom: -20px;
  }
`;

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  changePasswordError: PropTypes.object,
  valid: PropTypes.bool,
  intl: PropTypes.object,
  clearChangePasswordErrors: PropTypes.func,
};

const ChangePassword = ({
  handleSubmit,
  valid,
  changePasswordError,
  clearChangePasswordErrors = () => null,
  intl: { formatMessage },
}) => {
  useEffect(() => () => clearChangePasswordErrors(), [
    clearChangePasswordErrors,
  ]);

  return (
    <ChangePasswordContainer>
      <Form onSubmit={handleSubmit}>
        <Segment>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          <hr />
          <Container fluid>
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={8}>
                  {changePasswordError && (
                    <div className="errorList">
                      <ErrorList errorMessages={changePasswordError} />
                    </div>
                  )}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={8}>
                  <label htmlFor="oldPassword">
                    <FormattedMessage {...messages.oldPassword} />
                  </label>
                  <Field
                    id="oldPassword"
                    name="oldPassword"
                    type="password"
                    size="huge"
                    iconPosition="left"
                    icon="lock open"
                    placeholder={formatMessage(messages.oldPassword)}
                    position="left center"
                    component={CustomInput}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={8}>
                  <label htmlFor="newPassword">
                    <FormattedMessage {...messages.newPassword} />
                  </label>
                  <Field
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    size="huge"
                    iconPosition="left"
                    icon="lock"
                    placeholder={formatMessage(messages.newPassword)}
                    position="left center"
                    component={CustomInput}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={8}>
                  <label htmlFor="confirmNewPassword">
                    <FormattedMessage {...messages.confirmNewPassword} />
                  </label>
                  <Field
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    type="password"
                    size="huge"
                    iconPosition="left"
                    icon="lock"
                    placeholder={formatMessage(messages.confirmNewPassword)}
                    position="left center"
                    component={CustomInput}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column stretched>
                  <Button size="big" positive disabled={!valid}>
                    <FormattedMessage {...messages.save} />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Form>
    </ChangePasswordContainer>
  );
};

ChangePassword.propTypes = propTypes;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    clearChangePasswordErrors: () => dispatch(changePasswordFailedAction({})),
  };
}

const mapStateToProps = createStructuredSelector({
  changePasswordError: makeSelectChangePasswordError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  reduxForm({
    form: 'changePassword',
    validate,
  }),
  withConnect,
  injectIntl,
  memo,
)(ChangePassword);
