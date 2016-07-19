import React from 'react';
import { RestoreCreationUserFormGroup } from 'components/RestoreCreation/Form/UsersFormGroup';
import { RestoreCreationSavesFormGroup } from 'components/RestoreCreation/Form/SavesFormGroup';
import { RestoreCreationFilesFormGroup } from 'components/RestoreCreation/Form/FilesFormGroup';
import { RestoreCreationButtons } from 'components/RestoreCreation/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class RestoreCreationForm extends React.Component {
  render() {
    return (
      <form>
        <RestoreCreationUserFormGroup
          state={this.props.state}
          nameUser={this.props.nameUser}
          getHistorySavesByUserRequest={this.props.getHistorySavesByUserRequest}
        />

        <RestoreCreationSavesFormGroup
          state={this.props.state}
          listSaves={this.props.listSaves}
          listFiles={this.props.listFiles}
          setUserId={this.props.setUserId}
        />
        <RestoreCreationFilesFormGroup
          state={this.props.state}
          listFiles={this.props.listFiles}
          selectFiles={this.props.selectFiles}
        />
        <RestoreCreationButtons
          state={this.props.state}
          resetState={this.props.resetState}
          createRestoresRequest={this.props.createRestoresRequest}
        />
      </form>
    );
  }
}

RestoreCreationForm.propTypes = {
  state: React.PropTypes.object,
  resetState: React.PropTypes.func,
  getHistorySavesByUserRequest: React.PropTypes.func,
  nameUser: React.PropTypes.func,
  listFiles: React.PropTypes.func,
  selectFiles: React.PropTypes.func,
  listSaves: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  setUserId: React.PropTypes.func,
};
