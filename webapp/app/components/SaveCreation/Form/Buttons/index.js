//
// List Buttons form page SaveCreation
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  handleFormClick() {
    this.props.createSave(this.props.state);
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="info" buttonText="Create" onClick={this.handleFormClick} />
        <LinkContainerButton buttonType="default" buttonText="Cancel" />
      </ButtonToolbar>
    );
  }
}

SaveCreationButtons.propTypes = {
  state: React.PropTypes.object,
  createSave: React.PropTypes.func,
};
