//
// Component CreateUser
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import CreateUserForm from 'containers/CreateUser/Form';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateUser extends React.Component {
  render() {
    return (
      <div container className={styles.createUser}>
        <PageHeader>Create user</PageHeader>
        <CreateUserForm />
      </div>
    );
  }
}
