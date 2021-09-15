import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import CategoryStatisticRow from './categoryStatRow';

const propTypes = {
  stats: PropTypes.array.isRequired,
};

const CategoryStats = ({ stats }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Spent</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {stats.map((stat, idx) => (
        <CategoryStatisticRow statistic={stat} key={stat.label} num={idx + 1} />
      ))}
    </Table.Body>
  </Table>
);

CategoryStats.propTypes = propTypes;

export default CategoryStats;
