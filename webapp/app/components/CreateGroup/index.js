//
// Component create group
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import CreateGroupForm from 'containers/CreateGroup/Form';

/* eslint-disable react/prefer-stateless-function */
export default class CreateGroup extends React.Component {
  componentWillUnmount() {
    this.props.resetStateForm();
  }

  render() {
    return (
      <div>
        <PageHeader>Create Group</PageHeader>
        <CreateGroupForm />
      </div>
    );
  }
}

CreateGroup.propTypes = {
  resetStateForm: React.PropTypes.func,
};
