//
// Migration History page Create Footer component
//

import React from 'react';
import {
  Button,
} from 'react-bootstrap';
import moment from 'moment';

/* eslint-disable react/prefer-stateless-function */
export default class Footer extends React.Component {
  onCreateClick() {
    const timeSplit = this.props.time.split(':');

    if (!this.props.migrationEdited) {
      this.props.createMigration({
        userId: this.props.userId,
        imageId: this.props.imageId,
        status: 'planned',
        migrationDate: moment(this.props.date).hours(timeSplit[0]).minutes(timeSplit[1]),
      });
    } else {
      this.props.editMigration({
        migrationId: this.props.migrationEdited.id,
        userId: this.props.userId,
        imageId: this.props.imageId,
        status: this.props.migrationEdited.status,
        migrationDate: moment(this.props.date).hours(timeSplit[0]).minutes(timeSplit[1]),
      });
    }

    this.closeCreatePopup();
  }

  onMigrateClick() {
    if (!this.props.migrationEdited) {
      this.props.createMigration({
        userId: this.props.userId,
        imageId: this.props.imageId,
        status: 'in progress',
        migrationDate: moment(),
      });
    } else {
      this.props.editMigration({
        migrationId: this.props.migrationEdited.id,
        userId: this.props.userId,
        imageId: this.props.imageId,
        status: 'in progress',
        migrationDate: moment(),
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
          bsStyle="warning"
          onClick={() => this.onMigrateClick()}
          disabled={this.isDisabled()}
        >
          Migrate now !
        </Button>
        <Button
          bsStyle="info"
          onClick={() => this.onCreateClick()}
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
  date: React.PropTypes.string,
  time: React.PropTypes.string,
  migrationEdited: React.PropTypes.object,
  createMigration: React.PropTypes.func,
  editMigration: React.PropTypes.func,
  showCreateMigrationPopup: React.PropTypes.func,
  resetForm: React.PropTypes.func,
};
