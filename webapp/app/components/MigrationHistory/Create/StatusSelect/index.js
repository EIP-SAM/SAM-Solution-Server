//
// Migration History page Status select component
//

import React from 'react';
import ReactDOM from 'react-dom';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Col
} from 'react-bootstrap';
import RadioGroup from 'components/RadioGroup';
import DatePicker from 'components/DatePicker';
import Timepicker from 'components/Timepicker';
import moment from 'moment';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class StatusSelect extends React.Component {
  componentWillMount() {
    if (!this.props.time) {
      this.props.setCreateTime(moment().format('HH:mm'));
    }
    if (!this.props.date) {
      this.props.setCreateDate(moment());
    }
  }

  handleTimeChange(e) {
    if (!moment(e.target.value, ['h:mm A']).isValid()) {
      this.props.setCreateTime('');
    } else {
      this.props.setCreateTime(moment(e.target.value, ['h:mm A']).format('HH:mm'));
    }
  }

  handleRemoveTime(e) {
    this.props.setCreateTime('');
  }

  render() {
    const time = (this.props.time !== undefined) ? this.props.time: moment().format('HH:mm');
    const timepickerProps = {
      time: this.props.time,
      label: 'Time',
      updateTimeCallback: this.handleTimepickerOnChange.bind(this),
      handleRemove: this.handleRemoveTime.bind(this)
    }

    return (
      <FormGroup controlId="time" className="clearfix">
        <Col sm={6}>
          <ControlLabel>Date</ControlLabel>
          <DatePicker value={this.props.date} onChange={this.props.setCreateDate} />
        </Col>
        <Col sm={6}>
          <Timepicker {...timepickerProps}/>
        </Col>
      </FormGroup>
    );
  }

  //
  // Timepicker on change date handleRemove 
  //
  handleTimepickerOnChange(value) {
    if (!moment(value, ['h:mm A']).isValid()) {
      this.props.setCreateTime('');
    } else {
      const time = moment(value, ['h:mm A']).format('HH:mm');
      this.props.setCreateTime(time);
    }
  }
}

StatusSelect.propTypes = {
  date: React.PropTypes.string,
  time: React.PropTypes.string,
  setCreateDate: React.PropTypes.func,
  setCreateTime: React.PropTypes.func,
}
