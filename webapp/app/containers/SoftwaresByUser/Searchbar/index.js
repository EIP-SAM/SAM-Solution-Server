//
// Container table sofwares by user
//

import { connect } from 'react-redux';
import SoftwaresByUserSearchbar from 'components/SoftwaresByUser/Searchbar';
import {
  searchbarChange,
  searchbarState,
  searchSoftwareRequest,
} from './actions';
import { getInstalledSoftwaresRequest } from '../actions';

function mapStateToProps(state) {
  return {
    username: state.get('softwaresByUser').get('SoftwaresByUserReducer').username,
    searchbar: state.get('softwaresByUser').get('SoftwaresByUserSearchbarReducer').searchbar,
    searchstate:
    state.get('softwaresByUser').get('SoftwaresByUserSearchbarReducer').searchstate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchbarChange: searchbar => dispatch(searchbarChange(searchbar)),
    searchbarState: searchstate => dispatch(searchbarState(searchstate)),
    searchSoftwareRequest: (username, packageName) => searchSoftwareRequest(username, packageName),
    getInstalledSoftwaresRequest: username => getInstalledSoftwaresRequest(username),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserSearchbar);
