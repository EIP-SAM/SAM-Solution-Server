//
// Filters page save
//

import React from 'react';
import { Form } from 'react-bootstrap';
import TypeUserFormGroup from 'containers/Save/Filters/TypeUserFormGroup';
import GroupsFormGroup from 'containers/Save/Filters/GroupsFormGroup';

/* eslint-disable react/prefer-stateless-function */
export class SaveFilters extends React.Component {
  componentDidMount() {
    this.props.getListUsersRequest();
  }
  render() {
    return (
      <Form horizontal>
        <TypeUserFormGroup />
        <GroupsFormGroup />
      </Form>
    );
  }
}

SaveFilters.propTypes = {
  getListUsersRequest: React.PropTypes.func,
};
