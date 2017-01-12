//
// Container for Migration History Create Status Select
//

import { connect } from 'react-redux';
import StatusSelect from 'components/MigrationHistory/Create/StatusSelect';
import {
  setCreateDate,
  setCreateTime,
} from './actions';

function mapStateToProps(state) {
  return {
    date: state.get('migrationHistory').get('create').date,
    time: state.get('migrationHistory').get('create').time,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCreateDate: date => dispatch(setCreateDate(date)),
    setCreateTime: time => dispatch(setCreateTime(time)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusSelect);
