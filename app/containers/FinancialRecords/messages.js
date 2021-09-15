/*
 * FinancialRecords Messages
 *
 * This contains all the text for the FinancialRecords container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.FinancialRecords';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the FinancialRecords container!',
  },
  addRecord: {
    id: `${scope}.addRecord`,
    defaultMessage: 'Add Record',
  },
  categoriesStats: {
    id: `${scope}.categoriesStats`,
    defaultMessage: 'Categories Stats',
  },
  recordsList: {
    id: `${scope}.recordsList`,
    defaultMessage: 'List of Records',
  },
  noCategories: {
    id: `${scope}.noCategories`,
    defaultMessage: 'There are no categories',
  },
  createModalHeader: {
    id: `${scope}.createModalHeader`,
    defaultMessage: 'Log a new record',
  },
  createCancel: {
    id: `${scope}.createCancel`,
    defaultMessage: 'Cancel',
  },
});
