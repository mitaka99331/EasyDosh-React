/**
 *
 * ErrorMessage displays an array of error messages.
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Message } from 'semantic-ui-react';

const ErrorTitle = styled.span`
  text-transform: capitalize;
`;

const propTypes = {
  title: PropTypes.string.isRequired,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};

const messageBody = errors => {
  if (Array.isArray(errors)) {
    return errors.map(item => <p key={item}>{item}</p>);
  }
  return <p>{errors}</p>;
};

const ErrorMessage = ({ title, errors }) => (
  <Message negative size="mini">
    <Message.Header>
      <ErrorTitle>{title}</ErrorTitle>
    </Message.Header>
    {messageBody(errors)}
  </Message>
);

ErrorMessage.propTypes = propTypes;

export default memo(ErrorMessage);
