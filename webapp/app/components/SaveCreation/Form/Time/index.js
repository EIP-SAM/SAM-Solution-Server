//
// TimeFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import Timepicker from 'components/Timepicker';

const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export default class SaveCreationTime extends React.Component {

  componentWillMount() {
    this.props.timeSave(moment().format('HH:mm'));
  }

  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.timeError !== '') {
      validationState = 'error';
      errorMessage = this.props.timeError;
    }

    return (
      <FormGroup controlId="time" validationState={validationState}>
        <ControlLabel>Time</ControlLabel>
        <Timepicker time={this.props.time} updateTimeCallback={this.props.timeSave} isDisabled={this.props.isTimeDisabled} />

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
