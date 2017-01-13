//
// Component EditGroup
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import EditGroupForm from 'containers/EditGroup/Form';

/* eslint-disable react/prefer-stateless-function */
export default class EditGroup extends React.Component {
  componentWillUnmount() {
    this.props.resetStateForm();
  }

  render() {
    return (
      <div>
        <PageHeader>Edit Group</PageHeader>
        <EditGroupForm />
      </div>
    );
  }
}

EditGroup.propTypes = {
  resetStateForm: React.PropTypes.func,
};
