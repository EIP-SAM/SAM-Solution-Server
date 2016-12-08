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
    this.disabled = false;
    this.dateFormat = '';
  }

  componentWillMount() {
    this.dateFormat = (this.props.dateFormat) ? this.props.dateFormat : 'DD/MM/YYYY';
    this.disabled = (this.props.disabled) ? (this.props.disabled) : false;

    if (this.props.value) {
      this.setState({ date: this.props.value });
      if (this.props.onChange) {
        this.props.onChange(this.props.value);
      }
    } else {
      this.setState({ date: moment().toDate().toISOString() });
      if (this.props.onChange) {
        this.props.onChange(moment().toDate().toISOString());
      }
    }
  }

  handleChange(e) {
    if (!this.disabled) {
      let newDate = e;

      if (newDate != null) {
        newDate = moment(newDate).utcOffset(newDate).startOf('date').toISOString();
      }

      if (this.state.date !== newDate) {
        this.setState({ date: newDate });
      }
      if (this.props.onChange) {
        this.props.onChange(newDate);
      }
    } else {
      this.setState({ date: this.state.date });
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
  disabled: React.PropTypes.bool,
};
