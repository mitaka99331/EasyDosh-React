import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga, { useInjectSaga } from 'utils/injectSaga';
import injectReducer, { useInjectReducer } from 'utils/injectReducer';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Authentication from 'containers/Authentication/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Footer from 'components/Footer';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { makeSeletLoginMessage } from 'containers/Authentication/selectors';
import Header from 'components/Header';
import { ROOT } from 'constants/index';
import logoutSaga from 'shared/logout/saga';
import categoriesSaga from 'shared/categories/saga';
import categoriesReducer from 'shared/categories/reducer';
import GlobalStyle from '../../global-styles';
import { getUserInfo } from './actions';
import saga from './saga';
import reducer from './reducer';
import { makeSelectUserId } from './selectors';

const AppWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 0px;
  flex-direction: column;
`;

const propTypes = {
  userId: PropTypes.number,
  getUser: PropTypes.func,
};

const App = ({ userId, getUser }) => {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'global', saga });

  useEffect(() => {
    if (!userId) {
      getUser();
    }
  });

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - EasyDosh Web"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="Money Management Application" />
      </Helmet>
      <Header />
      <Switch>
        <PublicRoute exact path="/" component={Authentication} />
        <PrivateRoute path={ROOT} component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
};

App.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  userId: makeSelectUserId(),
  loginSuccess: makeSeletLoginMessage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getUser: () => dispatch(getUserInfo()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withLogoutSaga = injectSaga({ key: 'logout', saga: logoutSaga });

const withCategoriesSaga = injectSaga({
  key: 'sharedCategories',
  saga: categoriesSaga,
});
const withCategoriesReducer = injectReducer({
  key: 'sharedCategories',
  reducer: categoriesReducer,
});

// Order is important, inject reducer first, then the saga.
export default compose(
  withConnect,
  withLogoutSaga,
  withCategoriesReducer,
  withCategoriesSaga,
  memo,
)(App);
