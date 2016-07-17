//
// Login
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from './styles.css';

export class ForgottenPassword extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  onChangeEmail(event) {
    this.props.onChangeData(event.target.value);
  }

  handleClick(event) {
    this.props.forgottenPasswordRequest(this.props.state.email);
  }

  render() {
    return (
      <div container className={styles.forgotten}>
        <form>
          <PageHeader>Forgotten password</PageHeader>
          <p>You will receive an email with your new password.</p>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" value={this.props.state.email} onChange={this.onChangeEmail} />
            <LinkContainerButton buttonType='default' buttonText='Submit' onClick={this.handleClick} />
          </FormGroup>
        </form>
      </div>
    );
  }
}
