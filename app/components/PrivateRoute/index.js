import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { makeSelectUserId } from 'containers/App/selectors';

const propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
  userId: PropTypes.number,
};

const PrivateRoute = ({ userId, component: Component, location, ...rest }) =>
  !userId ? (
    <div>Loading...</div>
  ) : (
    <Route
      {...rest}
      render={props =>
        userId ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );

PrivateRoute.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  userId: makeSelectUserId(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(PrivateRoute);
