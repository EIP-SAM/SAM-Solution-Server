//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import RestoreInstantRestoreModal from 'containers/Restore/Table/ModalInstantRestore';

const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export default class RestoreTable extends React.Component {

  handleRestoreClick(restore) {
    const files = restore.restores[0].files.split(',');
    this.props.setUserId(restore.restores[0].userId);
    this.props.selectFiles(files);
    this.props.selectSave({ value: restore.restores[0].saveId, text: moment().format('DD/MM/YYYY HH:mm') });
    this.props.showInstantRestoreModal();
  }

  render() {
    const names = [{ isLink: 'true', link: '#', value: '#' },
                  { isLink: 'false', value: 'Username' },
                  { isLink: 'false', value: 'Last Restore date' },
                  { isLink: 'false', value: 'State' },
                  { isLink: 'false', value: 'Files' },
                  { isLink: 'false', value: 'Actions' }];

    return (
      <div>
        <Table responsive hover striped>
          <thead>
            <Tr items={names} component={Th} />
          </thead>
          <tbody>
            {this.props.restores.map((restore, index) => {
              const actions = [];
              if (restore.restores.length > 0) {
                actions.push(<ButtonPopover key={`action-${0}`} id="relaunch-restore" trigger={['focus', 'hover']} placement="bottom" popoverContent="Relaunch restore" buttonType="link" icon="repeat" onClick={() => this.handleRestoreClick(restore)} />);
                return (
                  <Tr
                    key={`item-${index}`} items={[
                      { isLink: false, value: restore.id },
                      { isLink: true, link: `/restore/${restore.name}`, value: restore.name },
                      { isLink: false, value: moment(restore.restores[0].execDate).format('DD/MM/YYYY HH:mm') },
                      { isLink: false, value: (restore.restores[0].isSuccess) ? 'Succeeded' : 'Failed' },
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
                    { isLink: false, value: '' },
                    { isLink: false, value: actions }]} component={Td}
                />
              );
            })}
          </tbody>
        </Table>
        <RestoreInstantRestoreModal />
      </div>
    );
  }
}

RestoreTable.propTypes = {
  restores: React.PropTypes.array,
  showInstantRestoreModal: React.PropTypes.func,
  setUserId: React.PropTypes.func,
  selectFiles: React.PropTypes.func,
  selectSave: React.PropTypes.func,
};
