//
// Container Filter in page save
//

import { connect } from 'react-redux';
import { TypeUserFormGroup } from 'components/Save/Filters/TypeUserFormGroup';
import { getVisibilityFilter } from './actions';

function mapStateToProps(state) {
  return {
    listGroupsUsers: state.get('save').get('SaveFiltersReducer').listGroupsUsers,
    listTypeUsers: state.get('save').get('SaveFiltersReducer').listTypeUsers,
    listUsers: state.get('save').get('SaveFiltersReducer').listUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVisibilityFilter: (typeUser, listGroupsUsers, listTypeUsers, listFilterUsers) => dispatch(getVisibilityFilter(typeUser, listGroupsUsers, listTypeUsers, listFilterUsers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TypeUserFormGroup);
