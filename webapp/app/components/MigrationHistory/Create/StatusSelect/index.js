//
// Migration History page Status select component
//

import React from 'react';
import {
  FormGroup,
  ControlLabel,
  Col,
} from 'react-bootstrap';
import DatePicker from 'components/DatePicker';
import Timepicker from 'components/Timepicker';
import moment from 'moment';

/* eslint-disable react/prefer-stateless-function */
export default class StatusSelect extends React.Component {

  static handleRemoveTime() {
    this.props.setCreateTime('');
  }

  componentWillMount() {
    if (!this.props.time) {
      this.props.setCreateTime(moment().format('HH:mm'));
    }
    if (!this.props.date) {
      this.props.setCreateDate(moment());
    }
  }

  render() {
    const timepickerProps = {
      id: 'createMigration',
      time: this.props.time,
      label: 'Time',
      updateTimeCallback: this.props.setCreateTime,
      handleRemove: StatusSelect.handleRemoveTime,
    };

    return (
      <FormGroup controlId="time" className="clearfix">
        <Col sm={6}>
          <ControlLabel>Date</ControlLabel>
          <DatePicker value={this.props.date} onChange={this.props.setCreateDate} />
        </Col>
        <Col sm={6}>
          <Timepicker {...timepickerProps} />
        </Col>
      </FormGroup>
    );
  }

}

StatusSelect.propTypes = {
  date: React.PropTypes.string,
  time: React.PropTypes.string,
  setCreateDate: React.PropTypes.func,
  setCreateTime: React.PropTypes.func,
};
