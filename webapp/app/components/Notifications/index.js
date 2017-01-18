//
// Component Notifications
//

import React from 'react';
import { PageHeader, Alert } from 'react-bootstrap';
import NotificationsForm from 'containers/Notifications/Form';

/* eslint-disable react/prefer-stateless-function */
export default class Notifications extends React.Component {
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
        <NotificationsForm />
      </div>
    );
  }
}

Notifications.propTypes = {
  alertMsg: React.PropTypes.string,
  typeAlert: React.PropTypes.string,
  displayAlert: React.PropTypes.bool,
  resetAlert: React.PropTypes.func,
};
