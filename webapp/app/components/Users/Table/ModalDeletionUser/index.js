//
// Modal to delete a scheduled save in save history page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/Users/Table/ModalDeletionUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class UserDeletionModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.deleteUser(this.props.state.users.users[0]);
    this.props.hideInstantDeleteModal();
  }

  render() {
    return (
      <Modal show={this.props.state.showModal} onHide={this.props.hideInstantDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="warning-sign" className={styles.icon} />Delete scheduled save</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to delete {this.props.state.users.users[0].name}.</p>
          <p className={styles.bold}>Are you sure that you want to delete it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonType="danger" buttonText="Delete" onClick={this.handleDeleteClick} />
            <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.props.hideInstantDeleteModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

UserDeletionModal.propTypes = {
  state: React.PropTypes.object.isRequired,
  deleteUser: React.PropTypes.func,
  hideInstantDeleteModal: React.PropTypes.func.isRequired,
};
