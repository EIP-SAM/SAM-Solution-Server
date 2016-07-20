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
  }

  handleFormClick() {
    if (this.props.state.userId !== ''
      && this.props.state.save.value !== ''
      && this.props.state.selectedFiles !== null) {
      this.props.createRestoresRequest(this.props.state, true);
    } if (this.props.state.save.length === 0) {
      this.props.saveErrorMsg('No save selected');
    } if (this.props.state.selectedFiles.length === 0) {
      this.props.filesErrorMsg('No files selected');
    }
  }

  handleCancelClick() {
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
  state: React.PropTypes.object,
  createRestoresRequest: React.PropTypes.func,
  listSaves: React.PropTypes.func,
  saveErrorMsg: React.PropTypes.func,
  filesErrorMsg: React.PropTypes.func,
};
