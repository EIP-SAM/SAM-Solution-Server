//
// List Buttons form page Forgotten Password
//

import React from 'react';
import { browserHistory } from 'react-router';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/ForgottenPassword/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class ForgottenPasswordButtons extends React.Component {
  static handleCancelClick() {
    browserHistory.goBack();
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    if (this.props.email.length > 0) {
      this.props.forgottenPasswordRequest(this.props.email);
    }
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Send" onClick={event => this.handleClick(event)} />
        <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={() => ForgottenPasswordButtons.handleCancelClick()} />
      </ButtonToolbar>
    );
  }
}

ForgottenPasswordButtons.propTypes = {
  forgottenPasswordRequest: React.PropTypes.func,
  email: React.PropTypes.string.isRequired,
};
