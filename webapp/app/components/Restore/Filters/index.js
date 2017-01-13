//
// Filters page restore
//

import React from 'react';
import { Form } from 'react-bootstrap';
import TypeUser from 'containers/Restore/Filters/TypeUser';
import Groups from 'containers/Restore/Filters/Groups';

/* eslint-disable react/prefer-stateless-function */
export default class RestoreFilters extends React.Component {
  render() {
    return (
      <Form horizontal>
        <TypeUser />
        <Groups />
      </Form>
    );
  }
}
