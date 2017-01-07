//
// Component displaying level filter inputs
//

import React from 'react';
import RadioGroup from 'components/RadioGroup';
import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Label,
  Collapse,
} from 'react-bootstrap';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specific: true,
      levelOne: 'all',
      levelTwo: 'all',
    };
  }

  setStateAndNotify(state) {
    this.setState(state, () => this.props.onChange({
      specific: this.state.specific,
      levelOne: this.state.levelOne,
      levelTwo: this.state.levelTwo,
    }));
  }

  setStatusStyle() {
    if (this.state.specific) {
      return undefined;
    }
    if (this.state.levelOne !== 'all' && this.state.levelTwo !== 'all') {
      if (parseInt(this.state.levelOne, 10) > parseInt(this.state.levelTwo, 10)) {
        return 'error';
      }
    }
    return undefined;
  }

  setMessageStatus() {
    if (this.state.specific) {
      return undefined;
    }
    if (this.state.levelOne !== 'all' && this.state.levelTwo !== 'all') {
      if (parseInt(this.state.levelOne, 10) > parseInt(this.state.levelTwo, 10)) {
        return 'First level must be higher than second level';
      }
    }
    return '';
  }

  handleChange(name) {
    return (event) => {
      switch (name) {
        case 'mode':
          this.setStateAndNotify({ specific: event === 'Specific' });
          break;
        case 'rangeMin':
          this.setStateAndNotify({ levelOne: event.target.value });
          break;
        case 'rangeMax':
          this.setStateAndNotify({ levelTwo: event.target.value });
          break;
        default:
      }
    };
  }

  render() {
    return (
      <div>
        <FormGroup className={styles.levelRangeLog}>
          <ControlLabel>
            <h4><Label bsStyle="primary">Level</Label></h4>
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
          <FormControl componentClass="select" onChange={this.handleChange('rangeMin')} placeholder={this.state.levelOne}>
            <option value="all">all</option>
            <option value="20">debug</option>
            <option value="30">info</option>
            <option value="40">warn</option>
            <option value="50">error</option>
            <option value="60">fatal</option>
          </FormControl>
          <Collapse className={styles.rangeMaxLogs} in={!this.state.specific} timeout={500}>
            <div>
              <FormControl componentClass="select" onChange={this.handleChange('rangeMax')} placeholder={this.state.levelTwo}>
                <option value="all">all</option>
                <option value="20">debug</option>
                <option value="30">info</option>
                <option value="40">warn</option>
                <option value="50">error</option>
                <option value="60">fatal</option>
              </FormControl>
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
