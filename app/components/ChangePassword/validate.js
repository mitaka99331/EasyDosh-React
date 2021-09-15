import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const validate = ({ oldPassword, newPassword, confirmNewPassword }) => {
  const errors = {};

  if (!oldPassword) {
    errors.oldPassword = <FormattedMessage {...messages.required} />;
  }

  if (!newPassword) {
    errors.newPassword = <FormattedMessage {...messages.required} />;
  }

  if (oldPassword && oldPassword === newPassword) {
    errors.newPassword = <FormattedMessage {...messages.differentPassword} />;
  }

  if (newPassword && newPassword.length < 10) {
    errors.newPassword = <FormattedMessage {...messages.shortPass} />;
  }

  if (!confirmNewPassword) {
    errors.confirmNewPassword = <FormattedMessage {...messages.required} />;
  }

  if (newPassword !== confirmNewPassword) {
    errors.confirmNewPassword = (
      <FormattedMessage {...messages.passwordMatch} />
    );
  }

  return errors;
};
