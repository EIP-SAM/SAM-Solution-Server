//
// DateFormGroup in form for page SaveCreation
//

import React from 'react';
import { Glyphicon } from 'react-bootstrap';
const Datepicker = require('react-bootstrap-date-picker');
import 'components/DatePicker/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class DatePicker extends React.Component {
  render() {
    const dateFormat = (this.props.dateFormat) ? this.props.dateFormat : 'DD/MM/YYYY';
    return (
      <Datepicker
        clearButtonElement={<Glyphicon glyph="remove" />}
        previousButtonElement={<Glyphicon glyph="chevron-left" />}
        nextButtonElement={<Glyphicon glyph="chevron-right" />}
        value={this.props.value}
        dateFormat={dateFormat}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        onChange={this.props.onChange}
        dayLabels={this.props.dayLabels}
        monthLabels={this.props.monthLabels}
        calendarPlacement={this.props.calendarPlacement}
      />
    );
  }
}

DatePicker.propTypes = {
  value: React.PropTypes.string,
  dateFormat: React.PropTypes.string,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onChange: React.PropTypes.func,
  dayLabels: React.PropTypes.string,
  monthLabels: React.PropTypes.string,
  calendarPlacement: React.PropTypes.string,
};
