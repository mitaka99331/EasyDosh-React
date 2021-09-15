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
  setNewCategory: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const NewCategory = ({ handleSubmit, setNewCategory, valid }) => (
  <Table fixed singleLine>
    <Table.Body>
      <Table.Row>
        <Table.Cell className="tableInputCss">
          <Field
            name="label"
            placeholder="Name"
            type="text"
            transparent
            component={CustomInput}
          />
        </Table.Cell>
        <Table.Cell className="tableInputCss">
          <Field
            name="budget"
            placeholder="Budget"
            type="number"
            transparent
            component={CustomInput}
          />
        </Table.Cell>
        <Table.Cell className="buttonGroupCss">
          <Button.Group widths="2">
            <Button size="large" onClick={() => setNewCategory(false)}>
              <FormattedMessage {...messages.cancel} />
            </Button>
            <Button
              size="large"
              positive
              disabled={!valid}
              type="submit"
              onClick={() => {
                handleSubmit();
                setNewCategory(false);
              }}
            >
              <FormattedMessage {...messages.save} />
            </Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

NewCategory.propTypes = propTypes;

export default reduxForm({
  form: 'newCategoryForm',
  validate,
})(NewCategory);
