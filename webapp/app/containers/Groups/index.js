//
// Container Groups
//

import { connect } from 'react-redux';
import { getGroupsRequest } from './actions';
import { Groups } from 'components/Groups';

function mapStateToProps(state) {
  return {
    state: state.get('groups'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupsRequest: () => dispatch(getGroupsRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Groups);
