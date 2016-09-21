//
// Filters page restore
//

import React from 'react';
import { Form } from 'react-bootstrap';
import TypeUserFormGroup from 'containers/Restore/Filters/TypeUser';
import GroupsFormGroup from 'containers/Restore/Filters/Groups';

/* eslint-disable react/prefer-stateless-function */
export class RestoreFilters extends React.Component {
  render() {
    return (
      <Form horizontal>
        <TypeUserFormGroup />
        <GroupsFormGroup />
      </Form>
    );
  }
}
