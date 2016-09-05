//
// Form page SaveCreation
//

import React from 'react';
import Users from 'containers/Save/SaveCreation/Form/Users';
import Date from 'containers/Save/SaveCreation/Form/Date';
import Time from 'containers/Save/SaveCreation/Form/Time';
import Frequency from 'containers/Save/SaveCreation/Form/Frequency';
import Files from 'containers/Save/SaveCreation/Form/Files';
import Buttons from 'containers/Save/SaveCreation/Form/Buttons';

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
