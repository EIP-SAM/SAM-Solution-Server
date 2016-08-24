//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import { RestoreInstantRestoreModal } from 'components/Restore/Table/ModalInstantRestore';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class RestoreTable extends React.Component {

  handleRestoreClick(restore) {
    this.props.setUserId(restore.restores[0].userId);
    this.props.selectFiles(restore.restores[0].files);
    this.props.showInstantRestoreModal();
  }

  render() {
    const names = [{ isLink: 'true', link: '#', value: '#' },
                  { isLink: 'false', value: 'Username' },
                  { isLink: 'false', value: 'Last Restore date' },
                  { isLink: 'false', value: 'Files' },
                  { isLink: 'false', value: 'Actions' }];

    let data = [];
    if (this.props.data !== null) {
      if (this.props.data.length > 0) {
        data = this.props.data;
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
              if (restore.restores.length > 0) {
                actions.push(<ButtonPopover key={`action-${0}`} id="relaunch-restore" trigger={['focus', 'hover']} placement="bottom" popoverContent="Relaunch restore" buttonType="link" icon="repeat" onClick={() => this.handleRestoreClick(restore)} />);
                return (
                  <Tr
                    key={`item-${index}`} items={[
                      { isLink: false, value: restore.id },
                      { isLink: true, link: `/restore/${restore.name}`, value: restore.name },
                      { isLink: false, value: moment(restore.restores[0].execDate).format('DD/MM/YYYY HH:mm') },
                      { isLink: false, value: restore.restores[0].files },
                      { isLink: false, value: actions }]} component={Td}
                  />
                );
              }
              return (
                <Tr
                  key={`item-${index}`} items={[
                    { isLink: false, value: restore.id },
                    { isLink: true, link: `/restore/${restore.name}`, value: restore.name },
                    { isLink: false, value: '' },
                    { isLink: false, value: '' },
                    { isLink: false, value: actions }]} component={Td}
                />
            );
            })}
          </tbody>
        </Table>
        <RestoreInstantRestoreModal
          createRestoresRequest={this.props.createRestoresRequest}
          historyState={this.props.historyState}
          hideInstantRestoreModal={this.props.hideInstantRestoreModal}
          creationState={this.props.creationState}
          resetStateCreationRestore={this.props.resetStateCreationRestore}
        />
      </div>
    );
  }
}

RestoreTable.propTypes = {
  data: React.PropTypes.object,
  historyState: React.PropTypes.object,
  creationState: React.PropTypes.object,
  showInstantRestoreModal: React.PropTypes.func,
  hideInstantRestoreModal: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  resetStateCreationRestore: React.PropTypes.func,
  setUserId: React.PropTypes.func,
  selectFiles: React.PropTypes.func,
};
