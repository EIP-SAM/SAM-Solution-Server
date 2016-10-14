//
// List Buttons form page SaveCreation
//

import React from 'react';
import { browserHistory } from 'react-router';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/ForgottenPassword/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class ForgottenPasswordButtons extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    if (this.props.state.email.length > 0) {
      this.props.forgottenPasswordRequest(this.props.state.email);
    }
  }

  handleCancelClick() {
    browserHistory.goBack();
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Send" onClick={(event) => this.handleClick(event)} />
        <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={() => this.handleCancelClick()} />
      </ButtonToolbar>
    );
  }
}

ForgottenPasswordButtons.propTypes = {
  forgottenPasswordRequest: React.PropTypes.func,
  email: React.PropTypes.string.isRequired,
};
