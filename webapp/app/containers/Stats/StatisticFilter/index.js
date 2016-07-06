//
// Container page StatisticFilter
//

import { connect } from 'react-redux';
import { getFiltersFromServer } from './actions';
import { StatisticFilterComponent } from 'components/Stats/StatisticFilter';
import { getGraphFromServer } from 'containers/Stats/StatisticGraph/actions';
import { getAllGraphFromServer } from 'containers/Stats/StatisticGraph/actions';

function mapStateToProps(state) {
  return {
    filters: state.get('stats').get('statFilters'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFiltersFromServer: () => dispatch(getFiltersFromServer()),
    getGraphFromServer: (type) => dispatch(getGraphFromServer(type)),
    getAllGraphFromServer: () => dispatch(getAllGraphFromServer()),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StatisticFilterComponent);
