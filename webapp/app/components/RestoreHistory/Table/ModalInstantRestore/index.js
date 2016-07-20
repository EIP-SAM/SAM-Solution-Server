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
    this.props.createRestoresRequest(this.props.stateRestore, false);
    this.props.hideInstantRestoreModal();
  }

  handleCancelClick() {
    this.props.resetStateCreationRestore();
    this.props.hideInstantRestoreModal();
  }

  render() {
    return (
      <Modal show={this.props.state.showModal} onHide={this.handleCancelClick}>
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
  stateRestore: React.PropTypes.object,
  state: React.PropTypes.object.isRequired,
  hideInstantRestoreModal: React.PropTypes.func.isRequired,
  createRestoresRequest: React.PropTypes.func,
  resetStateCreationRestore: React.PropTypes.func,
};
