import { defineMessages } from 'react-intl';

export const scope = 'app.components.AccountSecurity';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Account security',
  },
  twoFactorAuthenticationHeader: {
    id: `${scope}.twoFactorAuthentication.header`,
    defaultMessage: 'Two-Factor Authentication',
  },
  twoFactorAuthenticationMessage: {
    id: `${scope}.twoFactorAuthentication.message`,
    defaultMessage: `..... Increase your account's security by enabling Two-Factor
    Authentication .....`,
  },
});
