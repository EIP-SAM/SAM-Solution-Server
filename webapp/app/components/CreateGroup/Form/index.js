//
// Component create group form
//

import React from 'react';
import GroupName from 'containers/CreateGroup/Form/GroupName';
import GroupRights from 'containers/CreateGroup/Form/GroupRights';
import Users from 'containers/CreateGroup/Form/Users';
import Buttons from 'containers/CreateGroup/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export default class CreateGroupForm extends React.Component {
  render() {
    return (
      <form>
        <GroupName />
        <GroupRights />
        <Users />
        <Buttons />
      </form>
    );
  }
}
