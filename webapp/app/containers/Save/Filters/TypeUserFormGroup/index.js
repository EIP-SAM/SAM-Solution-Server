//
// Container Filter in page save
//

import { connect } from 'react-redux';
import { TypeUserFormGroup } from 'components/Save/Filters/TypeUserFormGroup';
import { getVisibilityFilter } from './actions';

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
