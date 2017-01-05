//
// Component EditUser
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import EditUserForm from 'containers/EditUser/Form';

/* eslint-disable react/prefer-stateless-function */
export default class EditUser extends React.Component {
  componentWillUnmount() {
    this.props.resetStateForm();
  }

  render() {
    return (
      <div>
        <PageHeader>Edit user</PageHeader>
        <EditUserForm />
      </div>
    );
  }
}

EditUser.propTypes = {
  resetStateForm: React.PropTypes.func,
};
