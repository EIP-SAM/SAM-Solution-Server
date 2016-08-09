//
// FrequencyFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationFrequencyFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
    this.isActive = true;
  }

  componentWillMount() {
    if (!this.props.saving.frequency) {
      this.isActive = false;
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
        <FormControl componentClass="select" onChange={this.handleFrequencyChange}>
          <Option object={{ isActive: this.isActive, value: 'No Repeat', text: 'No Repeat' }} key="item-0" />
          <Option object={{ isActive: this.isActive, value: 'Daily', text: 'Daily' }} key="item-1" />
          <Option object={{ isActive: this.isActive, value: 'Weekly', text: 'Weekly' }} key="item-2" />
          <Option object={{ isActive: this.isActive, value: 'Monthly', text: 'Monthly' }} key="item-3" />
        </FormControl>
      </FormGroup>
    );
  }
}

SaveCreationFrequencyFormGroup.propTypes = {
  saving: React.PropTypes.object,
  state: React.PropTypes.object,
  frequencySave: React.PropTypes.func,
};
