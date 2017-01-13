//
// Component all groups form notifications
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsFormAllGroupsSelectAll extends React.Component {
  constructor(props) {
    super(props);
    this.selectAll = this.selectAll.bind(this);
  }

  selectAll() {
    this.props.removeGroups(this.props.groups, this.props.groups);
    this.props.addGroups(this.props.groups);
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonBsStyle="info" buttonText="Select all" onClick={() => this.selectAll()} />
      </ButtonToolbar>
    );
  }
}

NotificationsFormAllGroupsSelectAll.propTypes = {
  groups: React.PropTypes.arrayOf(React.PropTypes.object),
  removeGroups: React.PropTypes.func,
  addGroups: React.PropTypes.func,
};
