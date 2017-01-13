//
// Modal to delete a user in users page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class UserRebootModal extends React.Component {
  handleRebootClick() {
    this.props.rebootUser(this.props.username);
    this.props.hideInstantRebootModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideInstantRebootModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="refresh" className={styles.icon} />Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to reboot the user {this.props.username}.</p>
          <p className={styles.bold}>Are you sure that you want to reboot it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonBsStyle="info" buttonText="Reboot" onClick={() => this.handleRebootClick()} />
            <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={this.props.hideInstantRebootModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

UserRebootModal.propTypes = {
  username: React.PropTypes.string,
  showModal: React.PropTypes.bool,
  rebootUser: React.PropTypes.func,
  hideInstantRebootModal: React.PropTypes.func,
};
