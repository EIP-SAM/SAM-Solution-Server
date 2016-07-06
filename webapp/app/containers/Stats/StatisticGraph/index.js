//
// Container page StatisticGraph
//

import { connect } from 'react-redux';
import { getAllGraphFromServer } from './actions';
import { StatisticGraphComponent } from 'components/Stats/StatisticGraph';

function mapStateToProps(state) {
  return {
    stats: state.get('stats').get('statGraphs'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllGraphFromServer: () => dispatch(getAllGraphFromServer()),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StatisticGraphComponent);
