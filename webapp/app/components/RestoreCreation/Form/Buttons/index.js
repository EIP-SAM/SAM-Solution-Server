import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/RestoreCreation/styles.css';
/* eslint-disable react/prefer-stateless-function */
export class RestoreCreationButtons extends React.Component {

  handleFormClick() {
    if (this.props.userId !== ''
      && this.props.save !== []
      && this.props.selectedFiles.length > 0) {
      this.props.createRestoresRequest(this.props.userId, this.props.selectedFiles, this.props.save.value, true);
    } if (this.props.save == []) {
      this.props.saveErrorMsg('No save selected');
    } if (this.props.selectedFiles.length === 0) {
      this.props.filesErrorMsg('No files selected');
    }
  }

  handleCancelClick() {
    browserHistory.goBack();
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="info" buttonText="Restore" onClick={() => this.handleFormClick()} />
        <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={() => this.handleCancelClick()} />
      </ButtonToolbar>
    );
  }
}

RestoreCreationButtons.propTypes = {
  userId: React.PropTypes.number,
  save: React.PropTypes.object,
  selectedFiles: React.PropTypes.array,
  resetStateForm: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  saveErrorMsg: React.PropTypes.func,
  filesErrorMsg: React.PropTypes.func,
};
