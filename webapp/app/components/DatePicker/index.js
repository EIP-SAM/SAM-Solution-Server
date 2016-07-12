//
// DateFormGroup in form for page SaveCreation
//

import React from 'react';
import { Glyphicon } from 'react-bootstrap';
const Datepicker = require('react-bootstrap-date-picker');
const moment = require('moment');
import 'components/DatePicker/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      date: '',
    };
    this.dateFormat = '';
  }

  componentWillMount() {
    this.dateFormat = (this.props.dateFormat) ? this.props.dateFormat : 'DD/MM/YYYY';

    if (typeof this.props.value !== 'undefined') {
      this.setState({ date: this.props.value });
    } else {
      this.setState({ date: moment().format(this.dateFormat) });
    }
  }

  handleChange(e) {
    const newDate = e;
    if (this.state.date !== newDate) {
      this.setState({ date: newDate });
    }
    if (this.props.onChange) {
      this.props.onChange(newDate);
    }
  }

  render() {
    return (
      <Datepicker
        clearButtonElement={<Glyphicon glyph="remove" />}
        previousButtonElement={<Glyphicon glyph="chevron-left" />}
        nextButtonElement={<Glyphicon glyph="chevron-right" />}
        value={this.state.date}
        dateFormat={this.dateFormat}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        onChange={this.handleChange}
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
