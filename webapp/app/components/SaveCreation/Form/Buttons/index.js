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

  handleFormClick(event) {
    event.preventDefault();
    if (this.props.users.length > 0 &&
        this.props.date !== 'Invalid date' &&
        this.props.time !== 'Invalid date' &&
        this.props.files.length > 0) {
      this.props.createSave(true, this.props.users, this.props.date, this.props.time, this.props.frequency, this.props.files);
    }
    if (this.props.users.length === 0) {
      this.props.userErrorMsg('You can\'t create a save without a user');
    }
    if (this.props.date === 'Invalid date') {
      this.props.dateErrorMsg('Invalid date');
    }
    if (this.props.time === 'Invalid date') {
      this.props.timeErrorMsg('Invalid time');
    }
    if (this.props.files.length === 0) {
      this.props.fileErrorMsg('Select a file to save');
    }
  }

  handleCancelClick() {
    browserHistory.goBack();
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Create" onClick={(event) => this.handleFormClick(event)} />
        <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={() => this.handleCancelClick()} />

        <LinkContainerButton buttonType="submit" buttonBsStyle="default" buttonText="Send" onClick={this.handleClick} />
      </ButtonToolbar>
    );
  }
}

SaveCreationButtons.propTypes = {
  users: React.PropTypes.array,
  date: React.PropTypes.string,
  time: React.PropTypes.string,
  frequency: React.PropTypes.string,
  files: React.PropTypes.array,
  createSave: React.PropTypes.func,
  userErrorMsg: React.PropTypes.func,
  dateErrorMsg: React.PropTypes.func,
  timeErrorMsg: React.PropTypes.func,
  frequencyErrorMsg: React.PropTypes.func,
  fileErrorMsg: React.PropTypes.func,
};
