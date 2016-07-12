//
// Component displaying number of logs filter
//

import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class NumberLogs extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      number: 'all',
    };
  }

  handleChange(event) {
    const number = event.target.value;
    this.setState({ number }, this.props.onChange(number));
  }

  render() {
    return (
      <FormGroup>
        <ControlLabel>Number of logs:</ControlLabel>
        <FormControl componentClass="select" onChange={this.handleChange} placeholder={this.state.number}>
          <option value="all">all</option>
          <option value="10">10</option>
          <option value="100">100</option>
          <option value="1000">1000</option>
          <option value="10000">10000</option>
        </FormControl>
      </FormGroup>
    );
  }
}

NumberLogs.propTypes = {
  onChange: React.PropTypes.func,
};
