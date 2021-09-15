import { defineMessages } from 'react-intl';

export const scope = 'app.components.Categories';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Categories',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  budget: {
    id: `${scope}.budget`,
    defaultMessage: 'Budget',
  },
  add: {
    id: `${scope}.add`,
    defaultMessage: 'Add',
  },
  edit: {
    id: `${scope}.edit`,
    defaultMessage: 'Edit',
  },
  delete: {
    id: `${scope}.delete`,
    defaultMessage: 'Delete',
  },
  required: {
    id: `${scope}.required`,
    defaultMessage: 'Required!',
  },
  length: {
    id: `${scope}.length`,
    defaultMessage: 'Max length reached!',
  },
  minBudget: {
    id: `${scope}.minBudget`,
    defaultMessage: 'Budget must be positive!',
  },
  maxBudget: {
    id: `${scope}.maxBudget`,
    defaultMessage: "That's just too much!",
  },
});
