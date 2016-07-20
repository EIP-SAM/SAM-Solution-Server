//
// DateFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import DatePicker from 'components/DatePicker';
import styles from 'components/SaveCreation/styles.css';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationDateFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.disabled = false;
  }

  componentWillMount() {
    if (this.props.state.date) {
      this.disabled = true;
    }
  }

  handleDateChange(date) {
    this.props.dateSave(moment(date).format('DD/MM/YYYY'));
  }

  render() {
    let validationState = '';
    let errorMessage = '';

    if (this.props.state.dateError !== '') {
      validationState = 'error';
      errorMessage = this.props.state.dateError;
    }

    return (
      <FormGroup controlId="date" className={styles.form} validationState={validationState}>
        <ControlLabel className={styles.label}>Date</ControlLabel>
        <DatePicker onChange={this.handleDateChange} disabled={this.disabled} />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

SaveCreationDateFormGroup.propTypes = {
  state: React.PropTypes.object,
  dateSave: React.PropTypes.func,
};
