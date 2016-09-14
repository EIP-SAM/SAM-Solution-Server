//
// Modal to create an instant save in save history page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/RestoreHistory/Table/ModalInstantRestore/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class RestoreHistoryInstantRestoreModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleLaunchClick() {
    this.props.createRestoresRequest(this.props.userId, this.props.selectedFiles, this.props.save.value, false);
    this.props.hideInstantRestoreModal();
  }

  handleCancelClick() {
    this.props.resetStateForm();
    this.props.hideInstantRestoreModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.handleCancelClick}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="floppy-open" className={styles.icon} />Instant restore</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to launch restore.</p>
          <p className={styles.bold}>Are you sure that you want to launch it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonType="info" buttonText="Launch" onClick={this.handleLaunchClick} />
            <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.handleCancelClick} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

RestoreHistoryInstantRestoreModal.propTypes = {
  userId: React.PropTypes.number,
  selectedFiles: React.PropTypes.array,
  save: React.PropTypes.object,
  showModal: React.PropTypes.bool,
  hideInstantRestoreModal: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  resetStateForm: React.PropTypes.func,
};
