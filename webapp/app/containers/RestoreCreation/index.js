//
// Container page restoreCreation
//

import { connect } from 'react-redux';
import { getRestores, nameUser, listFiles, listSaves, createRestoresRequest } from './actions';
import { RestoreCreation } from 'components/RestoreCreation';

function mapStateToProps(state) {
  return {
    data: state.get('restoreHistory'),
    state: state.get('restoreCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRestores: (restores) => dispatch(getRestores(restores)),
    nameUser: (user) => dispatch(nameUser(user)),
    listFiles: (files) => dispatch(listFiles(files)),
    listSaves: (saves) => dispatch(listSaves(saves)),
    createRestoresRequest: (username) => dispatch(createRestoresRequest(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreCreation);
