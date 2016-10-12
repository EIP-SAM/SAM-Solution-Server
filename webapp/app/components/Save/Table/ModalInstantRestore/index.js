//
// Modal to launch an instant restore in save page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SaveHistory/Table/ModalInstantSave/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveInstantRestoreModal extends React.Component {

  handleLaunchClick() {
    this.props.createRestoreRequest(this.props.userId, this.props.files, this.props.saveId);
    this.props.hideInstantRestoreModal();
  }

  handleCancelClick() {
    this.props.resetRestoreState();
    this.props.hideInstantRestoreModal();
  }

  render() {
    return (
      <Modal show={this.props.showInstantRestoreModal} onHide={this.handleCancelClick}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="save" className={styles.icon} />Instant Restore</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to restore all the following files:</p>
          <p className={styles.bold}>Are you sure that you want to restore them?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonBsStyle="info" buttonText="Launch" onClick={() => this.handleLaunchClick()} />
            <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={() => this.handleCancelClick()} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SaveInstantRestoreModal.propTypes = {
  showInstantRestoreModal: React.PropTypes.bool,
  userId: React.PropTypes.number,
  saveId: React.PropTypes.number,
  files: React.PropTypes.string,
  hideInstantRestoreModal: React.PropTypes.func,
  createRestoreRequest: React.PropTypes.func,
  resetRestoreState: React.PropTypes.func,
};
