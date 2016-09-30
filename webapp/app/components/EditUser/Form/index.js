//
// Component form page edit user
//

import React from 'react';
import Username from 'containers/EditUser/Form/Username';
import Email from 'containers/EditUser/Form/Email';
import Password from 'containers/EditUser/Form/Password';
import PasswordConfirmation from 'containers/EditUser/Form/PasswordConfirmation';
import Groups from 'containers/EditUser/Form/Groups';
import Buttons from 'containers/EditUser/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class EditUserForm extends React.Component {
  componentWillMount() {
    const id = window.location.pathname.split('/')[2];
    this.props.getUserRequest(id);
    this.props.getGroupsRequest();
  }

  render() {
    return (
      <form>
        <Username />
        <Email />
        <Password />
        <PasswordConfirmation />
        <Groups />
        <Buttons />
      </form>
    );
  }
}

EditUserForm.propTypes = {
  getUserRequest: React.PropTypes.func,
  getGroupsRequest: React.PropTypes.func,
};
