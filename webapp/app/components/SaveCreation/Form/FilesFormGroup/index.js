//
// FilesFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import { SaveCreationAddFileModal } from 'components/SaveCreation/Form/FilesFormGroup/Modal';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationFilesFormGroup extends React.Component {
  render() {
    return (
      <FormGroup controlId="files" className={styles.form}>
        <ControlLabel>Files</ControlLabel>
        <ButtonPopover buttonType="link" icon="plus-sign" onClick={this.props.addFile} popoverContent="Add a fill" trigger="hover" placement="right" />
        <SaveCreationAddFileModal stateShowModal={this.props.state.showModal} cancelAddingFile={this.props.cancelAddingFile} />
        <FormControl componentClass="select" multiple>
          <option value="">select (multiple)</option>
          <option value="">...</option>
        </FormControl>
      </FormGroup>
    );
  }
}

SaveCreationFilesFormGroup.propTypes = {
  state: React.PropTypes.object,
  addFile: React.PropTypes.func,
  cancelAddingFile: React.PropTypes.func,
};
