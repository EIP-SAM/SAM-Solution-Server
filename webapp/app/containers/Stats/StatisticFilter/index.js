//
// Container page StatisticFilter
//

import { connect } from 'react-redux';
import StatisticFilterComponent from 'components/Stats/StatisticFilter';
import { getGraphListByType, clearGraph } from 'containers/Stats/StatisticGraph/actions';
import { getFiltersFromServer } from './actions';

function mapStateToProps(state) {
  return {
    filters: state.get('stats').get('statFilters'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFiltersFromServer: () => dispatch(getFiltersFromServer()),
    getGraphListByType: type => dispatch(getGraphListByType(type)),
    clearGraph: () => dispatch(clearGraph()),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StatisticFilterComponent);
