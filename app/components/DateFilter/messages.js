/*
 * DateFilter Messages
 *
 * This contains all the text for the DateFilter component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.DateFilter';

export default defineMessages({
  filterFrom: {
    id: `${scope}.filterFrom`,
    defaultMessage: 'From:',
  },
  filterTo: {
    id: `${scope}.filterTo`,
    defaultMessage: 'To:',
  },
  filter: {
    id: `${scope}.filter`,
    defaultMessage: 'Filter',
  },
});
