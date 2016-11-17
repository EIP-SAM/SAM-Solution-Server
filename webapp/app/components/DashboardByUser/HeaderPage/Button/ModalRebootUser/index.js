//
// Modal reboot button header page in dashboard by user page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class DashboardByUserHeaderPageButtonRebootModal extends React.Component {
  handleRebootClick() {
    const username = window.location.pathname.split('/')[2];

    this.props.rebootUser(username);
    this.props.hideInstantRebootModal();
  }

  render() {
    const username = window.location.pathname.split('/')[2];

    return (
      <Modal show={this.props.showModal} onHide={this.props.hideInstantRebootModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="refresh" className={styles.icon} />Reboot user</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to reboot the user <span className={styles.bold}>{username}</span>.</p>
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

DashboardByUserHeaderPageButtonRebootModal.propTypes = {
  showModal: React.PropTypes.bool,
  rebootUser: React.PropTypes.func,
  hideInstantRebootModal: React.PropTypes.func,
};
