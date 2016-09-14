//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import SaveHistoryDeletionScheduledSaveModal from 'containers/SaveHistory/Table/ModalDeletionScheduledSave';
import SaveHistoryInstantSaveModal from 'containers/SaveHistory/Table/ModalInstantSave';
import SaveHistoryInstantRestoreModal from 'containers/SaveHistory/Table/ModalInstantRestore';
import { ButtonPopover } from 'components/ButtonPopover';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import styles from './styles.css';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveHistoryTable extends React.Component {

  handleSaveClick(save) {
    this.props.showInstantSaveModal();
    this.props.listUsers([{ id: save.save_scheduled.user.id }]);
    this.props.dateSave(moment().format('DD/MM/YYYY'));
    this.props.timeSave(moment().format('HH:mm'));
    this.props.frequencySave('No Repeat');
    this.props.addAllFiles(save.save_scheduled.files);
  }

  handleScheduledSaveClick(save) {
    this.props.addAllFiles(save.save_scheduled.files);
  }

  handleDeleteClick(saveId, saveScheduledId, username) {
    this.props.deleteScheduledSaveInfo(saveId, saveScheduledId, username);
    this.props.showDeletionScheduledSaveModal();
  }

  handleRestoreClick(save) {
    this.props.instantRestore(save.save_scheduled.user.id, save.save_scheduled.files);
    this.props.showInstantRestoreModal();
  }

  render() {
    const names = [{ isLink: false, value: 'Date' },
                  { isLink: false, value: 'State' },
                  { isLink: false, value: 'Files' },
                  { isLink: false, value: 'Actions' }];

    return (
      <div>
        <Table responsive hover striped>
          <thead>
            <Tr items={names} component={Th} />
          </thead>
          <tbody>
          {this.props.saves.map((save, index) => {
            const displayButton = (!save.canceled) ? ((save.isStart) ? styles.undisplay : styles.button) : styles.undisplay;
            const actions = [];
            actions.push(<ButtonPopover key={`action-${0}`} id="launch_save_action" trigger={['focus', 'hover']} placement="bottom" popoverContent="Relaunch Save" buttonType="link" icon="floppy-disk" onClick={() => this.handleSaveClick(save)} />);
            actions.push(<ButtonPopover key={`action-${1}`} id="launch_save_scheduled_action" trigger={['focus', 'hover']} placement="bottom" popoverContent="Relaunch save at a specific time" buttonType="link" icon="calendar" onClick={() => this.handleScheduledSaveClick(save)} link="/create-save" />);
            actions.push(<ButtonPopover key={`action-${2}`} id="launch_restore_action" trigger={['focus', 'hover']} placement="bottom" popoverContent="Restore" buttonType="link" icon="repeat" onClick={() => this.handleRestoreClick(save)} />);
            actions.push(<ButtonPopover key={`action-${3}`} id="cancel_save_action" trigger={['focus', 'hover']} placement="bottom" popoverContent="Cancel scheduled save" buttonType="link" icon="remove" buttonStyle={displayButton} onClick={() => this.handleDeleteClick(save.id, save.save_scheduled.id, save.save_scheduled.user.name)} />);

            const status = (!save.canceled) ? ((save.isStart) ? ((save.isFinish) ? ((save.isSuccess) ? 'Succeeded' : 'Failed') : 'In progress') : 'Scheduled') : 'Canceled';

            return (
              <Tr
                key={`row-${index}`} items={[
                  { isLink: false, value: moment(save.execDate).format('DD/MM/YYYY HH:mm') },
                  { isLink: false, value: status },
                  { isLink: false, value: save.save_scheduled.files },
                  { isLink: false, value: actions }]} component={Td}
              />

            );
          })}
          </tbody>
        </Table>
        <SaveHistoryDeletionScheduledSaveModal />
        <SaveHistoryInstantSaveModal />
        <SaveHistoryInstantRestoreModal />
      </div>
    );
  }
}

SaveHistoryTable.propTypes = {
  saves: React.PropTypes.array,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addAllFiles: React.PropTypes.func,
  deleteScheduledSaveInfo: React.PropTypes.func,
  showDeletionScheduledSaveModal: React.PropTypes.func,
  showInstantSaveModal: React.PropTypes.func,
  showInstantRestoreModal: React.PropTypes.func,
  instantRestore: React.PropTypes.func,
};
