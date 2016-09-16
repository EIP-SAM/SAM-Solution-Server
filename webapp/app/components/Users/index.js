//
// Component Users
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { UserTable } from 'components/Users/Table';
import { UserDeletionModal } from 'components/Users/Table/ModalDeletionUser';
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
        <UserTable
          state={this.props.state}
          rebootUser={this.props.rebootUser}
          showInstantDeleteModal={this.props.showInstantDeleteModal}
        />
        <UserDeletionModal
          state={this.props.state}
          hideInstantDeleteModal={this.props.hideInstantDeleteModal}
          deleteUser={this.props.deleteUser}
        />
      </div>
    );
  }
}

Users.propTypes = {
  state: React.PropTypes.object,
  getUsersRequest: React.PropTypes.func,
  rebootUser: React.PropTypes.func,
  deleteUser: React.PropTypes.func,
  hideInstantDeleteModal: React.PropTypes.func,
  showInstantDeleteModal: React.PropTypes.func,
};
