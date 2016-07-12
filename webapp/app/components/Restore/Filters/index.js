//
// Filters page save
//

import React from 'react';
import { Form, ControlLabel } from 'react-bootstrap';
import { TypeUserFormGroup } from 'components/Restore/Filters/TypeUserFormGroup';
import { GroupsFormGroup } from 'components/Restore/Filters/GroupsFormGroup';
import styles from 'components/Restore/Filters/styles.css';

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
