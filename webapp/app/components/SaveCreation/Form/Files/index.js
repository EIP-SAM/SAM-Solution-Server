//
// FilesFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import SaveCreationAddFileModal from 'containers/SaveCreation/Form/Files/Modal';
import SaveCreationFilesSelect from 'containers/SaveCreation/Form/Files/Select';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationFiles extends React.Component {

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
          id="add_file_button"
          buttonType="link"
          icon="plus-sign"
          onClick={this.props.showAddFileModal}
          popoverContent="Add a fill"
          trigger={['focus', 'hover']}
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

SaveCreationFiles.propTypes = {
  files: React.PropTypes.array,
  canAddFile: React.PropTypes.bool,
  displayAddFile: React.PropTypes.func,
  showAddFileModal: React.PropTypes.func,
};
