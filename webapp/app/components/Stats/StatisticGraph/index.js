import React from 'react';
import { PageHeader, Nav, NavItem } from 'react-bootstrap';
import styles from 'components/Stats/StatisticGraph/styles.css';
const chartJs = require("react-chartjs");

export class StatisticGraphComponent extends React.Component {

  componentDidMount() {
      this.props.getGraphFromServer('User');
    }

  render() {

    var graphs = [];
    var allGraph = this.props.stats.stats;

    if (!allGraph)
      return null;

    var graphNumber = allGraph.length;
    var graphOptions = {
              animatable: true,
    };
    var Chart = null;

    for (var i = 0; i < graphNumber; i++)
    {
      if (allGraph[i] && allGraph[i].complete)
      {
        Chart = null;
        switch (allGraph[i].type) {
          case "bar":
            Chart = chartJs.Bar;
            break;
          case "pie":
            Chart = chartJs.Pie;
            break;
          case "radar":
            Chart = chartJs.Radar;
            break;
          case "line":
            Chart = chartJs.Line;
            break;
          // case "polar":
          //   Chart = chartJs.PolarArea;
          //   break;
          case "doughnut":
            Chart = chartJs.Doughnut;
            break;
          default:
            break;
        }
        if (Chart)
        {
          graphs.push({graph: <Chart width="500" height="100" data={allGraph[i].datasets} options={graphOptions} />, title: allGraph[i].title, type: allGraph[i].type});
        }
      }
    }

    return (
      <div>
        {
          graphs.map((data, index) => (
            <div className={ styles.divGraph } key={ data.title + index + data.type }>
              <div className={ styles.divCanvas } >{ data.graph }</div>
              <span className={ styles.spanTitle } >{ data.title }</span>
            </div>
          ))
        }
      </div>
    );
  }
}

StatisticGraphComponent.propTypes = {
  getGraphFromServer: React.PropTypes.func.isRequired,
  stats: React.PropTypes.object.isRequired,
}
