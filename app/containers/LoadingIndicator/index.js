/**
 *
 * LoadingIndicator
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Loader, Segment } from 'semantic-ui-react';

import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectScopes } from './selectors';
import reducer from './reducer';

const propTypes = {
  children: PropTypes.object.isRequired,
  scopes: PropTypes.object,
  scope: PropTypes.string.isRequired,
};

const LoadingIndicator = ({ children, scopes, scope }) => {
  useInjectReducer({ key: 'loadingIndicator', reducer });

  if (!scopes[scope]) {
    return children;
  }
  return (
    <Segment>
      <Loader size="huge" active inline="centered" />
    </Segment>
  );
};

LoadingIndicator.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  scopes: makeSelectScopes(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(LoadingIndicator);
