//
// Container page StatisticGraph
//

import { connect } from 'react-redux';
import { getStatsFromServer } from './actions';
import { StatisticGraphComponent } from 'components/Stats/StatisticGraph';

function mapStateToProps(state) {
  return {
    stats: state.get('stats'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStatsFromServer: () => dispatch(getStatsFromServer()),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StatisticGraphComponent);
