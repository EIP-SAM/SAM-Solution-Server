//
// Component notifications form
//

import React from 'react';
import Title from 'containers/Notifications/Form/Title';
import Description from 'containers/Notifications/Form/Description';
import Persistence from 'containers/Notifications/Form/Persistence';
import Groups from 'containers/Notifications/Form/Groups';
import Buttons from 'containers/Notifications/Form/Buttons';
import LinkContainerButton from 'components/Button';
import { browserHistory } from 'react-router';

function selectByUsers() {
  browserHistory.push('/notifications');
}

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsGroupsForm extends React.Component {
  render() {
    return (
      <form>
        <Title />
        <Description />
        <Persistence />
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Select by users" onClick={selectByUsers} />
        <Groups />
        <Buttons />
      </form>
    );
  }
}
