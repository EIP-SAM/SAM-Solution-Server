import React from 'react';
import RestoreCreationUserFormGroup from 'containers/RestoreCreation/Form/User';
import RestoreCreationSavesFormGroup from 'containers/RestoreCreation/Form/Saves';
import RestoreCreationFilesFormGroup from 'containers/RestoreCreation/Form/Files';
import RestoreCreationButtons from 'containers/RestoreCreation/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export default class RestoreCreationForm extends React.Component {
  componentDidMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.getHistorySavesByUserRequest(username);
  }

  render() {
    return (
      <form>
        <RestoreCreationUserFormGroup />
        <RestoreCreationSavesFormGroup />
        <RestoreCreationFilesFormGroup />
        <RestoreCreationButtons />
      </form>
    );
  }
}

RestoreCreationForm.propTypes = {
  getHistorySavesByUserRequest: React.PropTypes.func,
};
