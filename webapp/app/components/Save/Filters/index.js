//
// Filters page save
//

import React from 'react';
import { Form } from 'react-bootstrap';
import TypeUserFormGroup from 'containers/Save/Filters/TypeUser';
import GroupsFormGroup from 'containers/Save/Filters/Groups';

/* eslint-disable react/prefer-stateless-function */
export class SaveFilters extends React.Component {
  render() {
    return (
      <Form horizontal>
        <TypeUserFormGroup />
        <GroupsFormGroup />
      </Form>
    );
  }
}
