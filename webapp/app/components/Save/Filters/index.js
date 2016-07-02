//
// Filters page save
//

import React from 'react';
import { Form, ControlLabel } from 'react-bootstrap';
import { TypeUserFormGroup } from 'components/Save/Filters/TypeUserFormGroup';
import { GroupsFormGroup } from 'components/Save/Filters/GroupsFormGroup';
import styles from 'components/Save/Filters/styles.css';

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

SaveFilters.propTypes = {
};
