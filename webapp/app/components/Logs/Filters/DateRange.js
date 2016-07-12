//
// Component displaying date filter inputs
//

import React from 'react';
import DatePicker from 'components/DatePicker';
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
      dateOne: null,
      dateTwo: null,
    };
  }

  getDatePickers() {
    if (this.state.specific) {
      return (
        <DatePicker
          value={this.state.dateOne}
          onChange={this.handleChange('specific')}
        />
      );
    }
    return (
      <div>
        <DatePicker
          value={this.state.dateOne}
          onChange={this.handleChange('rangeMin')}
        />
        <div className={styles.rangeMaxLogs}>
          <DatePicker
            value={this.state.dateTwo}
            onChange={this.handleChange('rangeMax')}
          />
        </div>
      </div>
    );
  }

  setStateAndNotify(state) {
    this.setState(state, () => this.props.onChange({
      specific: this.state.specific,
      dateOne: this.state.dateOne,
      dateTwo: this.state.dateTwo,
    }));
  }

  handleChange(name) {
    return event => {
      switch (name) {
        case 'mode':
          this.setStateAndNotify({ specific: event === 'Specific' });
          break;
        case 'specific':
          this.setStateAndNotify({ dateOne: event });
          break;
        case 'rangeMin':
          this.setStateAndNotify({ dateOne: event });
          break;
        case 'rangeMax':
          this.setStateAndNotify({ dateTwo: event });
          break;
        default:
      }
    };
  }

  render() {
    const datePickers = this.getDatePickers();

    return (
      <FormGroup>
        <ControlLabel>Date:</ControlLabel>
        <RadioGroup
          className={styles.radioLogs}
          inline
          values={['Specific', 'Range']}
          placeholder="Specific"
          onChange={this.handleChange('mode')}
        />
        {datePickers}
      </FormGroup>
    );
  }
}

DateRange.propTypes = {
  onChange: React.PropTypes.func,
};
