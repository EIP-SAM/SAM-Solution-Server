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
          userErrorMsg={this.props.userErrorMsg}
        />
        <SaveCreationDateFormGroup
          state={this.props.state}
          dateSave={this.props.dateSave}
          dateErrorMsg={this.props.dateErrorMsg}
        />
        <SaveCreationTimeFormGroup
          state={this.props.state}
          timeSave={this.props.timeSave}
          timeErrorMsg={this.props.timeErrorMsg}
        />
        <SaveCreationFrequencyFormGroup
          state={this.props.state}
          frequencySave={this.props.frequencySave}
        />
        <SaveCreationFilesFormGroup
          state={this.props.state}
          addFile={this.props.addFile}
          displayAddFile={this.props.displayAddFile}
          inputFileChange={this.props.inputFileChange}
          showAddFileModal={this.props.showAddFileModal}
          cancelAddingFile={this.props.cancelAddingFile}
          fileErrorMsg={this.props.fileErrorMsg}
        />
        <SaveCreationButtons
          state={this.props.state}
          createSave={this.props.createSave}
          resetState={this.props.resetState}
          userErrorMsg={this.props.userErrorMsg}
          dateErrorMsg={this.props.dateErrorMsg}
          timeErrorMsg={this.props.timeErrorMsg}
          frequencyErrorMsg={this.props.frequencyErrorMsg}
          fileErrorMsg={this.props.fileErrorMsg}
        />
      </form>
    );
  }
}

SaveCreationForm.propTypes = {
  listUsersState: React.PropTypes.object,
  state: React.PropTypes.object,
  resetState: React.PropTypes.func,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addFile: React.PropTypes.func,
  displayAddFile: React.PropTypes.func,
  inputFileChange: React.PropTypes.func,
  showAddFileModal: React.PropTypes.func,
  cancelAddingFile: React.PropTypes.func,
  createSave: React.PropTypes.func,
  userErrorMsg: React.PropTypes.func,
  dateErrorMsg: React.PropTypes.func,
  timeErrorMsg: React.PropTypes.func,
  frequencyErrorMsg: React.PropTypes.func,
  fileErrorMsg: React.PropTypes.func,
};
