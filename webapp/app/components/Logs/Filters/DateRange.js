//
// Component displaying date filter inputs
//

import React from 'react';
import DateInput from 'components/DatePicker';
import RadioGroup from 'components/RadioGroup';
import styles from './styles.css';
import {
  FormGroup,
  ControlLabel,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specific: true,
      day: '',
    };
  }

  getDateFields() {
    if (this.state.specific) {
      return (
        <DateInput
          value={this.state.day}
          onChange={this.handleChange('specific')}
        />
      );
    }
    return (
      <span>
        <DateInput
          value={this.state.day}
          onChange={(value) => this.props.onChange({ mode: 'dayMin', value })}
        />
        <div className={styles.maxDate}>
          <DateInput
            onChange={(value) => this.props.onChange({ mode: 'dayMax', value })}
          />
        </div>
      </span>
    );
  }

  handleChange(name) {
    return event => {
      switch (name) {
        case 'mode':
          this.setState({ specific: event === 'Specific' });
          break;
        case 'specific':
          this.setState({ day: event });
          this.props.onChange({ mode: 'day', event });
          break;
        default:
      }
    };
  }

  render() {
    const dateFields = this.getDateFields();

    return (
      <FormGroup>
        <ControlLabel>Date:</ControlLabel>
        <RadioGroup
          className={styles.radio}
          inline
          values={['Specific', 'Range']}
          placeholder="Specific"
          onChange={this.handleChange('mode')}
        />
        {dateFields}
      </FormGroup>
    );
  }
}

DateRange.propTypes = {
  onChange: React.PropTypes.func,
};
