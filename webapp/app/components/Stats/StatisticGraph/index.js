import React from 'react';
import styles from 'components/Stats/StatisticGraph/styles.css';

const chartJs = require('react-chartjs');

/* eslint-disable react/prefer-stateless-function */
export default class StatisticGraphComponent extends React.Component {
  componentDidMount() {
    this.props.getGraphListByType('User');
  }

  render() {
    const graphs = [];
    const allGraph = this.props.stats;

    if (!allGraph) {
      return null;
    }

    const graphNumber = allGraph.length;

    const graphOptions = {
      animatable: true,
    };

    let Chart = null;

    for (let i = 0; i < graphNumber; i++) {
      if (allGraph[i]) {
        Chart = null;
        switch (allGraph[i].type) {
          case 'bar':
            Chart = chartJs.Bar;
            break;
          case 'pie':
            Chart = chartJs.Pie;
            break;
          case 'radar':
            Chart = chartJs.Radar;
            break;
          case 'line':
            Chart = chartJs.Line;
            break;
          case 'doughnut':
            Chart = chartJs.Doughnut;
            break;
          default:
            break;
        }
        if (Chart) {
          graphs.push({ graph: <Chart width="500" height="100" data={allGraph[i].datasets} redraw options={graphOptions} />, title: allGraph[i].title, type: allGraph[i].type });
        }
      }
    }

    return (
      <div>
        {
          graphs.map((data, index) => (
            <div className={styles.divGraph} key={data.title + index + data.type}>
              <div className={styles.divCanvas} >{data.graph}</div>
              <span className={styles.spanTitle} >{data.title}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

StatisticGraphComponent.propTypes = {
  getGraphListByType: React.PropTypes.func.isRequired,
  stats: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
