//
// Modal to launch an instant restore in save history page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SaveHistory/Table/ModalInstantSave/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveHistoryInstantRestoreModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleLaunchClick() {
    this.props.createRestoreRequest(this.props.userId, this.props.files);
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
            <LinkContainerButton buttonType="info" buttonText="Launch" onClick={this.handleLaunchClick} />
            <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.handleCancelClick} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SaveHistoryInstantRestoreModal.propTypes = {
  showInstantRestoreModal: React.PropTypes.bool,
  userId: React.PropTypes.number,
  files: React.PropTypes.string,
  hideInstantRestoreModal: React.PropTypes.func,
  createRestoreRequest: React.PropTypes.func,
  resetRestoreState: React.PropTypes.func,
};
