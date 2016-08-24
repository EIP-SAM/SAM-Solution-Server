//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import { RestoreHistoryInstantRestoreModal } from 'components/RestoreHistory/Table/ModalInstantRestore';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class RestoreHistoryTable extends React.Component {
  handleRestoreClick(restore) {
    let files = [];
    files = restore.files.split(',');
    this.props.getHistoryRestoresByUserRequest(window.location.pathname.split('/')[2]);
    this.props.showInstantRestoreModal();
    this.props.setUserId(restore.userId);
    this.props.selectFiles(files);
  }

  render() {
    const names = [{ isLink: false, value: 'Date' },
                  { isLink: false, value: 'State' },
                  { isLink: false, value: 'Files' },
                  { isLink: false, value: 'Actions' }];

    let data = [];
    if (typeof this.props.state.restores !== 'undefined') {
      if (this.props.state.restores.length > 0) {
        data = this.props.state.restores;
      }
    }

    return (
      <div>
        <Table responsive hover striped>
          <thead>
            <Tr items={names} component={Th} />
          </thead>
          <tbody>
          {data.map((restore, index) => {
            const actions = [];
            actions.push(<ButtonPopover key={`action-${0}`} id="relaunch-restore" trigger={['focus', 'hover']} placement="bottom" popoverContent="Relaunch Restore" buttonType="link" icon="repeat" onClick={() => this.handleRestoreClick(restore)} />);
            return (
              <Tr
                key={`row-${index}`} items={[
                  { isLink: false, value: moment(restore.execDate).format('DD/MM/YYYY HH:mm') },
                  { isLink: false, value: (restore.isStart) ? ((restore.isFinish) ? ((restore.isSuccess) ? 'Succeeded' : 'Failed') : 'In progress') : 'In progress' },
                  { isLink: false, value: restore.files },
                  { isLink: false, value: actions }]} component={Td}
              />
            );
          })}
          </tbody>
        </Table>
        <RestoreHistoryInstantRestoreModal
          createRestoresRequest={this.props.createRestoresRequest}
          state={this.props.state}
          hideInstantRestoreModal={this.props.hideInstantRestoreModal}
          stateRestore={this.props.stateRestore}
          resetStateCreationRestore={this.props.resetStateCreationRestore}
        />
      </div>
    );
  }
}

RestoreHistoryTable.propTypes = {
  state: React.PropTypes.object,
  stateRestore: React.PropTypes.object,
  hideInstantRestoreModal: React.PropTypes.func,
  showInstantRestoreModal: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  setUserId: React.PropTypes.func,
  selectFiles: React.PropTypes.func,
  getHistoryRestoresByUserRequest: React.PropTypes.func,
  resetStateCreationRestore: React.PropTypes.func,
};
