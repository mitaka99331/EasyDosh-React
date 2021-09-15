/**
 *
 * ErrorList takes input from backend in form of object { title: array of errors }
 * and tries to render them for the entire form.
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';

const ErrorListContainer = styled.div`
  margin-bottom: 20px;
`;

const propTypes = {
  errorMessages: PropTypes.object.isRequired,
};

const ErrorList = ({ errorMessages }) => (
  <ErrorListContainer>
    {Object.keys(errorMessages).map(errorKey => (
      <ErrorMessage
        key={errorKey}
        errors={errorMessages[errorKey]}
        title={errorKey}
      />
    ))}
  </ErrorListContainer>
);

ErrorList.propTypes = propTypes;

export default memo(ErrorList);
