//
// Component edit group form
//

import React from 'react';
import GroupName from 'containers/EditGroup/Form/GroupName';
import GroupRights from 'containers/EditGroup/Form/GroupRights';
import Buttons from 'containers/EditGroup/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class EditGroupForm extends React.Component {
  componentWillMount() {
    const id = window.location.pathname.split('/')[2];
    this.props.getGroupRequest(id);
  }

  render() {
    return (
      <form>
        <GroupName />
        <GroupRights />
        <Buttons />
      </form>
    );
  }
}

EditGroupForm.propTypes = {
  getGroupRequest: React.PropTypes.func,
};
