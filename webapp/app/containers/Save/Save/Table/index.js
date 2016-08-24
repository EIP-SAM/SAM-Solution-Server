//
// Container table page save
//

import { connect } from 'react-redux';
import { SaveTable } from 'components/Save/Table';
import {
  listUsers,
  dateSave,
  timeSave,
  frequencySave,
  addAllFiles,
} from 'containers/Save/actions';

import {
  getUsers,
} from 'containers/Save/Save/actions';

import {
  showInstantSaveModal,
} from './ModalInstantSave/actions';

import {
  showInstantRestoreModal,
  instantRestore,
} from './ModalInstantRestore/actions';

function mapStateToProps(state) {
  return {
    saves: state.get('save').get('SaveReducer').saves,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: (users) => dispatch(getUsers(users)),
    listUsers: (users) => dispatch(listUsers(users)),
    dateSave: (date) => dispatch(dateSave(date)),
    timeSave: (time) => dispatch(timeSave(time)),
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
    addAllFiles: (files) => dispatch(addAllFiles(files)),
    showInstantSaveModal: () => dispatch(showInstantSaveModal()),
    showInstantRestoreModal: () => dispatch(showInstantRestoreModal()),
    instantRestore: (userId, files) => dispatch(instantRestore(userId, files)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveTable);
