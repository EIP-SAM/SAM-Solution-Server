//
// FilesFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import SaveCreationAddFileModal from 'containers/Save/SaveCreation/Form/Files/Modal';
import SaveCreationFilesSelect from 'containers/Save/SaveCreation/Form/Files/Select';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationFilesFormGroup extends React.Component {

  componentDidMount() {
    if (this.props.files.length > 0) {
      this.props.displayAddFile(false);
    }
  }

  render() {
    let addFileButton = null;
    if (this.props.canAddFile) {
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
        <SaveCreationAddFileModal />
        <SaveCreationFilesSelect />
      </FormGroup>
    );
  }
}

SaveCreationFilesFormGroup.propTypes = {
  files: React.PropTypes.array,
  canAddFile: React.PropTypes.bool,
  displayAddFile: React.PropTypes.func,
  showAddFileModal: React.PropTypes.func,
};
