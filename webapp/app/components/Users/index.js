//
// Component Users
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import styles from './styles.css';

export class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getUsersRequest();
  }

  render() {
    return (
      <div container className={styles.users}>
        <PageHeader>Users</PageHeader>
      </div>
    );
  }
}

Users.propTypes = {
  state: React.PropTypes.object,
  getUsersRequest: React.PropTypes.func,
};
