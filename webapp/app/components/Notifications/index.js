//
// Component Notifications
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import NotificationsForm from 'containers/Notifications/Form';

/* eslint-disable react/prefer-stateless-function */
export class Notifications extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Notifications</PageHeader>
        <NotificationsForm />
      </div>
    );
  }
}

Notifications.propTypes = {
};
