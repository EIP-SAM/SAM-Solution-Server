//
// Container Filter in page save
//

import { connect } from 'react-redux';
import { TypeUserFormGroup } from 'components/Save/Filters/TypeUserFormGroup';
import {
  getVisibilityFilter,
  getTypeFormUsers
} from './actions';

function mapStateToProps(state) {
  return {
    saves: state.get('save').get('SaveReducer').saves,
    listGroupsUsers: state.get('save').get('SaveGroupsFormGroupReducer').listGroupsUsers,
    listTypeUsers: state.get('save').get('SaveTypeUserFormGroupReducer').listTypeUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVisibilityFilter: (typeUser, listGroupsUsers, listTypeUsers) => dispatch(getVisibilityFilter(typeUser, listGroupsUsers, listTypeUsers)),
    getTypeFormUsers: (listTypeUsers) => dispatch(getTypeFormUsers(listTypeUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TypeUserFormGroup);
