//
// Component form in create user page
//

import React from 'react';
import Username from 'containers/CreateUser/Form/Username';
import Email from 'containers/CreateUser/Form/Email';
import Password from 'containers/CreateUser/Form/Password';
import PasswordConfirmation from 'containers/CreateUser/Form/PasswordConfirmation';
import Buttons from 'containers/CreateUser/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class CreateUserForm extends React.Component {

  render() {
    return (
      <form>
        <Username />
        <Email />
        <Password />
        <PasswordConfirmation />
        <Buttons />
      </form>
    );
  }
}

CreateUserForm.propTypes = {
};
