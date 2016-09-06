//
// List Buttons form page SaveCreation
//

import React from 'react';
import { browserHistory } from 'react-router';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleFormClick() {
    if (this.props.saving.users.length > 0 &&
        this.props.saving.date !== 'Invalid date' &&
        this.props.saving.time !== 'Invalid date' &&
        this.props.saving.files.length > 0) {
      this.props.createSave(true, this.props.saving.users, this.props.saving.date, this.props.saving.time, this.props.saving.frequency, this.props.saving.files);
    }
    if (this.props.saving.users.length === 0) {
      this.props.userErrorMsg('You can\'t create a save without a user');
    }
    if (this.props.saving.date === 'Invalid date') {
      this.props.dateErrorMsg('Invalid date');
    }
    if (this.props.saving.time === 'Invalid date') {
      this.props.timeErrorMsg('Invalid time');
    }
    if (this.props.saving.files.length === 0) {
      this.props.fileErrorMsg('Select a file to save');
    }
  }

  handleCancelClick() {
    this.props.resetStateSaving();
    this.props.resetStateFiles();
    browserHistory.goBack();
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="info" buttonText="Create" onClick={this.handleFormClick} />
        <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.handleCancelClick} />
      </ButtonToolbar>
    );
  }
}

SaveCreationButtons.propTypes = {
  saving: React.PropTypes.object,
  createSave: React.PropTypes.func,
  resetStateSaving: React.PropTypes.func,
  resetStateFiles: React.PropTypes.func,
  userErrorMsg: React.PropTypes.func,
  dateErrorMsg: React.PropTypes.func,
  timeErrorMsg: React.PropTypes.func,
  frequencyErrorMsg: React.PropTypes.func,
  fileErrorMsg: React.PropTypes.func,
};
