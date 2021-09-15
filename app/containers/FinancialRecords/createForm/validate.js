import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const validate = ({ category, recordType, sum }) => {
  const errors = {};

  if (!category) {
    errors.category = <FormattedMessage {...messages.required} />;
  }

  if (!recordType) {
    errors.recordType = <FormattedMessage {...messages.required} />;
  }

  if (!sum) {
    errors.sum = <FormattedMessage {...messages.required} />;
  }

  const parsed = parseInt(sum, 10);

  if (Number.isNaN(parsed)) {
    errors.sum = <FormattedMessage {...messages.number} />;
  }

  return errors;
};
