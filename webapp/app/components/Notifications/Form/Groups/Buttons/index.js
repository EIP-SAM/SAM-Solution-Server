//
// Component groups buttons form notifications
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsFormGroupsButtons extends React.Component {
  handleAddClick() {
    this.props.removeGroups(this.props.groups, this.props.preSelectedGroups);
    this.props.addGroups(this.props.selectedGroups.concat(this.props.preSelectedGroups));
  }

  handleRemoveClick() {
    this.props.removeGroupsSelected(this.props.selectedGroups, this.props.unselectedGroups);
    this.props.getGroups(this.props.groups.concat(this.props.unselectedGroups));
  }

  render() {
    return (
      <ButtonToolbar className={styles.groupsToolbar}>
        <LinkContainerButton buttonBsStyle="default" buttonStyle={styles.groupsButtons} buttonText=">" onClick={() => this.handleAddClick()} />
        <LinkContainerButton buttonBsStyle="default" buttonStyle={styles.groupsButtons} buttonText="<" onClick={() => this.handleRemoveClick()} />
      </ButtonToolbar>
    );
  }
}

NotificationsFormGroupsButtons.propTypes = {
  groups: React.PropTypes.arrayOf(React.PropTypes.object),
  preSelectedGroups: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedGroups: React.PropTypes.arrayOf(React.PropTypes.object),
  unselectedGroups: React.PropTypes.arrayOf(React.PropTypes.object),
  getGroups: React.PropTypes.func,
  addGroups: React.PropTypes.func,
  removeGroups: React.PropTypes.func,
  removeGroupsSelected: React.PropTypes.func,
};
