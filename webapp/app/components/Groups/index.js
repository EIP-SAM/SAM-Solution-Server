//
// Component Groups
//

import React from 'react';
import { PageHeader, Alert } from 'react-bootstrap';
import GroupTable from 'containers/Groups/Table';
import GroupsButton from 'containers/Groups/Button';

/* eslint-disable react/prefer-stateless-function */
export default class Groups extends React.Component {
  componentWillMount() {
    this.props.getGroupsRequest();
  }

  componentWillUnmount() {
    this.props.resetAlert();
  }

  render() {
    let alert = '';
    if (this.props.displayAlert) {
      alert = (
        <Alert bsStyle={this.props.typeAlert}>
          <strong>{`${this.props.groupName}`}</strong> {`${this.props.alertMsg}`}
        </Alert>
      );
    }

    return (
      <div>
        <PageHeader>Groups</PageHeader>
        {alert}
        <GroupsButton />
        <GroupTable />
      </div>
    );
  }
}

Groups.propTypes = {
  groupName: React.PropTypes.string,
  alertMsg: React.PropTypes.string,
  typeAlert: React.PropTypes.string,
  displayAlert: React.PropTypes.bool,
  getGroupsRequest: React.PropTypes.func,
  resetAlert: React.PropTypes.func,
};
