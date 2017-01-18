//
// Component Notifications
//

import React from 'react';
import { PageHeader, Alert } from 'react-bootstrap';
import NotificationsGroupsForm from 'containers/NotificationsGroups/Form';

/* eslint-disable react/prefer-stateless-function */
export class NotificationsGroups extends React.Component {
  componentWillUnmount() {
    this.props.resetAlert();
  }

  render() {
    let alert = '';
    if (this.props.displayAlert) {
      alert = (
        <Alert bsStyle={this.props.typeAlert}>
          Your notification has been sent.
        </Alert>
      );
    }
    return (
      <div>
        {alert}
        <PageHeader>Notifications</PageHeader>
        <NotificationsGroupsForm />
      </div>
    );
  }
}

NotificationsGroups.propTypes = {
  alertMsg: React.PropTypes.string,
  typeAlert: React.PropTypes.string,
  displayAlert: React.PropTypes.bool,
  resetAlert: React.PropTypes.func,
};
