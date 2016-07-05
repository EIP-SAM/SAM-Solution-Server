
//
// Stats
//

import React from 'react';
import { PageHeader, Nav, NavItem } from 'react-bootstrap';
import  StatisticFilterComponent  from 'containers/StatisticFilter';

export class StatisticGraphComponent extends React.Component {

  componentDidMount() {
      this.props.getStatsFromServer()
    }

  render() {

    var chartJs = require("react-chartjs");
    var allGraph = this.props.stats.stats;
    if (allGraph)
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
        <StatisticFilterComponent />
        <div>
          { data1 } { data2 } { data3 } { data4 } { data5 }
        </div>
      </div>
    );
  }
}

StatisticGraphComponent.propTypes = {
  getStatsFromServer: React.PropTypes.func.isRequired,
  stats: React.PropTypes.object.isRequired,
}
