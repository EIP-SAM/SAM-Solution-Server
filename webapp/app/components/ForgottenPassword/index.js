//
// Component ForgottenPassword
//

import React from 'react';
import ForgottenPasswordForm from 'containers/ForgottenPassword/Form';
import { PageHeader } from 'react-bootstrap';
import styles from './styles.css';


/* eslint-disable react/prefer-stateless-function */
export default class ForgottenPassword extends React.Component {
  render() {
    return (
      <div className={styles.forgotten}>
        <PageHeader>Forgotten password</PageHeader>
        <p>You will receive an email with your new password.</p>
        <ForgottenPasswordForm />
      </div>
    );
  }
}
