import React from 'react';
import { StatisticFilterComponent } from 'containers/Stats/StatisticFilter'
import { StatisticGraphComponent } from 'containers/Stats/StatisticGraph'

export class StatsComponent extends React.Component {

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
