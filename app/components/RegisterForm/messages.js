import { defineMessages } from 'react-intl';

export const scope = 'app.components.RegisterForm';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Sign up new account',
  },
  username: {
    id: `${scope}.username`,
    defaultMessage: 'Username',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  confirmPassword: {
    id: `${scope}.confirmPassword`,
    defaultMessage: 'Confirm Password',
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: 'Sign Up',
  },
});
