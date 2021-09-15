/*
 * FinancialRecords Messages
 *
 * This contains all the text for the FinancialRecords container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.FinancialRecords.CreateForm';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Description',
  },
  date: {
    id: `${scope}.date`,
    defaultMessage: 'Date',
  },
  category: {
    id: `${scope}.category`,
    defaultMessage: 'Category',
  },
  type: {
    id: `${scope}.type`,
    defaultMessage: 'Type',
  },
  amount: {
    id: `${scope}.amount`,
    defaultMessage: 'Amount',
  },
  create: {
    id: `${scope}.create`,
    defaultMessage: 'Create',
  },
  required: {
    id: `${scope}.required`,
    defaultMessage: 'Required',
  },
  number: {
    id: `${scope}.number`,
    defaultMessage: 'Must be a valid number',
  },
});
