//
// Component Groups
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { GroupTable } from 'components/Groups/Table';
import GroupsButton from 'containers/Groups/Button';
import styles from './styles.css';

export class Groups extends React.Component {

  componentWillMount() {
    this.props.getGroupsRequest();
  }

  render() {
    return (
      <div container className={styles.groups}>
        <PageHeader>Groups</PageHeader>
        <GroupsButton />
        <GroupTable
          state={this.props.state}
        />
      </div>
    );
  }
}

Groups.propTypes = {
  state: React.PropTypes.object,
  getGroupsRequest: React.PropTypes.func,
};
