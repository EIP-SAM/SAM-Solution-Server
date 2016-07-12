//
// FrequencyFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationFrequencyFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
  }

  componentWillMount() {
    this.props.frequencySave('No Repeat');
  }

  handleFrequencyChange(e) {
    this.props.frequencySave(e.target.value);
  }

  render() {
    return (
      <FormGroup controlId="frequency" className={styles.form}>
        <ControlLabel>Repeat</ControlLabel>
        <FormControl componentClass="select" onChange={this.handleFrequencyChange}>
          <option value="No Repeat" defaultValue>No Repeat</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthy</option>
        </FormControl>
      </FormGroup>
    );
  }
}

SaveCreationFrequencyFormGroup.propTypes = {
  state: React.PropTypes.object,
  frequencySave: React.PropTypes.func,
};
