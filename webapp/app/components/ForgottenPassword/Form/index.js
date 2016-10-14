import React from 'react';
import Email from 'containers/ForgottenPassword/Form/Email';
import ForgottenPasswordButtons from 'containers/ForgottenPassword/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class ForgottenPasswordForm extends React.Component {

  render() {
    return (
      <form>
        <Email />
        <ForgottenPasswordButtons />
      </form>
    );
  }
}
