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
          addFile={this.props.addFile}
          showAddFileModal={this.props.showAddFileModal}
          cancelAddingFile={this.props.cancelAddingFile}
        />
      </div>
    );
  }
}

SaveCreation.propTypes = {
  data: React.PropTypes.object,
  state: React.PropTypes.object,
  addFile: React.PropTypes.func,
  showAddFileModal: React.PropTypes.func,
  cancelAddingFile: React.PropTypes.func,
};
