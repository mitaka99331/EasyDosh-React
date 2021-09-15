import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  Container,
  Grid,
  GridRow,
  GridColumn,
  Segment,
} from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import LoginForm from 'components/LoginForm/Loadable';
import RegisterForm from 'components/RegisterForm/Loadable';

import makeSelectAuthentication, {
  makeSelectRegisterErrors,
  makeSelectLoginErrors,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { login, register } from './actions';

const AuthenticationWrapper = styled.div`
  .authenticationContainer {
    min-height: 600px;
  }

  .loginArea {
    padding: 1rem 6rem;
  }

  .accountsArea {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .registerArea {
    padding: 2rem;
    width: 100%;
    height: 100%;
  }
`;

const propTypes = {
  onLoginReduxSubmit: PropTypes.func,
  onRegisterReduxSubmit: PropTypes.func,
  failedRegister: PropTypes.object,
  failedLogin: PropTypes.object,
};

const Authentication = ({
  onLoginReduxSubmit,
  onRegisterReduxSubmit,
  failedRegister,
  failedLogin,
}) => {
  useInjectReducer({ key: 'authentication', reducer });
  useInjectSaga({ key: 'authentication', saga });

  const handleLoginSubmit = values => onLoginReduxSubmit(values);
  const handleRegisterSubmit = values => onRegisterReduxSubmit(values);

  return (
    <AuthenticationWrapper>
      <Container fluid>
        <Helmet>
          <title>Authentication</title>
          <meta name="description" content="Description of Authentication" />
        </Helmet>
        <Grid>
          <GridRow>
            <GridColumn>
              <Segment className="loginArea">
                <LoginForm
                  onSubmit={handleLoginSubmit}
                  failedLogin={failedLogin}
                />
              </Segment>
            </GridColumn>
          </GridRow>
          <GridRow className="authenticationContainer">
            <GridColumn width="10">
              <Segment className="accountsArea">Logged In Accounts</Segment>
            </GridColumn>
            <GridColumn width="6">
              <Segment className="registerArea">
                <RegisterForm
                  onSubmit={handleRegisterSubmit}
                  failedRegister={failedRegister}
                />
              </Segment>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </AuthenticationWrapper>
  );
};

Authentication.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  authentication: makeSelectAuthentication(),
  failedLogin: makeSelectLoginErrors(),
  failedRegister: makeSelectRegisterErrors(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoginReduxSubmit: values => dispatch(login(values)),
    onRegisterReduxSubmit: values => dispatch(register(values)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Authentication);
