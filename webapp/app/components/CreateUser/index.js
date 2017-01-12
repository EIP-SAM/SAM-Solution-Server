//
// Component CreateUser
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import CreateUserForm from 'containers/CreateUser/Form';

/* eslint-disable react/prefer-stateless-function */
export default class CreateUser extends React.Component {
  componentWillUnmount() {
    this.props.resetStateForm();
  }

  render() {
    return (
      <div>
        <PageHeader>Create user</PageHeader>
        <CreateUserForm />
      </div>
    );
  }
}

CreateUser.propTypes = {
  resetStateForm: React.PropTypes.func,
};
