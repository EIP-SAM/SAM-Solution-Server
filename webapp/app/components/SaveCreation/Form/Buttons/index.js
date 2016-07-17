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
    this.props.createSave(this.props.state, true);
  }

  handleCancelClick() {
    this.props.resetState();
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
  state: React.PropTypes.object,
  createSave: React.PropTypes.func,
  resetState: React.PropTypes.func,
};
