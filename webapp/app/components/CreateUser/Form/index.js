//
// Component form in create user page
//

import React from 'react';
import Username from 'containers/CreateUser/Form/Username';
import Email from 'containers/CreateUser/Form/Email';
import Password from 'containers/CreateUser/Form/Password';
import PasswordConfirmation from 'containers/CreateUser/Form/PasswordConfirmation';
import Groups from 'containers/CreateUser/Form/Groups';
import Buttons from 'containers/CreateUser/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export default class CreateUserForm extends React.Component {

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
