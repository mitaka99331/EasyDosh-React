/*
 * MainMenu Messages
 *
 * This contains all the text for the MainMenu component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MainMenu';

export default defineMessages({
  categories: {
    id: `${scope}.categories`,
    defaultMessage: 'Categories',
  },
  financialRecords: {
    id: `${scope}.financialRecords`,
    defaultMessage: 'Financial Records',
  },
  userProfile: {
    id: `${scope}.userProfile`,
    defaultMessage: 'User Profile',
  },
  personalInfo: {
    id: `${scope}.personalInfo`,
    defaultMessage: 'Personal Information',
  },
  security: {
    id: `${scope}.security`,
    defaultMessage: 'Security',
  },
  changePassword: {
    id: `${scope}.changePassword`,
    defaultMessage: 'Change Password',
  },
  deleteAccount: {
    id: `${scope}.deleteAccount`,
    defaultMessage: 'Delete Account',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
});
