import React from 'react';
import ForgottenPasswordForm from 'containers/ForgottenPassword/Form';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class ForgottenPassword extends React.Component {
  render() {
    return (
      <div className={styles.forgotten}>
        <ForgottenPasswordForm />
      </div>
    );
  }
}
