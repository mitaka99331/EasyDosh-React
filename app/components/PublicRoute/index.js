import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { makeSelectUserId } from 'containers/App/selectors';
import { ROOT } from '../../constants';

const propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
  userId: PropTypes.number,
};

const PublicRoute = ({ userId, component: Component, location, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !userId ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: ROOT,
            state: { from: location },
          }}
        />
      )
    }
  />
);

PublicRoute.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  userId: makeSelectUserId(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(PublicRoute);
