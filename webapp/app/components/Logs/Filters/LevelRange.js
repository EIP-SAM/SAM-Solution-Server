//
// Component displaying level filter inputs
//

import React from 'react';
import RadioGroup from 'components/RadioGroup';
import styles from './styles.css';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Label,
} from 'react-bootstrap';

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

  getLevelSelects() {
    if (this.state.specific) {
      return (
        <FormControl componentClass="select" onChange={this.handleChange('specific')} placeholder={this.state.levelOne}>
          <option value="all">all</option>
          <option value="20">debug</option>
          <option value="30">info</option>
          <option value="40">warn</option>
          <option value="50">error</option>
          <option value="60">fatal</option>
        </FormControl>
      );
    }
    return (
      <div>
        <FormControl componentClass="select" onChange={this.handleChange('rangeMin')} placeholder={this.state.levelOne}>
          <option value="all">all</option>
          <option value="20">debug</option>
          <option value="30">info</option>
          <option value="40">warn</option>
          <option value="50">error</option>
          <option value="60">fatal</option>
        </FormControl>
        <div className={styles.rangeMaxLogs}>
          <FormControl componentClass="select" onChange={this.handleChange('rangeMax')} placeholder={this.state.levelTwo}>
            <option value="all">all</option>
            <option value="20">debug</option>
            <option value="30">info</option>
            <option value="40">warn</option>
            <option value="50">error</option>
            <option value="60">fatal</option>
          </FormControl>
        </div>
      </div>
    );
  }

  setStateAndNotify(state) {
    this.setState(state, () => this.props.onChange({
      specific: this.state.specific,
      levelOne: this.state.levelOne,
      levelTwo: this.state.levelTwo,
    }));
  }

  handleChange(name) {
    return event => {
      switch (name) {
        case 'mode':
          this.setStateAndNotify({ specific: event === 'Specific' });
          break;
        case 'specific':
          this.setStateAndNotify({ levelOne: event.target.value });
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
    const levelSelects = this.getLevelSelects();

    return (
      <FormGroup>
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
        {levelSelects}
      </FormGroup>
    );
  }
}

DateRange.propTypes = {
  onChange: React.PropTypes.func,
};
