import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'EasyDosh',
  },
  user: {
    id: `${scope}.user`,
    defaultMessage: 'User',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
});
