//
// Filters page user
//

import React from 'react';
import { Form } from 'react-bootstrap';
import TypeUserFormGroup from 'containers/Users/Filters/TypeUser';
import GroupsFormGroup from 'containers/Users/Filters/Groups';

/* eslint-disable react/prefer-stateless-function */
export class UserFilters extends React.Component {
  render() {
    return (
      <Form horizontal>
        <TypeUserFormGroup />
        <GroupsFormGroup />
      </Form>
    );
  }
}
