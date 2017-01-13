import React from 'react';
import { PageHeader } from 'react-bootstrap';
import StatisticFilterComponent from 'containers/Stats/StatisticFilter';
import StatisticGraphComponent from 'containers/Stats/StatisticGraph';

/* eslint-disable react/prefer-stateless-function */
export default class StatsComponent extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Stats</PageHeader>

        <StatisticFilterComponent />
        <StatisticGraphComponent />
      </div>
    );
  }
}
