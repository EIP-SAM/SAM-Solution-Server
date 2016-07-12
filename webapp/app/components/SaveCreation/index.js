//
// Page create save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { SaveCreationForm } from 'components/SaveCreation/Form';


/* eslint-disable react/prefer-stateless-function */
export class SaveCreation extends React.Component {

  render() {
    return (
      <div>
        <PageHeader>Scheduled Save</PageHeader>
        <SaveCreationForm
          data={this.props.data.saves}
          state={this.props.state}
          listUsers={this.props.listUsers}
          dateSave={this.props.dateSave}
          timeSave={this.props.timeSave}
          frequencySave={this.props.frequencySave}
          addFile={this.props.addFile}
          showAddFileModal={this.props.showAddFileModal}
          cancelAddingFile={this.props.cancelAddingFile}
          createSave={this.props.createSave}
        />
      </div>
    );
  }
}

SaveCreation.propTypes = {
  data: React.PropTypes.object,
  state: React.PropTypes.object,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addFile: React.PropTypes.func,
  showAddFileModal: React.PropTypes.func,
  cancelAddingFile: React.PropTypes.func,
  createSave: React.PropTypes.func,
};
