//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { SaveInstantSaveModal } from 'components/Save/Table/ModalInstantSave';
import { ButtonPopover } from 'components/ButtonPopover';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveTable extends React.Component {

  handleSaveClick(save) {
    this.props.showInstantSaveModal();
    this.props.listUsers([{ value: save.id }]);
    this.props.addAllFiles(save.save_scheduleds.files);
  }

  handleScheduledSaveClick(save) {
    this.props.addAllFiles(save.save_scheduleds.files);
  }

  render() {
    const names = [{ isLink: 'true', link: '#', value: '#' },
                  { isLink: 'false', value: 'Username' },
                  { isLink: 'false', value: 'Last save date' },
                  { isLink: 'false', value: 'State' },
                  { isLink: 'false', value: 'Files' },
                  { isLink: 'false', value: 'Actions' }];

    let data = this.props.state.saves;
    if (typeof data === 'undefined') {
      data = [];
    }

    return (
      <div>
        <Table responsive hover striped>
          <thead>
            <Tr items={names} component={Th} />
          </thead>
          <tbody>
            {data.map((save, index) => {
              const actions = [];
              actions.push(<ButtonPopover key={`action-${0}`} trigger="hover" placement="bottom" popoverContent="Relaunch save" buttonType="link" icon="floppy-disk" onClick={() => this.handleSaveClick(save)} />);
              actions.push(<ButtonPopover key={`action-${1}`} trigger="hover" placement="bottom" popoverContent="Relaunch save at a specific time" buttonType="link" icon="calendar" onClick={() => this.handleScheduledSaveClick(save)} link="/create-save" />);
              actions.push(<ButtonPopover key={`action-${2}`} trigger="hover" placement="bottom" popoverContent="Restore" buttonType="link" icon="repeat" />);

              if (typeof save.save_scheduleds.length === 'undefined') {
                return (
                  <Tr
                    key={`item-${index}`} items={[{ isLink: false, value: save.id },
                  { isLink: true, link: `/save/${save.name}`, value: save.name },
                  { isLink: false, value: moment(save.save_scheduleds.saves[0].execDate).format('DD/MM/YYYY HH:mm') },
                  { isLink: false, value: (save.save_scheduleds.saves[0].isSuccess) ? 'Succeeded' : 'Failed' },
                  { isLink: false, value: save.save_scheduleds.files },
                  { isLink: false, value: actions }]}
                    component={Td}
                  />
                );
              } else {
                return (
                  <Tr
                    key={`item-${index}`} items={[{ isLink: false, value: save.id },
                      { isLink: true, link: `/save/${save.name}`, value: save.name },
                      { isLink: false, value: '' },
                      { isLink: false, value: '' },
                      { isLink: false, value: '' },
                      { isLink: false, value: '' },
                    ]}
                    component={Td}
                  />

              );
              }
            })}
          </tbody>
        </Table>
        <SaveInstantSaveModal
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

SaveTable.propTypes = {
  createSaveState: React.PropTypes.object,
  state: React.PropTypes.object,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addAllFiles: React.PropTypes.func,
  showInstantSaveModal: React.PropTypes.func,
  hideInstantSaveModal: React.PropTypes.func,
  createSave: React.PropTypes.func,
};
