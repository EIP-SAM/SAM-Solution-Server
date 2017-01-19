//
// Component Login
//

import React from 'react';
import { PageHeader, Image, Col, Alert } from 'react-bootstrap';
import LoginForm from 'containers/Login/Form';
import Logo from 'components/App/logo_sam_solution.png';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Login extends React.Component {
  componentWillUnmount() {
    this.props.resetStateForm();
  }

  render() {
    return (
      <Col lg={6} className={styles.colLogin} id="colLogin">
        <PageHeader className={styles.titre}>Login</PageHeader>
        {this.props.wrongCredentials &&
        <Alert bsStyle="danger">
          <h4>Error !</h4>
          <p>Wrong username or password...</p>
        </Alert>}
        <Image src={Logo} responsive className={styles.logo} />
        <LoginForm />
      </Col>
    );
  }
}

Login.propTypes = {
  resetStateForm: React.PropTypes.func,
  wrongCredentials: React.PropTypes.bool,
};
