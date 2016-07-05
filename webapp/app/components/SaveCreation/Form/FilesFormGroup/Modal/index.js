//
// Modal to add fill on select in form for page SaveCreation
//

import React from 'react';
import { Modal, FormControl, ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SaveCreation/Form/FilesFormGroup/Modal/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationAddFileModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.stateShowModal} onHide={this.props.cancelAddingFile}>
        <Modal.Header closeButton>
          <Modal.Title>Add a file to save</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            className={styles.input}
            type="text"
            placeholder="Ex: C:/user/username/Desktop/file.txt"
          />
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonType="info" buttonText="Add" />
            <LinkContainerButton buttonText="Cancel" onClick={this.props.cancelAddingFile} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SaveCreationAddFileModal.propTypes = {
  stateShowModal: React.PropTypes.boolean,
  cancelAddingFile: React.PropTypes.func,
};
