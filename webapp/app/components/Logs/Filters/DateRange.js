//
// Component displaying date filter inputs
//

import React from 'react';
import moment from 'moment';
import DatePicker from 'components/DatePicker';
import RadioGroup from 'components/RadioGroup';
import styles from './styles.css';
import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  Label,
  Collapse,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specific: true,
      dateOne: moment().startOf('day').toISOString(),
      dateTwo: moment().startOf('day').toISOString(),
    };
  }

  setStateAndNotify(state) {
    this.setState(state, () => this.props.onChange({
      specific: this.state.specific,
      dateOne: this.state.dateOne,
      dateTwo: this.state.dateTwo,
    }));
  }

  setStatusStyle() {
    if (this.state.specific) {
      return undefined;
    }
    if (this.state.dateOne !== null && this.state.dateTwo !== null) {
      if (moment(new Date(this.state.dateOne)) > moment(new Date(this.state.dateTwo))) {
        return 'error';
      }
    }
    return undefined;
  }

  setMessageStatus() {
    if (this.state.specific) {
      return undefined;
    }
    if (this.state.dateOne !== null && this.state.dateTwo !== null) {
      if (moment(new Date(this.state.dateOne)) > moment(new Date(this.state.dateTwo))) {
        return 'First date must be before second date';
      }
    }
    return '';
  }

  handleChange(name) {
    return event => {
      switch (name) {
        case 'mode':
          this.setStateAndNotify({ specific: event === 'Specific' });
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
    return (
      <div>
        <FormGroup className={styles.dateRangeLog}>
          <ControlLabel>
            <h4><Label bsStyle="primary">Date</Label></h4>
          </ControlLabel>
          <RadioGroup
            className={styles.radioLogs}
            inline
            values={['Specific', 'Range']}
            placeholder="Specific"
            onChange={this.handleChange('mode')}
            />
          </FormGroup>
          <FormGroup validationState={this.setStatusStyle()}>
            <DatePicker
              value={this.state.dateOne}
              onChange={this.handleChange('rangeMin')}
              />
            <Collapse className={styles.rangeMaxLogs} in={!this.state.specific} timeout={500}>
              <div>
                <DatePicker
                  value={this.state.dateTwo}
                  onChange={this.handleChange('rangeMax')}
                  />
              </div>
            </Collapse>
            <HelpBlock>{this.setMessageStatus()}</HelpBlock>
        </FormGroup>
      </div>
    );
  }
}

DateRange.propTypes = {
  onChange: React.PropTypes.func,
};
