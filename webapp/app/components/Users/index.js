//
// Component Users
//

import React from 'react';
import { PageHeader, Alert } from 'react-bootstrap';
import UserTable from 'containers/Users/Table';
import UserButton from 'containers/Users/Button';
import styles from './styles.css';

export class Users extends React.Component {
  componentWillMount() {
    this.props.getUsersRequest();
  }

  render() {
    let alert = '';
    if (this.props.displayAlert) {
      alert = (
        <Alert bsStyle={this.props.typeAlert}>
          <strong>{`${this.props.username}`}</strong> {`${this.props.alertMsg}`}
        </Alert>
      );
    }

    return (
      <div container className={styles.users}>
        <PageHeader>Users</PageHeader>
        {alert}
        <UserButton />
        <UserTable />
      </div>
    );
  }
}

Users.propTypes = {
  username: React.PropTypes.string,
  alertMsg: React.PropTypes.string,
  typeAlert: React.PropTypes.string,
  displayAlert: React.PropTypes.bool,
  getUsersRequest: React.PropTypes.func,
};
