import { defineMessages } from 'react-intl';

export const scope = 'app.containers.UserProfilePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Profile',
  },
  personalInformation: {
    id: `${scope}.personalInformation`,
    defaultMessage: 'Personal information',
  },
  security: {
    id: `${scope}.security`,
    defaultMessage: 'Security',
  },
  changePassword: {
    id: `${scope}.changePassword`,
    defaultMessage: 'Change password',
  },
  deleteAccount: {
    id: `${scope}.deleteAccount`,
    defaultMessage: 'Delete account',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
});
