//
// Container page StatisticGraph
//

import { connect } from 'react-redux';
import { getGraphFromServer, getGraphListByType, getGraphFromServerByTypeAndName, clearGraph } from './actions';
import { StatisticGraphComponent } from 'components/Stats/StatisticGraph';

function mapStateToProps(state) {
  return {
    stats: state.get('stats').get('statGraphs'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGraphFromServer: (type) => dispatch(getGraphFromServer(type)),
    getGraphListByType: (type) => dispatch(getGraphListByType(type)),
    getGraphFromServerByTypeAndName: (type, name) => dispatch(getGraphFromServerByTypeAndName(type, name)),
    clearGraph: () => dispatch(clearGraph()),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StatisticGraphComponent);
