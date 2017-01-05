//
// Container page StatisticGraph
//

import { connect } from 'react-redux';
import StatisticGraphComponent from 'components/Stats/StatisticGraph';
import { getGraphListByType, getGraphFromServerByTypeAndName, clearGraph } from './actions';

function mapStateToProps(state) {
  return {
    stats: state.get('stats').get('statGraphs').stats,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGraphListByType: type => dispatch(getGraphListByType(type)),
    getGraphFromServerByTypeAndName: (type, name) => dispatch(getGraphFromServerByTypeAndName(type, name)),
    clearGraph: () => dispatch(clearGraph()),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StatisticGraphComponent);
