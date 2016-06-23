//
// Form page SaveCreation
//

import React from 'react';
import { Form } from 'react-bootstrap';
import { SaveCreationUsersFormGroup } from 'components/SaveCreation/Form/UsersFormGroup';
import { SaveCreationDateFormGroup } from 'components/SaveCreation/Form/DateFormGroup';
import { SaveCreationTimeFormGroup } from 'components/SaveCreation/Form/TimeFormGroup';
import { SaveCreationFrequencyFormGroup } from 'components/SaveCreation/Form/FrequencyFormGroup';
import { SaveCreationFilesFormGroup } from 'components/SaveCreation/Form/FilesFormGroup';
import { SaveCreationButtons } from 'components/SaveCreation/Form/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationForm extends React.Component {
  render() {
    return (
      <Form horizontal>
        <SaveCreationUsersFormGroup />
        <SaveCreationDateFormGroup />
        <SaveCreationTimeFormGroup />
        <SaveCreationFrequencyFormGroup />
        <SaveCreationFilesFormGroup />
        <SaveCreationButtons />
      </Form>
    );
  }
}
