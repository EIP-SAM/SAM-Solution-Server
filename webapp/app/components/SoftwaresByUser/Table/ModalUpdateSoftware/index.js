//
// Modal to update a software in softwares by user page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SoftwaresByUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SoftwaresByUserUpdateSoftwareModal extends React.Component {
  handleUpdateClick() {
    this.props.hideUpdateSoftwareModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideUpdateSoftwareModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="open" className={styles.iconUpdate} />Update software</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to update the software <span className={styles.bold}>{this.props.softName}</span>.</p>
          <p className={styles.bold}>Are you sure that you want to update it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonBsStyle="warning" buttonText="Update" onClick={() => this.handleUpdateClick()} />
            <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={this.props.hideUpdateSoftwareModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SoftwaresByUserUpdateSoftwareModal.propTypes = {
  softName: React.PropTypes.string,
  showModal: React.PropTypes.bool,
  hideUpdateSoftwareModal: React.PropTypes.func,
};
