//
// Container table sofwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserSearchbar } from 'components/SoftwaresByUser/Searchbar';
import {
  searchbarChange,
  searchSoftwareRequest,
} from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('softwaresByUser').get('SoftwaresByUserReducer').username,
    searchbar: state.get('softwaresByUser').get('SoftwaresByUserSearchbarReducer').searchbar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchbarChange: searchbar => dispatch(searchbarChange(searchbar)),
    searchSoftwareRequest: (username, packageName) => searchSoftwareRequest(username, packageName),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserSearchbar);
