import React from 'react';
import { RestoreCreationUserFormGroup } from 'components/RestoreCreation/Form/UsersFormGroup';
import { RestoreCreationSavesFormGroup } from 'components/RestoreCreation/Form/SavesFormGroup';
import { RestoreCreationFilesFormGroup } from 'components/RestoreCreation/Form/FilesFormGroup';
import { RestoreCreationButtons } from 'components/RestoreCreation/Form/Buttons';
import Option from 'components/Option';
import styles from 'components/RestoreCreation/styles.css';

export class RestoreCreationForm extends React.Component {
  render () {
    return (
      <form>
        <RestoreCreationUserFormGroup
          state={this.props.state}
          nameUser={this.props.nameUser}
          setUserId={this.props.setUserId}
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
        />
        <RestoreCreationButtons
          state={this.props.state}
          createRestoresRequest={this.props.createRestoresRequest}
        />
      </form>
    );
  }
};

RestoreCreationForm.propTypes = {
  state: React.PropTypes.object,
  getHistorySavesByUserRequest: React.PropTypes.func,
  nameUser: React.PropTypes.func,
  listFiles: React.PropTypes.func,
  listSaves: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
};
