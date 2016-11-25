//
// Migration History page Create Footer component
//

import React from 'react';
import {
  Button,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class Footer extends React.Component {
  onClick() {
    if (!this.props.migrationEdited) {
      this.props.createMigration({
        userId: this.props.userId,
        imageId: this.props.imageId,
        status: 'done',
        migrationDate: Date.now(),
      });
    } else {
      this.props.editMigration({
        migrationId: this.props.migrationEdited.id,
        userId: this.props.userId,
        imageId: this.props.imageId,
        status: this.props.migrationEdited.status,
        migrationDate: this.props.migrationEdited.migrationDate,
      });
    }
    this.closeCreatePopup();
  }

  getMainButtonText() {
    return (this.props.migrationEdited) ? 'Save Change' : 'Create';
  }

  closeCreatePopup() {
    this.props.showCreateMigrationPopup(false);
    this.props.resetForm();
  }

  isDisabled() {
    return (!this.props.userId || !this.props.imageId);
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="info"
          onClick={() => this.onClick()}
          disabled={this.isDisabled()}
        >
          {this.getMainButtonText()}
        </Button>
        <Button onClick={() => this.closeCreatePopup()}>
          Cancel
        </Button>
      </div>
    );
  }
}

Footer.propTypes = {
  userId: React.PropTypes.number,
  imageId: React.PropTypes.number,
  migrationEdited: React.PropTypes.object,
  createMigration: React.PropTypes.func,
  editMigration: React.PropTypes.func,
  showCreateMigrationPopup: React.PropTypes.func,
  resetForm: React.PropTypes.func,
};
