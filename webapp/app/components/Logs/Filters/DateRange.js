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
  Label,
  Collapse,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specific: true,
      dateOne: moment().startOf('day').toString(),
      dateTwo: moment().startOf('day').toString(),
    };
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
      <FormGroup>
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
      </FormGroup>
    );
  }
}

DateRange.propTypes = {
  onChange: React.PropTypes.func,
};
