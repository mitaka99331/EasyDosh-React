import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const validate = ({ label, budget, editLabel, editBudget }) => {
  const errors = {};
  const maxBudget = 999999999.99999;
  const minBudget = 0;
  const maxLabelLength = 60;

  if (!label) {
    errors.label = <FormattedMessage {...messages.required} />;
  } else if (maxLabelLength < label.length) {
    errors.label = <FormattedMessage {...messages.length} />;
  }

  if (!budget) {
    errors.budget = <FormattedMessage {...messages.required} />;
  } else if (maxBudget < budget) {
    errors.budget = <FormattedMessage {...messages.maxBudget} />;
  } else if (minBudget > budget) {
    errors.budget = <FormattedMessage {...messages.minBudget} />;
  }

  if (!editLabel) {
    errors.editLabel = <FormattedMessage {...messages.required} />;
  } else if (maxLabelLength < editLabel.length) {
    errors.editLabel = <FormattedMessage {...messages.length} />;
  }

  if (!editBudget) {
    errors.editBudget = <FormattedMessage {...messages.required} />;
  } else if (maxBudget < editBudget) {
    errors.editBudget = <FormattedMessage {...messages.maxBudget} />;
  } else if (minBudget > editBudget) {
    errors.editBudget = <FormattedMessage {...messages.minBudget} />;
  }

  return errors;
};
