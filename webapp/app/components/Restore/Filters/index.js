//
// Filters page save
//

import React from 'react';
import { Form } from 'react-bootstrap';
import { TypeUserFormGroup } from 'components/Restore/Filters/TypeUserFormGroup';
import { GroupsFormGroup } from 'components/Restore/Filters/GroupsFormGroup';

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

RestoreFilters.propTypes = {
};
