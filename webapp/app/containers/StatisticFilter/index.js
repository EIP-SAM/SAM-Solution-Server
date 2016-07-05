//
// Container page StatisticFilter
//

import { connect } from 'react-redux';
import { getFiltersFromServer } from './actions';
import { StatisticFilterComponent } from 'components/StatisticFilter';

function mapStateToProps(state) {
  return {
    filters: state.get('filters'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFiltersFromServer: () => dispatch(getFiltersFromServer()),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StatisticFilterComponent);
