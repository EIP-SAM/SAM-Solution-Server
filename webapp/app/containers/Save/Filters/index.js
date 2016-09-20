//
// Container table page save
//

import { connect } from 'react-redux';
import { SaveFilters } from 'components/Save/Filters';
import {
  getGroupsFormUsers,
  getTypeFormUsers,
  getListUsers,
  getListUsersRequest
 } from './actions'

function mapStateToProps(state) {
  return {
    listGroups: state.get('save').get('SaveFiltersReducer'),
    listTypeUsers: state.get('save').get('SaveFiltersReducer').listTypeUsers,
    listUsers: state.get('save').get('SaveFiltersReducer'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getListUsersRequest: () => dispatch(getListUsersRequest()),
    getListUsers: (listUsers) => dispatch(getListUsers(listUsers)),
    getGroupsFormUsers: (listGroupsUsers) => dispatch(getGroupsFormUsers(listGroupsUsers)),
    getTypeFormUsers: (listTypeUsers) => dispatch(getTypeFormUsers(listTypeUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveFilters);
