//
// Container page Stats
//

import { connect } from 'react-redux';
import { getStatsFromServer } from './actions';
import { StatsComponent } from 'components/Stats';

function mapStateToProps(state) {
  return {
    state: state.get('stats'),
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
)(StatsComponent);
