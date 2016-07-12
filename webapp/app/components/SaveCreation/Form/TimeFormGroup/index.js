//
// TimeFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationTimeFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  componentWillMount() {
    this.props.timeSave(moment().format('HH:mm'));
  }

  handleTimeChange(e) {
    this.props.timeSave(moment(e.target.value, ['h:mm A']).format('HH:mm'));
  }

  render() {
    return (
      <FormGroup controlId="time">
        <ControlLabel>Time</ControlLabel>
        <FormControl type="time" value={this.props.state.time} onChange={this.handleTimeChange} />
      </FormGroup>
    );
  }
}

SaveCreationTimeFormGroup.propTypes = {
  state: React.PropTypes.object,
  timeSave: React.PropTypes.func,
};
