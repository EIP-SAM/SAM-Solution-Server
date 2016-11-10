//
// Container table sofwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserSearchbar } from 'components/SoftwaresByUser/Searchbar';
import { searchbarChange } from './actions';

function mapStateToProps(state) {
  return {
    searchbar: state.get('softwaresByUser').get('SoftwaresByUserSearchbarReducer').searchbar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchbarChange: (searchbar) => dispatch(searchbarChange(searchbar)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserSearchbar);
