
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

    var chartJs = require("react-chartjs");
    var allGraph = this.props.state.stats;
    var graphNumber = allGraph.length;
    var graphOptions = {
              animatable: true,
    };

    for (var i = 0; i < graphNumber; i++)
    {
      switch (allGraph[i].type) {
        case "bar":
          var BarChart = chartJs.Bar;
          var data1 = <BarChart data={allGraph[i].datasets} options={graphOptions} />;
          break;
        case "pie":
          var PieChart = chartJs.Pie;
          var data2 = <PieChart data={allGraph[i].datasets} options={graphOptions} />;
          break;
        case "radar":
          var RadarChart = chartJs.Radar;
          var data3 = <RadarChart data={allGraph[i].datasets} options={graphOptions} />;
          break;
        case "line":
          var LineChart = chartJs.Line;
          var data4 = <LineChart data={allGraph[i].datasets} options={graphOptions} />;
          break;
        case "polar":
          var PolarChart = chartJs.PolarArea;
          var data5 = <PolarChart data={allGraph[i].datasets} options={graphOptions} />;
          break;
        default:
          break;
      }
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
        { data1 } { data2 } { data3 } { data4 } { data5 }
        </div>
      </div>
    );
  }
}

StatsComponent.propTypes = {
  getStatsFromServer: React.PropTypes.func.isRequired,
  state: React.PropTypes.object.isRequired,
}
