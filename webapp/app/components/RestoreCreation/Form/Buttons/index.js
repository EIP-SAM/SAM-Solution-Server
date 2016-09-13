import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/RestoreCreation/styles.css';
/* eslint-disable react/prefer-stateless-function */
export class RestoreCreationButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleFormClick() {
    if (this.props.userId !== ''
      && this.props.saves.value !== ''
      && this.props.selectedFiles !== null) {
      this.props.createRestoresRequest(this.props.userId, this.props.selectedFiles, true);
    } if (this.props.saves.length === 0) {
      this.props.saveErrorMsg('No save selected');
    } if (this.props.selectedFiles.length === 0) {
      this.props.filesErrorMsg('No files selected');
    }
  }

  handleCancelClick() {
    // this.props.resetState();
    browserHistory.goBack();
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="info" buttonText="Restore" onClick={this.handleFormClick} />
        <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.handleCancelClick} />
      </ButtonToolbar>
    );
  }
}

RestoreCreationButtons.propTypes = {
  userId: React.PropTypes.number,
  saves: React.PropTypes.array,
  selectedFiles: React.PropTypes.array,
  resetState: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  saveErrorMsg: React.PropTypes.func,
  filesErrorMsg: React.PropTypes.func,
};
