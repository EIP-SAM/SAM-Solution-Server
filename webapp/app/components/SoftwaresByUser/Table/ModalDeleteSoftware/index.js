//
// Modal to delete a software in softwares by user page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SoftwaresByUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SoftwaresByUserDeleteSoftwareModal extends React.Component {
  handleDeleteClick() {
    this.props.hideDeleteSoftwareModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideDeleteSoftwareModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="warning-sign" className={styles.iconDelete} />Delete software</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to delete the software <span className={styles.bold}>{this.props.softName}</span>.</p>
          <p className={styles.bold}>Are you sure that you want to delete it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonBsStyle="danger" buttonText="Delete" onClick={() => this.handleDeleteClick()} />
            <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={this.props.hideDeleteSoftwareModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SoftwaresByUserDeleteSoftwareModal.propTypes = {
  softName: React.PropTypes.string,
  showModal: React.PropTypes.bool,
  hideDeleteSoftwareModal: React.PropTypes.func,
};
