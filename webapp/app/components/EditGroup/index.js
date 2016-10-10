//
// Component EditGroup
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import EditGroupForm from 'containers/EditGroup/Form';

export class EditGroup extends React.Component {
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
