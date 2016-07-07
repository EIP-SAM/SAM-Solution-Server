//
// Container page StatisticGraph
//

import { connect } from 'react-redux';
import { getGraphFromServer } from './actions';
import { StatisticGraphComponent } from 'components/Stats/StatisticGraph';

function mapStateToProps(state) {
  return {
    stats: state.get('stats').get('statGraphs'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGraphFromServer: (type) => dispatch(getGraphFromServer(type)),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StatisticGraphComponent);
