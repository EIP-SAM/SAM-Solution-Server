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
        <SaveCreationUsersFormGroup data={this.props.data} />
        <SaveCreationDateFormGroup />
        <SaveCreationTimeFormGroup />
        <SaveCreationFrequencyFormGroup />
        <SaveCreationFilesFormGroup state={this.props.state} addFile={this.props.addFile} cancelAddingFile={this.props.cancelAddingFile} />
        <SaveCreationButtons />
      </form>
    );
  }
}

SaveCreationForm.propTypes = {
  data: React.PropTypes.array,
  state: React.PropTypes.object,
  addFile: React.PropTypes.func,
  cancelAddingFile: React.PropTypes.func,
};
