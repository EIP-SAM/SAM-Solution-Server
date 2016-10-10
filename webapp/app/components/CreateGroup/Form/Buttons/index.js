//
// Component create group form
//

import React from 'react';
import { browserHistory } from 'react-router';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/CreateGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateGroupFormButtons extends React.Component {
  handleCreateClick(event) {
    event.preventDefault();
    if (this.props.groupName !== '') {
      this.props.createGroupRequest(this.props.groupName, this.props.saveRestoreMode, this.props.migrationMode, this.props.softwareMode);
    } else {
      this.props.groupNameErrorMsg('A group must have a name');
    }
  }

  handleCancelClick() {
    browserHistory.goBack();
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Create" onClick={(event) => this.handleCreateClick(event)} />
        <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={(event) => this.handleCancelClick(event)} />
      </ButtonToolbar>
    );
  }
}

CreateGroupFormButtons.propTypes = {
  groupName: React.PropTypes.string,
  saveRestoreMode: React.PropTypes.number,
  migrationMode: React.PropTypes.number,
  softwareMode: React.PropTypes.number,
  createGroupRequest: React.PropTypes.func,
  groupNameErrorMsg: React.PropTypes.func,
};
