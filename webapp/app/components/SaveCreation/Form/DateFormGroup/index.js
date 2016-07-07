//
// DateFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import DatePicker from 'components/DatePicker';
import styles from 'components/SaveCreation/styles.css';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationDateFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentWillMount() {
    this.props.dateSave(moment().format('DD/MM/YYYY'));
  }

  handleDateChange(date) {
    this.props.dateSave(moment(date).format('DD/MM/YYYY'));
  }

  render() {
    return (
      <FormGroup controlId="date" className={styles.form}>
        <ControlLabel className={styles.label}>Date</ControlLabel>
        <DatePicker value={this.props.state.date} onChange={this.handleDateChange} />
      </FormGroup>
    );
  }
}

SaveCreationDateFormGroup.propTypes = {
  state: React.PropTypes.object,
  dateSave: React.PropTypes.func,
};
