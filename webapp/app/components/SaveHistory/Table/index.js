//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { SaveHistoryDeletionScheduledSaveModal } from 'components/SaveHistory/Table/ModalDeletionScheduledSave';
import { ButtonPopover } from 'components/ButtonPopover';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveHistoryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveId: '',
      saveScheduledId: '',
      username: '',
    };
  }

  handleScheduledSaveClick(save) {
    this.props.addAllFiles(save.save_scheduled.files);
  }

  handleDeleteClick(saveId, saveScheduledId, username) {
    this.setState({ saveId, saveScheduledId, username });
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

    console.log(this.props.state.saves);
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
            actions.push(<ButtonPopover key={`action-${0}`} trigger="hover" placement="bottom" popoverContent="Relaunch Save" buttonType="link" icon="floppy-disk" />);
            actions.push(<ButtonPopover key={`action-${1}`} trigger="hover" placement="bottom" popoverContent="Relaunch save at a specific time" buttonType="link" icon="calendar" onClick={() => this.handleScheduledSaveClick(save)} link="/create-save" />);
            actions.push(<ButtonPopover key={`action-${2}`} trigger="hover" placement="bottom" popoverContent="Restore" buttonType="link" icon="repeat" />);
            actions.push(<ButtonPopover key={`action-${3}`} trigger="hover" placement="bottom" popoverContent="Cancel scheduled save" buttonType="link" icon="remove" buttonStyle={displayButton} onClick={() => this.handleDeleteClick(save.id, save.save_scheduled.id, save.save_scheduled.user.name)} />);

            const status = (!save.canceled) ? ((save.isStart) ? ((save.isFinish) ? ((save.isSuccess) ? 'Succeeded' : 'Failed') : 'In progress') : 'Scheluded') : 'Canceled';

            return (
              <Tr
                key={`row-${index}`} items={[
                  { isLink: false, value: save.execDate },
                  { isLink: false, value: status },
                  { isLink: false, value: save.save_scheduled.files },
                  { isLink: false, value: actions }]} component={Td}
              />

            );
          })}
          </tbody>
        </Table>
        <SaveHistoryDeletionScheduledSaveModal
          ids={this.state}
          state={this.props.state}
          showDeletionScheduledSaveModal={this.props.showDeletionScheduledSaveModal}
          hideDeletionScheduledSaveModal={this.props.hideDeletionScheduledSaveModal}
          cancelSave={this.props.cancelSave}
        />
      </div>
    );
  }
}

SaveHistoryTable.propTypes = {
  state: React.PropTypes.object,
  addAllFiles: React.PropTypes.func,
  showDeletionScheduledSaveModal: React.PropTypes.func,
  hideDeletionScheduledSaveModal: React.PropTypes.func,
  cancelSave: React.PropTypes.func,
};
