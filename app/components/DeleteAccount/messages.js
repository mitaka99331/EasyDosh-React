import { defineMessages } from 'react-intl';

export const scope = 'app.components.DeleteAccount';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Delete account',
  },
  message: {
    id: `${scope}.message`,
    defaultMessage: `..... Deleting an account has the following effects: Certain
    user content will be moved to a system-wide "Ghost User" in
    order to maintain content for posterity. For further
    information, please refer to the user account deletion
    documentation. .....`,
  },
});
