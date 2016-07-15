//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { SaveTable } from 'components/Save/Table';
import { SaveButtons } from 'components/Save/Buttons';
import { SaveFilters } from 'components/Save/Filters';

/* eslint-disable react/prefer-stateless-function */
export class Save extends React.Component {

  componentDidMount() {
    this.props.getSavesRequest();
  }

  render() {
    return (
      <div>
        <PageHeader>Save</PageHeader>
        <SaveFilters />
        <SaveButtons
          dateSave={this.props.dateSave}
          timeSave={this.props.timeSave}
          frequencySave={this.props.frequencySave}
        />
        <SaveTable
          createSaveState={this.props.createSaveState}
          state={this.props.state}
          listUsers={this.props.listUsers}
          dateSave={this.props.dateSave}
          timeSave={this.props.timeSave}
          frequencySave={this.props.frequencySave}
          addAllFiles={this.props.addAllFiles}
          showInstantSaveModal={this.props.showInstantSaveModal}
          hideInstantSaveModal={this.props.hideInstantSaveModal}
          createSave={this.props.createSave}
        />
      </div>
    );
  }
}

Save.propTypes = {
  createSaveState: React.PropTypes.object,
  state: React.PropTypes.object,
  getSavesRequest: React.PropTypes.func,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addAllFiles: React.PropTypes.func,
  showInstantSaveModal: React.PropTypes.func,
  hideInstantSaveModal: React.PropTypes.func,
  createSave: React.PropTypes.func,
};
