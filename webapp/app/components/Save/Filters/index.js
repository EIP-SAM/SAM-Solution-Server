//
// Filters page save
//

import React from 'react';
import { Form } from 'react-bootstrap';
import TypeUser from 'containers/Save/Filters/TypeUser';
import Groups from 'containers/Save/Filters/Groups';

/* eslint-disable react/prefer-stateless-function */
export class SaveFilters extends React.Component {
  render() {
    return (
      <Form horizontal>
        <TypeUser />
        <Groups />
      </Form>
    );
  }
}
