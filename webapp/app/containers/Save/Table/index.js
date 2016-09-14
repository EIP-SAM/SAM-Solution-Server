//
// Container table page save
//

import { connect } from 'react-redux';
import { SaveTable } from 'components/Save/Table';
import { listUsers } from 'containers/SaveCreation/Form/Users/actions';
import { dateSave } from 'containers/SaveCreation/Form/Date/actions';
import { timeSave } from 'containers/SaveCreation/Form/Time/actions';
import { frequencySave } from 'containers/SaveCreation/Form/Frequency/actions';
import { addAllFiles } from 'containers/SaveCreation/Form/Files/actions';

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
