//
// Component Login
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import LoginForm from 'containers/Login/Form';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  componentWillUnmount() {
    this.props.resetStateForm();
  }

  render() {
    return (
      <div>
        <PageHeader>Login</PageHeader>
        <Image src={Logo} responsive className={styles.logo} />
        <LoginForm />
      </div>
    );
  }
}

EditUser.propTypes = {
  resetStateForm: React.PropTypes.func,
};
