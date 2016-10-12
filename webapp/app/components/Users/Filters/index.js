//
// Filters page user
//

import React from 'react';
import { Form } from 'react-bootstrap';
import TypeUser from 'containers/Users/Filters/TypeUser';
import Groups from 'containers/Users/Filters/Groups';

/* eslint-disable react/prefer-stateless-function */
export class UserFilters extends React.Component {
  render() {
    return (
      <Form horizontal>
        <TypeUser />
        <Groups />
      </Form>
    );
  }
}
