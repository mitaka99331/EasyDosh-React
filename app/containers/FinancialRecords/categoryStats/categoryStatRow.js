import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Progress, Table } from 'semantic-ui-react';
import { toFixed } from 'utils/helpers';

const ProgressWrapper = styled.div`
  .ui.progress .bar > .progress {
    right: 25%;
    bottom: 50%;
    left: 25%;
    top: 50%;
    color: black;
    text-align: center;
  }

  .ui.progress .bar {
    position: initial;
  }

  .ui.progress:last-child {
    margin: 0;
  }
`;

const propTypes = {
  statistic: PropTypes.object.isRequired,
  num: PropTypes.number.isRequired,
};

const getColor = (spent, budget) => {
  const perc = (spent / budget) * 100;
  const colorMap = { success: true, warning: false, error: false };

  if (perc > 50) {
    colorMap.warning = true;
    colorMap.error = false;
    colorMap.success = false;
  }

  if (perc > 80) {
    colorMap.error = true;
    colorMap.warning = false;
    colorMap.success = false;
  }

  return colorMap;
};

const CategoryStatisticRow = ({ statistic, num }) => {
  const colorMap = getColor(statistic.spent, statistic.budget);

  return (
    <Table.Row>
      <Table.Cell>{num}</Table.Cell>
      <Table.Cell>{statistic.label}</Table.Cell>
      <Table.Cell>
        <ProgressWrapper>
          <Progress
            success={colorMap.success}
            warning={colorMap.warning}
            error={colorMap.error}
            value={toFixed(statistic.spent)}
            total={toFixed(statistic.budget)}
            progress="ratio"
          />
        </ProgressWrapper>
      </Table.Cell>
    </Table.Row>
  );
};

CategoryStatisticRow.propTypes = propTypes;

export default CategoryStatisticRow;
