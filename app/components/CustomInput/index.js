import React from 'react';
import PropTypes from 'prop-types';
import { Form, Popup } from 'semantic-ui-react';

const propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  position: PropTypes.string,
  transparent: PropTypes.bool,
};

const CustomInput = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
  position = 'top left',
  transparent = false,
}) => (
  <Popup
    trigger={
      <Form.Input
        {...input}
        fluid
        transparent={transparent}
        type={type}
        focus
        placeholder={placeholder}
        error={!!(touched && error)}
      />
    }
    content={error}
    size="mini"
    position={position}
    open={!!(touched && error)}
  />
);

CustomInput.propTypes = propTypes;

export default CustomInput;
