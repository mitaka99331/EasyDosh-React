import { defineMessages } from 'react-intl';

export const scope = 'app.components.ChangePassword';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Password change',
  },
  oldPassword: {
    id: `${scope}.oldPassword`,
    defaultMessage: 'Old password',
  },
  newPassword: {
    id: `${scope}.newPassword`,
    defaultMessage: 'New password',
  },
  confirmNewPassword: {
    id: `${scope}.confirmNewPassword`,
    defaultMessage: 'Confirm new password',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  },
  required: {
    id: `${scope}.required`,
    defaultMessage: 'Required',
  },
  passwordMatch: {
    id: `${scope}.passwordMatch`,
    defaultMessage: 'Passwords do not match',
  },
  shortPass: {
    id: `${scope}.shortPass`,
    defaultMessage: 'Password must be at least 10 symbols',
  },
  differentPassword: {
    id: `${scope}.differentPassword`,
    defaultMessage: 'New password should not be same as old password',
  },
});
