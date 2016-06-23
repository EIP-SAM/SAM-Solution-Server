//
// UsersFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationUsersFormGroup extends React.Component {
  render() {
    const users = [{ isActive: true, value: '0', text: 'User1' },
                   { isActive: true, value: '1', text: 'User2' },
                   { isActive: true, value: '2', text: 'User3' },
                   { isActive: true, value: '3', text: 'User4' },
                   { isActive: true, value: '4', text: 'User5' }];

    const usersOptions = users.map((item, index) => (
      <Option object={item} key={`item-${index}`} />
    ));

    return (
      <FormGroup controlId="users" className={styles.form}>
        <ControlLabel>Users</ControlLabel>
        <FormControl componentClass="select" multiple>
          {usersOptions}
        </FormControl>
      </FormGroup>
    );
  }
}
