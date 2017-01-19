//
// Component notifications form
//

import React from 'react';
import Title from 'containers/Notifications/Form/Title';
import Description from 'containers/Notifications/Form/Description';
import Persistence from 'containers/Notifications/Form/Persistence';
import Users from 'containers/Notifications/Form/Users';
import Buttons from 'containers/Notifications/Form/Buttons';
import LinkContainerButton from 'components/Button';
import { browserHistory } from 'react-router';

function selectByGroups() {
  browserHistory.push('/notifications/groups');
}

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsForm extends React.Component {
  render() {
    return (
      <form>
        <Title />
        <Description />
        <Persistence />
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Select by groups" onClick={selectByGroups} />
        <Users />
        <Buttons />
      </form>
    );
  }
}
