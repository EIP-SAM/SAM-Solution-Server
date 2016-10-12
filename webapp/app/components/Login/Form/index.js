//
// Component form page login
//

import React from 'react';
import Username from 'containers/Login/Form/Username';
import Password from 'containers/Login/Form/Password';
import Buttons from 'containers/Login/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <Username />
        <Password />
        <Buttons />
      </form>
    );
  }
}

LoginForm.propTypes = {};
