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
        />
        <RestoreCreationSavesFormGroup
          data={this.props.data}
          state={this.props.state}
          listSaves={this.props.listSaves}
          listFiles={this.props.listFiles}
        />
        <RestoreCreationFilesFormGroup
          data={this.props.data}
          state={this.props.state}
          listFiles={this.props.listFiles}
        />
        <RestoreCreationButtons
          data={this.props.data}
          state={this.props.state}
        />
      </form>
    );
  }
};

RestoreCreationForm.propTypes = {
  data: React.PropTypes.object,
  state: React.PropTypes.object,
  nameUser: React.PropTypes.func,
  listFiles: React.PropTypes.func,
  listSaves: React.PropTypes.func,
};
