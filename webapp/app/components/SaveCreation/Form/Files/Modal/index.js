//
// Modal to add fill on select in form for page SaveCreation
//

import React from 'react';
import { Modal, FormControl, ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationAddFileModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(e) {
    this.props.inputFileChange(e.target.value);
  }

  handleFileClick() {
    this.props.addFile(this.props.inputFileChangeState);
    this.props.cancelAddingFile();
    this.props.inputFileChange('');
  }

  handleCancelClick() {
    this.props.cancelAddingFile();
    this.props.inputFileChange('');
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={() => this.handleCancelClick()}>
        <Modal.Header closeButton>
          <Modal.Title>Add a file to save</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            className={styles.input}
            type="text"
            placeholder="Ex: C:/user/username/Desktop/file.txt"
            value={this.props.inputFileChangeState}
            onChange={this.handleFileChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonBsStyle="info" buttonText="Add" onClick={() => this.handleFileClick()} />
            <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={() => this.handleCancelClick()} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SaveCreationAddFileModal.propTypes = {
  inputFileChangeState: React.PropTypes.string,
  showModal: React.PropTypes.bool,
  addFile: React.PropTypes.func,
  inputFileChange: React.PropTypes.func,
  cancelAddingFile: React.PropTypes.func,
};
