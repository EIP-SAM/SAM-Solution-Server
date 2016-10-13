import React from 'react';
import { PageHeader } from 'react-bootstrap';
import Email from 'containers/ForgottenPassword/Form/Email';

/* eslint-disable react/prefer-stateless-function */
export class ForgottenPasswordForm extends React.Component {

  render() {
    return (
      <form>
        <PageHeader>Forgotten password</PageHeader>
        <p>You will receive an email with your new password.</p>
        <Email />
      </form>
    );
  }
}
