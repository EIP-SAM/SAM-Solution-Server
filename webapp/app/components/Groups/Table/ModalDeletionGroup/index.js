//
// Modal to delete a group in groups page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class GroupDeletionModal extends React.Component {
  handleDeleteClick() {
    this.props.deleteGroup(this.props.groupId, this.props.groupName);
    this.props.hideInstantDeleteModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideInstantDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="warning-sign" className={styles.icon} />Delete group</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to delete the group {this.props.groupName}.</p>
          <p className={styles.bold}>Are you sure that you want to delete it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonBsStyle="danger" buttonText="Delete" onClick={() => this.handleDeleteClick()} />
            <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={this.props.hideInstantDeleteModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

GroupDeletionModal.propTypes = {
  groupId: React.PropTypes.number,
  groupName: React.PropTypes.string,
  showModal: React.PropTypes.bool,
  hideInstantDeleteModal: React.PropTypes.func,
  deleteGroup: React.PropTypes.func,
};
