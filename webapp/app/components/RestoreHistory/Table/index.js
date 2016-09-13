//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import RestoreHistoryInstantRestoreModal from 'containers/RestoreHistory/Table/ModalInstantRestore';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class RestoreHistoryTable extends React.Component {
  // this.props.getHistoryRestoresByUserRequest(window.location.pathname.split('/')[2]);

  handleRestoreClick(restore) {
    let files = [];
    files = restore.files.split(',');
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
    if (typeof this.props.restores !== 'undefined') {
      if (this.props.restores.length > 0) {
        data = this.props.restores;
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
        <RestoreHistoryInstantRestoreModal />
      </div>
    );
  }
}

RestoreHistoryTable.propTypes = {
  restores: React.PropTypes.array,
  showInstantRestoreModal: React.PropTypes.func,
  setUserId: React.PropTypes.func,
  selectFiles: React.PropTypes.func,
};
