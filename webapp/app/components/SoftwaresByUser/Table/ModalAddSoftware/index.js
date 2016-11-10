//
// Modal to add a software in softwares by user page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SoftwaresByUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SoftwaresByUserAddSoftwareModal extends React.Component {
  handleAddClick() {
    this.props.hideAddSoftwareModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideAddSoftwareModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="plus" className={styles.iconAdd} />Install software</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to install the software <span className={styles.bold}>{this.props.softName}</span>.</p>
          <p className={styles.bold}>Are you sure that you want to install it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonBsStyle="info" buttonText="Install" onClick={() => this.handleAddClick()} />
            <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={this.props.hideAddSoftwareModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SoftwaresByUserAddSoftwareModal.propTypes = {
  softName: React.PropTypes.string,
  showModal: React.PropTypes.bool,
  hideAddSoftwareModal: React.PropTypes.func,
};
