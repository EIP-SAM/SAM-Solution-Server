//
// Modal to delete a software in softwares by user page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SoftwaresByUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class SoftwaresByUserDeleteAllSoftwaresModal extends React.Component {
  handleDeleteAllClick() {
    this.props.hideDeleteAllSoftwaresModal();
    this.props.installSoftwares(this.props.username, this.props.selectedSoftwares);
    this.props.resetStateTable();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideDeleteAllSoftwaresModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="warning-sign" className={styles.iconDelete} />Delete softwares</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to delete the following softwares:</p>
          <ul className={styles.listSoftNameModal}>
            {this.props.selectedSoftwares.map((soft, index) =>
              <li key={`action-${index}`}>{soft.packageName}</li>
            )}
          </ul>
          <p className={styles.bold}>Are you sure that you want to delete them?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonBsStyle="danger" buttonText="Delete" onClick={() => this.handleDeleteAllClick()} />
            <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={this.props.hideDeleteAllSoftwaresModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SoftwaresByUserDeleteAllSoftwaresModal.propTypes = {
  username: React.PropTypes.string,
  selectedSoftwares: React.PropTypes.array,
  showModal: React.PropTypes.bool,
  hideDeleteAllSoftwaresModal: React.PropTypes.func,
  installSoftwares: React.PropTypes.func,
  resetStateTable: React.PropTypes.func,
};
