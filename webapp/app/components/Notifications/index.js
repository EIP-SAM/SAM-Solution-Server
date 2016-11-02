//
// Component Notifications
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import NotificationsForm from 'containers/Notifications/Form';

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
