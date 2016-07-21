//
// Component Users
//

import React from 'react';
import { PageHeader, ButtonToolbar, Button } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class UsersAdminAction extends React.Component {
  componentDidMount() {
    this.props.getCurrentUserRequest();
  }

  render() {
    if (typeof this.props.state !== 'undefined') {
      if (this.props.state.isAdmin == true) {
        return (
          <div container>
            <PageHeader>Users</PageHeader>
            <ButtonToolbar>
              <Button href="/users">List Users</Button>
              <Button href="/groups/">List User Group</Button>
            </ButtonToolbar>
          </div>
        );
      }
    }
    return (
      <div container>
        <PageHeader>Users</PageHeader>
        <ButtonToolbar>
          <Button href={`/edit-user/${this.props.state.name}`}>Edit my profile</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

UsersAdminAction.propTypes = {
  state: React.PropTypes.object,
  getCurrentUserRequest: React.PropTypes.func,
};
