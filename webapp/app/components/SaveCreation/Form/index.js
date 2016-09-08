//
// Form page SaveCreation
//

import React from 'react';
import Users from 'containers/SaveCreation/Form/Users';
import Date from 'containers/SaveCreation/Form/Date';
import Time from 'containers/SaveCreation/Form/Time';
import Frequency from 'containers/SaveCreation/Form/Frequency';
import Files from 'containers/SaveCreation/Form/Files';
import Buttons from 'containers/SaveCreation/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationForm extends React.Component {
  render() {
    return (
      <form>
        <Users />
        <Date />
        <Time />
        <Frequency />
        <Files />
        <Buttons />
      </form>
    );
  }
}
