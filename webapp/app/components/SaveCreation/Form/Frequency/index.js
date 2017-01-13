//
// FrequencyFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class SaveCreationFrequency extends React.Component {
  constructor(props) {
    super(props);
    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
  }

  componentWillMount() {
    if (!this.props.frequency) {
      this.props.frequencySave('No Repeat');
    }
  }

  handleFrequencyChange(e) {
    this.props.frequencySave(e.target.value);
  }

  render() {
    return (
      <FormGroup controlId="frequency" className={styles.form}>
        <ControlLabel>Repeat</ControlLabel>
        <FormControl componentClass="select" onChange={this.handleFrequencyChange} defaultValue="No Repeat">
          <Option object={{ isActive: this.props.isFrequencyDisabled, value: 'No Repeat', text: 'No Repeat' }} key="item-0" />
          <Option object={{ isActive: this.props.isFrequencyDisabled, value: 'Daily', text: 'Daily' }} key="item-1" />
          <Option object={{ isActive: this.props.isFrequencyDisabled, value: 'Weekly', text: 'Weekly' }} key="item-2" />
          <Option object={{ isActive: this.props.isFrequencyDisabled, value: 'Monthly', text: 'Monthly' }} key="item-3" />
        </FormControl>
      </FormGroup>
    );
  }
}

SaveCreationFrequency.propTypes = {
  frequency: React.PropTypes.string,
  isFrequencyDisabled: React.PropTypes.bool,
  frequencySave: React.PropTypes.func,
};
