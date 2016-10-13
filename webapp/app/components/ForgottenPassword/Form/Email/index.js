import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';

export class Email extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChangeEmail(event) {
    this.props.onChangeData(event.target.value);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.forgottenPasswordRequest(this.props.state.email);
  }

  render() {
    return (
      <FormGroup controlId="formBasicText">
        <ControlLabel>Email</ControlLabel>
        <FormControl type="text" value={this.props.state.email} onChange={this.onChangeEmail} />
        <LinkContainerButton buttonType="submit" buttonBsStyle="default" buttonText="Send" onClick={this.handleClick} />
      </FormGroup>
    );
  }
}

Email.propTypes = {
  forgottenPasswordRequest: React.PropTypes.func,
  onChangeData: React.PropTypes.func,
  state: React.PropTypes.object.isRequired,
};
