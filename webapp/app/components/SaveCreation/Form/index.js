//
// Form page SaveCreation
//

import React from 'react';
import { SaveCreationUsersFormGroup } from 'components/SaveCreation/Form/UsersFormGroup';
import { SaveCreationDateFormGroup } from 'components/SaveCreation/Form/DateFormGroup';
import { SaveCreationTimeFormGroup } from 'components/SaveCreation/Form/TimeFormGroup';
import { SaveCreationFrequencyFormGroup } from 'components/SaveCreation/Form/FrequencyFormGroup';
import { SaveCreationFilesFormGroup } from 'components/SaveCreation/Form/FilesFormGroup';
import { SaveCreationButtons } from 'components/SaveCreation/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationForm extends React.Component {
  render() {
    return (
      <form>
        <SaveCreationUsersFormGroup
          listUsersState={this.props.listUsersState}
          state={this.props.state}
          listUsers={this.props.listUsers}
        />
        <SaveCreationDateFormGroup
          state={this.props.state}
          dateSave={this.props.dateSave}
        />
        <SaveCreationTimeFormGroup
          state={this.props.state}
          timeSave={this.props.timeSave}
        />
        <SaveCreationFrequencyFormGroup
          state={this.props.state}
          frequencySave={this.props.frequencySave}
        />
        <SaveCreationFilesFormGroup
          state={this.props.state}
          addFile={this.props.addFile}
          inputFileChange={this.props.inputFileChange}
          showAddFileModal={this.props.showAddFileModal}
          cancelAddingFile={this.props.cancelAddingFile}
        />
        <SaveCreationButtons
          state={this.props.state}
          createSave={this.props.createSave}
        />
      </form>
    );
  }
}

SaveCreationForm.propTypes = {
  listUsersState: React.PropTypes.object,
  state: React.PropTypes.object,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addFile: React.PropTypes.func,
  inputFileChange: React.PropTypes.func,
  showAddFileModal: React.PropTypes.func,
  cancelAddingFile: React.PropTypes.func,
  createSave: React.PropTypes.func,
};
