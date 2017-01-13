//
// Component Notifications
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import NotificationsGroupsForm from 'containers/NotificationsGroups/Form';

/* eslint-disable react/prefer-stateless-function */
export class NotificationsGroups extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Notifications</PageHeader>
        <NotificationsGroupsForm />
      </div>
    );
  }
}

NotificationsGroups.propTypes = {
};
