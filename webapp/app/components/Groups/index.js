//
// Component Groups
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import GroupTable from 'containers/Groups/Table';
import GroupsButton from 'containers/Groups/Button';

export class Groups extends React.Component {

  componentWillMount() {
    this.props.getGroupsRequest();
  }

  render() {
    return (
      <div>
        <PageHeader>Groups</PageHeader>
        <GroupsButton />
        <GroupTable />
      </div>
    );
  }
}

Groups.propTypes = {
  getGroupsRequest: React.PropTypes.func,
};
