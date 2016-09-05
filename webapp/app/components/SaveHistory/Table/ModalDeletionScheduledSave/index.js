//
// Modal to delete a scheduled save in save history page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SaveHistory/Table/ModalDeletionScheduledSave/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveHistoryDeletionScheduledSaveModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.cancelSave(this.props.saveId, this.props.saveScheduledId, this.props.username);
    this.props.hideDeletionScheduledSaveModal();
  }

  render() {
    return (
      <Modal show={this.props.showDeletionModal} onHide={this.props.hideDeletionScheduledSaveModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="warning-sign" className={styles.icon} />Delete scheduled save</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to delete a scheduled save.</p>
          <p className={styles.bold}>Are you sure that you want to delete it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonType="danger" buttonText="Delete" onClick={this.handleDeleteClick} />
            <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.props.hideDeletionScheduledSaveModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SaveHistoryDeletionScheduledSaveModal.propTypes = {
  showDeletionModal: React.PropTypes.bool,
  saveId: React.PropTypes.string,
  saveScheduledId: React.PropTypes.string,
  username: React.PropTypes.string,
  hideDeletionScheduledSaveModal: React.PropTypes.func,
  cancelSave: React.PropTypes.func.isRequired,
};
