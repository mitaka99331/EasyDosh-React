/**
 *
 * CustomCheckbox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
};

const CustomCheckbox = ({ input: { value, ...rest }, label }) => (
  <Form.Checkbox {...rest} label={label} />
);

CustomCheckbox.propTypes = propTypes;

export default CustomCheckbox;
