//
// DateFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import DatePicker from 'components/DatePicker';
import styles from 'components/SaveCreation/styles.css';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationDate extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    this.props.dateSave(moment(date).format('DD/MM/YYYY'));
  }

  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.dateError !== '') {
      validationState = 'error';
      errorMessage = this.props.dateError;
    }

    return (
      <FormGroup controlId="date" className={styles.form} validationState={validationState}>
        <ControlLabel className={styles.label}>Date</ControlLabel>
        <DatePicker onChange={this.handleDateChange} disabled={this.props.isDateDisabled} />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

SaveCreationDate.propTypes = {
  date: React.PropTypes.string,
  dateError: React.PropTypes.string,
  isDateDisabled: React.PropTypes.bool,
  dateSave: React.PropTypes.func,
};
