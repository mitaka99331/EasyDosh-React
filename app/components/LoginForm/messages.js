import { defineMessages } from 'react-intl';

export const scope = 'app.components.LoginForm';

export default defineMessages({
  signin: {
    id: `${scope}.signin`,
    defaultMessage: 'Sign In',
  },
  remember: {
    id: `${scope}.remember`,
    defaultMessage: 'Remember me',
  },
});
