//
// Component notifications form
//

import React from 'react';
import Title from 'containers/Notifications/Form/Title';
import Description from 'containers/Notifications/Form/Description';
import Persistence from 'containers/Notifications/Form/Persistence';
import Groups from 'containers/Notifications/Form/Groups';
import Buttons from 'containers/Notifications/Form/Buttons';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

function selectByUsers() {
  browserHistory.push('/notifications');
  window.location.reload();
}

/* eslint-disable react/prefer-stateless-function */
export class NotificationsGroupsForm extends React.Component {
  render() {
    return (
      <form>
        <Title />
        <Description />
        <Persistence />
        <Button onClick={selectByUsers}>Select by users</Button>
        <Groups />
        <Buttons />
      </form>
    );
  }
}
