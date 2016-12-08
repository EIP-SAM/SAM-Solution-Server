//
// Migration History Delete infos component
//

import React from 'react';
import {
  Modal,
  Button,
} from 'react-bootstrap';
import moment from 'moment';

/* eslint-disable react/prefer-stateless-function */
export default class MigrationInfos extends React.Component {
  getFormatedDate() {
    return moment(this.props.migration.migrationDate).format('YYYY MMMM Do HH:mm');
  }
  render() {
    const migration = this.props.migration;
    return (
      <p>
        <strong>Date:</strong>{this.getFormatedDate()}<br />
        <strong>Status:</strong>{migration.status}<br />
        <strong>User:</strong>{migration.user.name}<br />
        <strong>Image:</strong>{migration.image.name}<br />
        <strong>Comment:</strong>{migration.comment}<br />
      </p>
    );
  }
}

MigrationInfos.propTypes = {
  migration: React.PropTypes.object,
};
