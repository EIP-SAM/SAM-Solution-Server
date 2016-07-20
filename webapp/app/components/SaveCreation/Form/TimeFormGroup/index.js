//
// TimeFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationTimeFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.disabled = false;
  }

  componentWillMount() {
    if (this.props.state.time) {
      this.disabled = true;
    }
    this.props.timeSave(moment().format('HH:mm'));
  }

  handleTimeChange(e) {
    this.props.timeSave(moment(e.target.value, ['h:mm A']).format('HH:mm'));
  }

  render() {
    let validationState = '';
    let errorMessage = '';

    if (this.props.state.timeError !== '') {
      validationState = 'error';
      errorMessage = this.props.state.timeError;
    }

    return (
      <FormGroup controlId="time" validationState={validationState}>
        <ControlLabel>Time</ControlLabel>
        <FormControl type="time" value={this.props.state.time} onChange={this.handleTimeChange} disabled={this.disabled} />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

SaveCreationTimeFormGroup.propTypes = {
  state: React.PropTypes.object,
  timeSave: React.PropTypes.func,
};
