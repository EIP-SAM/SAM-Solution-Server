//
// Modal to delete a user in users page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class UserDeletionModal extends React.Component {
  handleDeleteClick() {
    this.props.deleteUser(this.props.userId);
    this.props.hideInstantDeleteModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideInstantDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="warning-sign" className={styles.icon} />Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to delete the user {this.props.username}.</p>
          <p className={styles.bold}>Are you sure that you want to delete it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonType="danger" buttonText="Delete" onClick={() => this.handleDeleteClick()} />
            <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.props.hideInstantDeleteModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

UserDeletionModal.propTypes = {
  username: React.PropTypes.string,
  userId: React.PropTypes.number,
  showModal: React.PropTypes.bool,
  deleteUser: React.PropTypes.func,
  hideInstantDeleteModal: React.PropTypes.func,
};
