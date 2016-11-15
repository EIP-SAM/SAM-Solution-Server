//
// Filters page softwware
//

import React from 'react';
import { Form } from 'react-bootstrap';
import TypeUser from 'containers/Software/Filters/TypeUser';
import Groups from 'containers/Software/Filters/Groups';

/* eslint-disable react/prefer-stateless-function */
export class SoftwareFilters extends React.Component {
  render() {
    return (
      <Form horizontal>
        <TypeUser />
        <Groups />
      </Form>
    );
  }
}
