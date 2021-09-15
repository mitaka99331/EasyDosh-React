import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { useInjectSaga } from 'utils/injectSaga';
import { Container, Segment, Button, Table } from 'semantic-ui-react';
import { toFixed } from 'utils/helpers';
import { makeSelectCategories } from 'shared/categories/selectors';
import { getCategoriesAction } from 'shared/categories/actions';
import saga from './saga';
import messages from './messages';

import {
  deleteCategoryAction,
  createCategoryAction,
  editCategoryAction,
} from './actions';
import CategoryList from './views/categoryList';
import NewCategory from './views/newCategory';
import LoadingIndicator from '../LoadingIndicator';
import { CATEGORIES } from '../LoadingIndicator/constants';

const CategoriesContainer = styled.div`
  .buttonGroupCss {
    padding: 0px !important;
  }
  .tableInputCss {
    padding: 0px !important;
  }
  .tableInputCss input {
    margin-left: 10px !important;
    font-size: 15px;
    color: gray !important;
  }
`;

const propTypes = {
  categories: PropTypes.array,
  deleteCategory: PropTypes.func,
  createCategory: PropTypes.func,
  editCategory: PropTypes.func,
  getCategories: PropTypes.func,
};

const Categories = ({
  categories,
  deleteCategory,
  createCategory,
  editCategory,
  getCategories,
}) => {
  useInjectSaga({ key: 'categories', saga });

  const [newCategory, setNewCategory] = useState(false);
  const [cellToEdit, setCellToEdit] = useState(undefined);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContainer>
      <Segment>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Container fluid>
          <LoadingIndicator scope={CATEGORIES}>
            <Table fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    <FormattedMessage {...messages.name} />
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    <FormattedMessage {...messages.budget} />
                  </Table.HeaderCell>
                  <Table.HeaderCell> </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {categories.map(({ id, label, budget }) => (
                  <CategoryList
                    key={id}
                    cellId={id}
                    cellName={label}
                    cellBudget={toFixed(parseFloat(budget), 2)}
                    deleteRow={deleteCategory}
                    cellToEdit={cellToEdit}
                    setCellToEdit={setCellToEdit}
                    editCategory={editCategory}
                  />
                ))}
              </Table.Body>
            </Table>
          </LoadingIndicator>

          {newCategory && (
            <NewCategory
              onSubmit={({ label, budget }) => createCategory(label, budget)}
              setNewCategory={setNewCategory}
            />
          )}
          <Button
            fluid
            size="large"
            positive
            onClick={() => setNewCategory(true)}
          >
            <FormattedMessage {...messages.add} />
          </Button>
        </Container>
      </Segment>
    </CategoriesContainer>
  );
};

Categories.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getCategories: () => dispatch(getCategoriesAction()),
    deleteCategory: id => dispatch(deleteCategoryAction(id)),
    createCategory: (label, budget) =>
      dispatch(createCategoryAction(label, budget)),
    editCategory: (id, label, budget) =>
      dispatch(editCategoryAction(id, label, budget)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Categories);
