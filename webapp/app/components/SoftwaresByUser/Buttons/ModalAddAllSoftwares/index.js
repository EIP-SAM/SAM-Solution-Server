//
// Modal to add several softwares in softwares by user page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SoftwaresByUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class SoftwaresByUserAddAllSoftwaresModal extends React.Component {
  handleAddAllClick() {
    this.props.hideAddAllSoftwaresModal();
    this.props.installSoftwares(this.props.username, this.props.selectedSoftwares);
    this.props.resetStateTable();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideAddAllSoftwaresModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="plus" className={styles.iconAdd} />Install softwares</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to install the following softwares:</p>
          <ul className={styles.listSoftNameModal}>
            {this.props.selectedSoftwares.map((soft, index) =>
              <li key={`action-${index}`}>{soft.packageName}</li>
            )}
          </ul>
          <p className={styles.bold}>Are you sure that you want to install them?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonBsStyle="info" buttonText="Install" onClick={() => this.handleAddAllClick()} />
            <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={this.props.hideAddAllSoftwaresModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SoftwaresByUserAddAllSoftwaresModal.propTypes = {
  username: React.PropTypes.string,
  selectedSoftwares: React.PropTypes.array,
  showModal: React.PropTypes.bool,
  hideAddAllSoftwaresModal: React.PropTypes.func,
  installSoftwares: React.PropTypes.func,
  resetStateTable: React.PropTypes.func,
};
