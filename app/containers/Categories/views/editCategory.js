import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, Table } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import CustomInput from 'components/CustomInput';
import { validate } from '../validate';
import messages from '../messages';

const propTypes = {
  valid: PropTypes.bool,
  setCellToEdit: PropTypes.func,
  handleSubmit: PropTypes.func,
  dirty: PropTypes.bool,
};

const EditCategory = ({ valid, setCellToEdit, handleSubmit, dirty }) => (
  <Table.Row>
    <Table.Cell className="tableInputCss">
      <Field name="editLabel" type="text" transparent component={CustomInput} />
    </Table.Cell>
    <Table.Cell className="tableInputCss">
      <Field
        name="editBudget"
        type="number"
        transparent
        component={CustomInput}
      />
    </Table.Cell>
    <Table.Cell className="buttonGroupCss">
      <Button.Group widths="2">
        <Button size="large" onClick={() => setCellToEdit()}>
          <FormattedMessage {...messages.cancel} />
        </Button>
        <Button
          size="large"
          positive
          disabled={!dirty || !valid}
          type="submit"
          onClick={() => handleSubmit()}
        >
          <FormattedMessage {...messages.save} />
        </Button>
      </Button.Group>
    </Table.Cell>
  </Table.Row>
);

EditCategory.propTypes = propTypes;

export default reduxForm({
  validate,
})(EditCategory);
