//
// Component Users
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import UserTable from 'containers/Users/Table';
import styles from './styles.css';

export class Users extends React.Component {
  componentWillMount() {
    this.props.getUsersRequest();
  }

  render() {
    return (
      <div container className={styles.users}>
        <PageHeader>Users</PageHeader>
        <UserTable />
      </div>
    );
  }
}

Users.propTypes = {
  getUsersRequest: React.PropTypes.func,
};
