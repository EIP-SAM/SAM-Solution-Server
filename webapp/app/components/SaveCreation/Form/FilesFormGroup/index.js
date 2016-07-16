//
// FilesFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import { SaveCreationAddFileModal } from 'components/SaveCreation/Form/FilesFormGroup/Modal';
import { SaveCreationFilesSelect } from 'components/SaveCreation/Form/FilesFormGroup/FilesSelect';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationFilesFormGroup extends React.Component {

  componentDidMount() {
    if (this.props.state.files.length > 0) {
      this.props.displayAddFile(false);
    }
  }

  render() {
    let addFileButton = null;
    if (this.props.state.canAddFile) {
      addFileButton = (
        <ButtonPopover
          buttonType="link"
          icon="plus-sign"
          onClick={this.props.showAddFileModal}
          popoverContent="Add a fill"
          trigger="hover"
          placement="right"
        />
      );
    }

    return (
      <FormGroup controlId="files" className={styles.form}>
        <ControlLabel>Files</ControlLabel>
        {addFileButton}
        <SaveCreationAddFileModal
          state={this.props.state}
          addFile={this.props.addFile}
          inputFileChange={this.props.inputFileChange}
          cancelAddingFile={this.props.cancelAddingFile}
        />
        <SaveCreationFilesSelect state={this.props.state} />
      </FormGroup>
    );
  }
}

SaveCreationFilesFormGroup.propTypes = {
  state: React.PropTypes.object,
  addFile: React.PropTypes.func,
  displayAddFile: React.PropTypes.func,
  inputFileChange: React.PropTypes.func,
  showAddFileModal: React.PropTypes.func,
  cancelAddingFile: React.PropTypes.func,
};
