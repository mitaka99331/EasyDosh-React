import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Button, Grid } from 'semantic-ui-react';
import messages from './messages';

const DateFilterContainer = styled.div`
  span {
    white-space: nowrap;
  }

  .field {
    width: 100%;
    min-width: 40px;
  }
  .input {
    width: 100%;
    min-width: 40px;
  }

  .column {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .toText {
    padding-left: 27px !important;
  }
`;

const propTypes = { setDateFilter: PropTypes.func.isRequired };

const DateFilter = ({ setDateFilter }) => {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  return (
    <DateFilterContainer>
      <Grid verticalAlign="middle" stackable>
        <Grid.Column stretched width={6}>
          <Grid verticalAlign="middle">
            <Grid.Column width={3}>
              <FormattedMessage {...messages.filterFrom} />
            </Grid.Column>

            <Grid.Column width={12}>
              <SemanticDatepicker
                maxDate={toDate}
                onChange={(e, { value }) => setFromDate(value)}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>

        <Grid.Column stretched width={6}>
          <Grid verticalAlign="middle">
            <Grid.Column width={3} className="toText">
              <FormattedMessage {...messages.filterTo} />
            </Grid.Column>

            <Grid.Column width={12}>
              <SemanticDatepicker
                minDate={fromDate}
                onChange={(e, { value }) => setToDate(value)}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>

        <Grid.Column>
          <Button onClick={() => setDateFilter({ fromDate, toDate })}>
            <FormattedMessage {...messages.filter} />
          </Button>
        </Grid.Column>
      </Grid>
    </DateFilterContainer>
  );
};

DateFilter.propTypes = propTypes;

export default DateFilter;
