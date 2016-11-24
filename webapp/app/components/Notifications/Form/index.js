//
// Component create group form
//

import React from 'react';
import Title from 'containers/Notifications/Form/Title';
import Description from 'containers/Notifications/Form/Description';
import Persistance from 'containers/Notifications/Form/Persistance';
import Users from 'containers/Notifications/Form/Users';
import Buttons from 'containers/Notifications/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class NotificationsForm extends React.Component {
  render() {
    return (
      <form>
        <Title />
        <Description />
        <Persistance />
        <Users />
        <Buttons />
      </form>
    );
  }
}
