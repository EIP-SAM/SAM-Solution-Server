//
// Modal to add fill on select in form for page SaveCreation
//

import React from 'react';
import { Modal, FormControl, ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SaveCreation/Form/FilesFormGroup/Modal/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationAddFileModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileClick = this.handleFileClick.bind(this);
  }

  handleFileChange(e) {
    this.props.inputFileChange(e.target.value);
  }

  handleFileClick() {
    this.props.addFile(this.props.state.inputFileChange);
    this.props.cancelAddingFile();
    this.props.inputFileChange('');
  }

  render() {
    return (
      <Modal show={this.props.state.showModal} onHide={this.props.cancelAddingFile}>
        <Modal.Header closeButton>
          <Modal.Title>Add a file to save</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            className={styles.input}
            type="text"
            placeholder="Ex: C:/user/username/Desktop/file.txt"
            value={this.props.state.inputFileChange}
            onChange={this.handleFileChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonType="info" buttonText="Add" onClick={this.handleFileClick} />
            <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.props.cancelAddingFile} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SaveCreationAddFileModal.propTypes = {
  state: React.PropTypes.object,
  addFile: React.PropTypes.func,
  inputFileChange: React.PropTypes.func,
  cancelAddingFile: React.PropTypes.func,
};
