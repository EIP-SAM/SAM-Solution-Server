import React from 'react';
import ForgottenPasswordForm from 'containers/ForgottenPassword/Form';
import styles from './styles.css';
import { PageHeader } from 'react-bootstrap';


/* eslint-disable react/prefer-stateless-function */
export class ForgottenPassword extends React.Component {
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
