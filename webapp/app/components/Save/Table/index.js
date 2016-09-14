//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import SaveInstantSaveModal from 'containers/Save/Table/ModalInstantSave';
import SaveInstantRestoreModal from 'containers/Save/Table/ModalInstantRestore';
import { ButtonPopover } from 'components/ButtonPopover';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveTable extends React.Component {

  handleSaveClick(save) {
    this.props.showInstantSaveModal();
    this.props.listUsers([{ id: save.id }]);
    this.props.dateSave(moment().format('DD/MM/YYYY'));
    this.props.timeSave(moment().format('HH:mm'));
    this.props.frequencySave('No Repeat');
    this.props.addAllFiles(save.save_scheduleds.files);
  }

  handleScheduledSaveClick(save) {
    this.props.listUsers([{ id: save.id, name: save.name }]);
    this.props.addAllFiles(save.save_scheduleds.files);
  }

  handleRestoreClick(save) {
    this.props.instantRestore(save.id, save.save_scheduleds.files, save.save_scheduleds.saves[0].id);
    this.props.showInstantRestoreModal();
  }

  render() {
    const names = [{ isLink: 'true', link: '#', value: '#' },
                  { isLink: 'false', value: 'Username' },
                  { isLink: 'false', value: 'Last save date' },
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
            {this.props.saves.map((save, index) => {
              const actions = [];
              actions.push(<ButtonPopover key={`action-${0}`} id="launch_save_action" trigger={['focus', 'hover']} placement="bottom" popoverContent="Relaunch save" buttonType="link" icon="floppy-disk" onClick={() => this.handleSaveClick(save)} />);
              actions.push(<ButtonPopover key={`action-${1}`} id="launch_save_scheduled_action" trigger={['focus', 'hover']} placement="bottom" popoverContent="Relaunch save at a specific time" buttonType="link" icon="calendar" onClick={() => this.handleScheduledSaveClick(save)} link="/create-save" />);
              actions.push(<ButtonPopover key={`action-${2}`} id="launch_restore_action" trigger={['focus', 'hover']} placement="bottom" popoverContent="Restore" buttonType="link" icon="repeat" onClick={() => this.handleRestoreClick(save)} />);

              if (typeof save.save_scheduleds.length === 'undefined') {
                return (
                  <Tr
                    key={`item-${index}`} items={[
                      { isLink: false, value: save.id },
                      { isLink: true, link: `/save/${save.name}/${save.id}`, value: save.name },
                      { isLink: false, value: moment(save.save_scheduleds.saves[0].execDate).format('DD/MM/YYYY HH:mm') },
                      { isLink: false, value: (save.save_scheduleds.saves[0].isSuccess) ? 'Succeeded' : 'Failed' },
                      { isLink: false, value: save.save_scheduleds.files },
                      { isLink: false, value: actions }]}
                    component={Td}
                  />
                );
              }
              return (
                <Tr
                  key={`item-${index}`} items={[
                    { isLink: false, value: save.id },
                    { isLink: true, link: `/save/${save.name}/${save.id}`, value: save.name },
                    { isLink: false, value: '' },
                    { isLink: false, value: '' },
                    { isLink: false, value: '' },
                    { isLink: false, value: '' },
                  ]}
                  component={Td}
                />
              );
            })}
          </tbody>
        </Table>
        <SaveInstantSaveModal />
        <SaveInstantRestoreModal />
      </div>
    );
  }
}

SaveTable.propTypes = {
  saves: React.PropTypes.array,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addAllFiles: React.PropTypes.func,
  showInstantSaveModal: React.PropTypes.func,
  showInstantRestoreModal: React.PropTypes.func,
  instantRestore: React.PropTypes.func,
};
