//
// Component form page forgotten password
//

import React from 'react';
import Email from 'containers/ForgottenPassword/Form/Email';
import Buttons from 'containers/ForgottenPassword/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export default class ForgottenPasswordForm extends React.Component {

  render() {
    return (
      <form>
        <Email />
        <Buttons />
      </form>
    );
  }
}
