//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { SaveHistoryDeletionScheduledSaveModal } from 'components/SaveHistory/Table/ModalDeletionScheduledSave';
import { SaveHistoryInstantSaveModal } from 'components/SaveHistory/Table/ModalInstantSave';
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
    this.props.listUsers([{ value: save.save_scheduled.user.id }]);
    this.props.addAllFiles(save.save_scheduled.files);
  }

  handleScheduledSaveClick(save) {
    this.props.addAllFiles(save.save_scheduled.files);
  }

  handleDeleteClick(saveId, saveScheduledId, username) {
    this.props.deleteScheduledSaveInfo(saveId, saveScheduledId, username);
    this.props.showDeletionScheduledSaveModal();
  }

  render() {
    const names = [{ isLink: false, value: 'Date' },
                  { isLink: false, value: 'State' },
                  { isLink: false, value: 'Files' },
                  { isLink: false, value: 'Actions' }];

    let saves = this.props.state.saves;
    if (typeof saves === 'undefined') {
      saves = [];
    }

    return (
      <div>
        <Table responsive hover striped>
          <thead>
            <Tr items={names} component={Th} />
          </thead>
          <tbody>
          {saves.map((save, index) => {
            const displayButton = (!save.canceled) ? ((save.isStart) ? styles.undisplay : styles.button) : styles.undisplay;
            const actions = [];
            actions.push(<ButtonPopover key={`action-${0}`} trigger="hover" placement="bottom" popoverContent="Relaunch Save" buttonType="link" icon="floppy-disk" onClick={() => this.handleSaveClick(save)} />);
            actions.push(<ButtonPopover key={`action-${1}`} trigger="hover" placement="bottom" popoverContent="Relaunch save at a specific time" buttonType="link" icon="calendar" onClick={() => this.handleScheduledSaveClick(save)} link="/create-save" />);
            actions.push(<ButtonPopover key={`action-${2}`} trigger="hover" placement="bottom" popoverContent="Restore" buttonType="link" icon="repeat" />);
            actions.push(<ButtonPopover key={`action-${3}`} trigger="hover" placement="bottom" popoverContent="Cancel scheduled save" buttonType="link" icon="remove" buttonStyle={displayButton} onClick={() => this.handleDeleteClick(save.id, save.save_scheduled.id, save.save_scheduled.user.name)} />);

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
        <SaveHistoryDeletionScheduledSaveModal
          state={this.props.state}
          hideDeletionScheduledSaveModal={this.props.hideDeletionScheduledSaveModal}
          cancelSave={this.props.cancelSave}
        />
        <SaveHistoryInstantSaveModal
          createSaveState={this.props.createSaveState}
          state={this.props.state}
          dateSave={this.props.dateSave}
          timeSave={this.props.timeSave}
          frequencySave={this.props.frequencySave}
          hideInstantSaveModal={this.props.hideInstantSaveModal}
          createSave={this.props.createSave}
        />
      </div>
    );
  }
}

SaveHistoryTable.propTypes = {
  createSaveState: React.PropTypes.object,
  state: React.PropTypes.object,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addAllFiles: React.PropTypes.func,
  deleteScheduledSaveInfo: React.PropTypes.func,
  showDeletionScheduledSaveModal: React.PropTypes.func,
  hideDeletionScheduledSaveModal: React.PropTypes.func,
  cancelSave: React.PropTypes.func,
  showInstantSaveModal: React.PropTypes.func,
  hideInstantSaveModal: React.PropTypes.func,
  createSave: React.PropTypes.func,
};
