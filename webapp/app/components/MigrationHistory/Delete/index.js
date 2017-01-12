//
// Migration History Delete component
//

import React from 'react';
import {
  Modal,
  Button,
} from 'react-bootstrap';
import MigrationInfos from './MigrationInfos';

/* eslint-disable react/prefer-stateless-function */
export default class Delete extends React.Component {
  onHide() {
    this.props.closeDeleteMigrationModal();
  }

  deleteMigration() {
    this.props.deleteMigration(this.props.migration.id);
    this.props.closeDeleteMigrationModal();
  }

  render() {
    return (
      <Modal show={this.props.isPoppedUp} onHide={() => this.onHide()}>
        <Modal.Header closeButton>
          <Modal.Title>Do you really want to delete this migration ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MigrationInfos migration={this.props.migration} />
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="danger" onClick={() => this.deleteMigration()}>Delete</Button>
          <Button onClick={() => this.props.closeDeleteMigrationModal()}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

Delete.propTypes = {
  isPoppedUp: React.PropTypes.bool,
  migration: React.PropTypes.shape({
    id: React.PropTypes.id,
  }),
  closeDeleteMigrationModal: React.PropTypes.func,
  deleteMigration: React.PropTypes.func,
};
