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

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsGroupsForm extends React.Component {
  render() {
    return (
      <form>
        <Title />
        <Description />
        <Persistence />
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Select by users" link="/notifications/" />
        <Groups />
        <Buttons />
      </form>
    );
  }
}
