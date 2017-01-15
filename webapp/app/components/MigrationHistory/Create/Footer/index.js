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
    const newDate = moment(this.props.date).hours(timeSplit[0]).minutes(timeSplit[1]);

    if (moment(newDate).isBefore(moment())) {
      this.props.showPasteDateWarning();
    } else if (!this.props.migrationEdited) {
      this.props.createMigration({
        userId: this.props.userId,
        imageId: this.props.imageId,
        status: 'planned',
        migrationDate: newDate,
      }, false);
      this.closeCreatePopup();
    } else {
      this.props.editMigration({
        migrationId: this.props.migrationEdited.id,
        userId: this.props.userId,
        imageId: this.props.imageId,
        status: this.props.migrationEdited.status,
        migrationDate: newDate,
      }, false);
      this.closeCreatePopup();
    }
  }

  onMigrateClick() {
    if (!this.props.migrationEdited) {
      this.props.createMigration({
        userId: this.props.userId,
        imageId: this.props.imageId,
        status: 'in progress',
        migrationDate: moment(),
      }, true);
    } else {
      this.props.editMigration({
        migrationId: this.props.migrationEdited.id,
        userId: this.props.userId,
        imageId: this.props.imageId,
        status: 'in progress',
        migrationDate: moment(),
      }, true);
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

  isMigrateDisabled() {
    return (!this.props.userId || !this.props.imageId);
  }

  isCreateDisabled() {
    return (!this.props.userId || !this.props.imageId || !this.props.date || this.props.time === '');
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="warning"
          onClick={() => this.onMigrateClick()}
          disabled={this.isMigrateDisabled()}
        >
          Migrate now !
        </Button>
        <Button
          bsStyle="info"
          onClick={() => this.onCreateClick()}
          disabled={this.isCreateDisabled()}
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
  migrationEdited: React.PropTypes.shape({
    id: React.PropTypes.number,
    status: React.PropTypes.string,
  }),
  createMigration: React.PropTypes.func,
  editMigration: React.PropTypes.func,
  showCreateMigrationPopup: React.PropTypes.func,
  resetForm: React.PropTypes.func,
  showPasteDateWarning: React.PropTypes.func,
};
