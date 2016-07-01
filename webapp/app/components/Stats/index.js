
//
// Stats
//

import React from 'react';
import { PageHeader, Nav, NavItem } from 'react-bootstrap';

export class StatsComponent extends React.Component {

  componentDidMount() {
      this.props.getStatsFromServer();
    }

  render() {

    var PieChart = require("react-chartjs").Pie;


    var pieOptions = {
              animatable: true,
        };
    var pieData = this.props.state.stats;

    var allGraph = this.props.state.stats;

    for (var i = 0; i < allGraph.size; i++)
    {

    }

    return (
      <div>
        <PageHeader>Stats</PageHeader>
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem>General</NavItem>
          <NavItem>Save</NavItem>
          <NavItem>Restore</NavItem>
          <NavItem>Migration</NavItem>
          <NavItem>Software</NavItem>
          <NavItem>Users</NavItem>
        </Nav>
        <div>
          <PieChart data={pieData} options={pieOptions}/>
        </div>
      </div>
    );
  }
}

StatsComponent.propTypes = {
  getStatsFromServer: React.PropTypes.func.isRequired,
  state: React.PropTypes.object.isRequired,
}
