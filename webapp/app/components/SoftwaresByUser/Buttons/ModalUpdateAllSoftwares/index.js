//
// Modal to update a software in softwares by user page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SoftwaresByUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SoftwaresByUserUpdateAllSoftwaresModal extends React.Component {
  handleUpdateAllClick() {
    this.props.hideUpdateAllSoftwaresModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideUpdateAllSoftwaresModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="open" className={styles.iconUpdate} />Update softwares</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to update the following softwares:</p>
          <ul className={styles.listSoftNameModal}>
            {this.props.selectedSoftwares.map((soft, index) =>
              <li key={`action-${index}`}>{soft.name}</li>
            )}
          </ul>
          <p className={styles.bold}>Are you sure that you want to update them?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonBsStyle="warning" buttonText="Update" onClick={() => this.handleUpdateAllClick()} />
            <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={this.props.hideUpdateAllSoftwaresModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SoftwaresByUserUpdateAllSoftwaresModal.propTypes = {
  selectedSoftwares: React.PropTypes.array,
  showModal: React.PropTypes.bool,
  hideUpdateAllSoftwaresModal: React.PropTypes.func,
};