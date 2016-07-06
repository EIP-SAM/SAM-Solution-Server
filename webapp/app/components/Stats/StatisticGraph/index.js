import React from 'react';
import { PageHeader, Nav, NavItem } from 'react-bootstrap';

export class StatisticGraphComponent extends React.Component {

  componentDidMount() {
      this.props.getStatsFromServer()
    }

  render() {

    var graphs = [];
    var chartJs = require("react-chartjs");
    var allGraph = this.props.stats.stats;

    if (!allGraph)
      return null;

    var graphNumber = allGraph.length;
    var graphOptions = {
              animatable: true,
    };

    for (var i = 0; i < graphNumber; i++)
    {
      switch (allGraph[i].type) {
        case "bar":
          var BarChart = chartJs.Bar;
          graphs.push(<BarChart data={allGraph[i].datasets} options={graphOptions} />);
          break;
        case "pie":
          var PieChart = chartJs.Pie;
          graphs.push(<PieChart data={allGraph[i].datasets} options={graphOptions} />);
          break;
        case "radar":
          var RadarChart = chartJs.Radar;
          graphs.push(<RadarChart data={allGraph[i].datasets} options={graphOptions} />);
          break;
        case "line":
          var LineChart = chartJs.Line;
          graphs.push(<LineChart data={allGraph[i].datasets} options={graphOptions} />);
          break;
        case "polar":
          var PolarChart = chartJs.PolarArea;
          graphs.push(<PolarChart data={allGraph[i].datasets} options={graphOptions} />);
          break;
        default:
          break;
      }
    }

    return (
      <div>
        <div>
        {
          graphs.map((data, index) => (
           <div key={ index }>{ data }</div>
          ))
        }
        </div>
      </div>
    );
  }
}

StatisticGraphComponent.propTypes = {
  getStatsFromServer: React.PropTypes.func.isRequired,
  stats: React.PropTypes.object.isRequired,
}
