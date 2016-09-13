//
// Container type user filter page restore
//

import { connect } from 'react-redux';
import { getVisibilityFilter } from './actions';
import { TypeUserFormGroup } from 'components/Restore/Filters/TypeUserFormGroup';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVisibilityFilter: (typeUser) => dispatch(getVisibilityFilter(typeUser)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TypeUserFormGroup);
