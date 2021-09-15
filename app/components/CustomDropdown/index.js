import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Popup } from 'semantic-ui-react';

const propTypes = {
  placeholder: PropTypes.string,
  meta: PropTypes.object,
  position: PropTypes.string,
  options: PropTypes.array,
  search: PropTypes.bool,
  selection: PropTypes.bool,
  onChangeHandler: PropTypes.func.isRequired,
};

const CustomDropdown = ({
  placeholder,
  meta: { touched, error },
  position = 'top left',
  options,
  search = true,
  selection = true,
  onChangeHandler,
}) => (
  <Popup
    trigger={
      <Dropdown
        focus="true"
        placeholder={placeholder}
        error={!!(touched && error)}
        options={options}
        search={search}
        selection={selection}
        onChange={onChangeHandler}
      />
    }
    content={error}
    size="mini"
    position={position}
    open={!!(touched && error)}
  />
);

CustomDropdown.propTypes = propTypes;

export default CustomDropdown;
