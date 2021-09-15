import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, Table } from 'semantic-ui-react';
import EditCategory from './editCategory';
import messages from '../messages';

const propTypes = {
  cellId: PropTypes.number,
  cellName: PropTypes.string,
  cellBudget: PropTypes.string,
  deleteRow: PropTypes.func,
  setCellToEdit: PropTypes.func,
  cellToEdit: PropTypes.number,
  editCategory: PropTypes.func,
};

const CategoryList = ({
  cellId,
  cellName,
  cellBudget,
  deleteRow,
  setCellToEdit,
  cellToEdit,
  editCategory,
}) => {
  if (cellToEdit === cellId) {
    return (
      <EditCategory
        setCellToEdit={() => setCellToEdit(undefined)}
        form={`category-form-${cellId}`}
        initialValues={{ editLabel: cellName, editBudget: cellBudget }}
        onSubmit={({ editLabel, editBudget }) => {
          editCategory(cellId, editLabel, editBudget);
          setCellToEdit(undefined);
        }}
      />
    );
  }

  return (
    <Table.Row>
      <Table.Cell>{cellName}</Table.Cell>
      <Table.Cell>{`${cellBudget} $`}</Table.Cell>
      <Table.Cell className="buttonGroupCss">
        <Button.Group widths="2">
          <Button size="large" primary onClick={() => setCellToEdit(cellId)}>
            <FormattedMessage {...messages.edit} />
          </Button>
          <Button size="large" negative onClick={() => deleteRow(cellId)}>
            <FormattedMessage {...messages.delete} />
          </Button>
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  );
};

CategoryList.propTypes = propTypes;

export default CategoryList;
