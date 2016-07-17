//
// Component Groups
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import styles from './styles.css';

export class Groups extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getGroupsRequest();
  }

  render() {
    return (
      <div container className={styles.groups}>
        <PageHeader>Groups</PageHeader>
      </div>
    );
  }
}

Groups.propTypes = {
  state: React.PropTypes.object,
  getGroupsRequest: React.PropTypes.func,
};
