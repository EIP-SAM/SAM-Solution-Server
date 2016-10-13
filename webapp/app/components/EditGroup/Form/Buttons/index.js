//
// Component edit group form
//

import React from 'react';
import { browserHistory } from 'react-router';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/EditGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class EditGroupFormButtons extends React.Component {
  handleEditClick(event) {
    event.preventDefault();
    if (this.props.groupName !== '') {
      this.props.editGroupRequest(this.props.groupId, this.props.groupName, this.props.saveRestoreMode, this.props.migrationMode, this.props.softwareMode);
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
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Edit" onClick={(event) => this.handleEditClick(event)} />
        <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={() => this.handleCancelClick()} />
      </ButtonToolbar>
    );
  }
}

EditGroupFormButtons.propTypes = {
  groupId: React.PropTypes.number,
  groupName: React.PropTypes.string,
  saveRestoreMode: React.PropTypes.number,
  migrationMode: React.PropTypes.number,
  softwareMode: React.PropTypes.number,
  editGroupRequest: React.PropTypes.func,
  groupNameErrorMsg: React.PropTypes.func,
};
