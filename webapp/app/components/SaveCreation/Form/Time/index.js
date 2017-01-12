//
// TimeFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Timepicker from 'components/Timepicker'
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationTime extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  componentWillMount() {
    this.props.timeSave(moment().format('HH:mm'));
  }

  handleTimeChange(value) {
    this.props.timeSave(moment(value, ['h:mm A']).format('HH:mm'));
  }

  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.timeError !== '') {
      validationState = 'error';
      errorMessage = this.props.timeError;
    }

    // <FormControl type="time" value={this.props.time} onChange={this.handleTimeChange} disabled={this.props.isTimeDisabled} />

    return (
      <FormGroup controlId="time" validationState={validationState}>
        <ControlLabel>Time</ControlLabel>
        <Timepicker time={this.props.time} updateTimeCallback={this.handleTimeChange.bind(this)} isDisabled={this.props.isTimeDisabled} />

        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

SaveCreationTime.propTypes = {
  time: React.PropTypes.string,
  timeError: React.PropTypes.string,
  isTimeDisabled: React.PropTypes.bool,
  timeSave: React.PropTypes.func,
};
