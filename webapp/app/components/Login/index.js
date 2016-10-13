//
// Component Login
//

import React from 'react';
import { PageHeader, Image } from 'react-bootstrap';
import LoginForm from 'containers/Login/Form';
import Logo from 'components/App/logo_sam_solution.png';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  componentWillUnmount() {
    this.props.resetStateForm();
  }

  render() {
    return (
      <div className={styles.login}>
        <PageHeader className={styles.titre}>Login</PageHeader>
        <Image src={Logo} responsive className={styles.logo} />
        <LoginForm />
      </div>
    );
  }
}

Login.propTypes = {
  resetStateForm: React.PropTypes.func,
};
