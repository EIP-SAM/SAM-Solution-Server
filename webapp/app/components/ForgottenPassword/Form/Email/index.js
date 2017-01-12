//
// Component email form in forgotten password page
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class ForgottenPasswordEmail extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onChangeEmail(event) {
    this.props.onChangeData(event.target.value);
  }

  render() {
    return (
      <FormGroup controlId="formBasicText">
        <ControlLabel>Email</ControlLabel>
        <FormControl type="text" value={this.props.email} onChange={this.onChangeEmail} />
      </FormGroup>
    );
  }
}

ForgottenPasswordEmail.propTypes = {
  onChangeData: React.PropTypes.func,
  email: React.PropTypes.string.isRequired,
};
