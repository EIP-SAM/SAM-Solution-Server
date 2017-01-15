/* globals $:false */

//
// Component <Timepicker />
//

import React from 'react';

import styles from 'components/Timepicker/styles.css';

import {
    ControlLabel,
} from 'react-bootstrap';

const moment = require('moment');

export default class Timepicker extends React.Component {

  // Return time part in 2 digits number
  static getTwoDigitStringFromNumber(number) {
    return number > 9 ? number.toString() : `0${number.toString()}`;
  }

  // Convert string time into array string
  static convertTimeToArray(time) {
    return time && time !== '' ? time.split(':') : ['00', '00'];
  }

  // Handle hour max and min limit
  static handleHourLimit(time, toAdd) {
    const min = 0;
    const max = 24;

    if (time + toAdd >= max) {
      return min;
    } else if (time + toAdd < min) {
      return max - 1;
    }

    return time + toAdd;
  }

  // Handle minute max and min limit
  static handleMinuteLimit(time, toAdd) {
    const min = 0;
    const max = 60;

    if (time + toAdd >= max) {
      return min;
    } else if (time + toAdd < min) {
      return max - 1;
    }

    return time + toAdd;
  }

  // Add keyboard event listener to Timepicker
  static loadKeyboardEventListener(handleKeyboardInput) {
    $(window).on('keydown', (event) => {
      handleKeyboardInput(event.key);
    });
  }

  // Remove keyboard event listener from Timepicker
  static unloadKeyboardEventListener() {
    $(window).off('keydown');
  }

  constructor(props) {
    super(props);

    this.state = {
      time: props.time || '00:00',
      partSelected: null,
      isDisabled: props.isDisabled || false,
    };
  }

  componentDidMount() {
    if (!this.state.isDisabled) {
      Timepicker.loadKeyboardEventListener(this.handleKeyboardInput.bind(this));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.time !== this.props.time && this.props.time) {
      this.setState({
        time: nextProps.time,
      });
    }
  }

  componentWillUnmount() {
    if (!this.state.isDisabled) {
      Timepicker.unloadKeyboardEventListener();
    }
  }

  // change the selected time part by mode
  changePartTimeSelected(e, mode) {
    if (e) {
      e.stopPropagation();
    }
    const defaultTime = this.state.time || '00:00';

    if (this.state.partSelected && defaultTime) {
      const time = JSON.parse(JSON.stringify(Timepicker.convertTimeToArray(defaultTime)));
      let value = -1;

      if (this.state.partSelected === 'hour') {
        value = parseInt(time[0], 10);
      } else if (this.state.partSelected === 'minute') {
        value = parseInt(time[1], 10);
      }

      if (value >= 0) {
        if (mode === 'up') {
          if (this.state.partSelected === 'hour') {
            value = Timepicker.handleHourLimit(value, 1);
            time[0] = Timepicker.getTwoDigitStringFromNumber(value);
          } else if (this.state.partSelected === 'minute') {
            value = Timepicker.handleMinuteLimit(value, 1);
            time[1] = Timepicker.getTwoDigitStringFromNumber(value);
          }
        } else if (mode === 'down') {
          if (this.state.partSelected === 'hour') {
            value = Timepicker.handleHourLimit(value, -1);
            time[0] = Timepicker.getTwoDigitStringFromNumber(value);
          } else if (this.state.partSelected === 'minute') {
            value = Timepicker.handleMinuteLimit(value, -1);
            time[1] = Timepicker.getTwoDigitStringFromNumber(value);
          }
        }

        const stringValue = `${time[0]}:${time[1]}`;

        if (!moment(stringValue, ['h:mm A']).isValid()) {
          this.props.updateTimeCallback('');
        } else {
          this.props.updateTimeCallback(moment(stringValue, ['h:mm A']).format('HH:mm'));
        }
      }
    }
  }

  // Select time part
  selectTimePart(e, part) {
    e.stopPropagation();
    this.setState({
      partSelected: part === this.state.partSelected ? null : part,
    });
  }

    // Handle keyborad input on time part
  handleKeyboardInput(key) {
    switch (key) {
      case 'ArrowUp':
        {
          if (this.state.partSelected === 'hour' || this.state.partSelected === 'minute') {
            this.changePartTimeSelected(null, 'up');
          }
          break;
        }
      case 'ArrowDown':
        {
          if (this.state.partSelected === 'hour' || this.state.partSelected === 'minute') {
            this.changePartTimeSelected(null, 'down');
          }
          break;
        }
      case 'ArrowLeft':
        {
          if (this.state.partSelected !== null) {
            this.setState({
              partSelected: this.state.partSelected === 'hour' ? 'minute' : 'hour',
            });
          } else {
            this.setState({
              partSelected: 'minute',
            });
          }
          break;
        }
      case 'ArrowRight':
        {
          if (this.state.partSelected !== null) {
            this.setState({
              partSelected: this.state.partSelected === 'hour' ? 'minute' : 'hour',
            });
          } else {
            this.setState({
              partSelected: 'hour',
            });
          }
          break;
        }
      default:
        {
          break;
        }

    }
  }

  render() {
    const timepickerBlockStyle = `input-group ${styles.timepickerStyle}`;
    const timepickerBodyStyle = this.state.isDisabled ? `${timepickerBlockStyle} ${styles.disabled}` : timepickerBlockStyle;
    const formControlStyle = !this.state.isDisabled ? `form-control ${styles.timePart}` : `form-control ${styles.timePart} ${styles.disabled}`;
    const removeStyle = `glyphicon glyphicon-remove ${styles.remove}`;
    const hourStyle = !this.state.isDisabled ? (this.state.partSelected === 'hour' ? `${styles.selected} ${styles.hour}` : styles.hour) : styles.hour;
    const minuteStyle = !this.state.isDisabled ? (this.state.partSelected === 'minute' ? `${styles.selected} ${styles.hour}` : styles.hour) : styles.hour;
    const timeSelectorStyle = styles.timeMenu;
    const plusStyle = `glyphicon glyphicon-arrow-up ${styles.plus}`;
    const minusStyle = `glyphicon glyphicon-arrow-down ${styles.minus}`;

    const time = Timepicker.convertTimeToArray(this.state.time);

    const timeButton = !this.state.isDisabled ? (
      <div>
        <span className={removeStyle} onClick={this.props.handleRemove} />
        <span id="time-selector" className={timeSelectorStyle}>
          <i className={plusStyle} onClick={e => this.changePartTimeSelected(e, 'up')} />
          <i className={minusStyle} onClick={e => this.changePartTimeSelected(e, 'down')} />
        </span>
      </div>
        ) : null;

    return (
      <span id={this.props.id} className={timepickerBlockStyle}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <span className={timepickerBodyStyle}>
          <span className={formControlStyle} onClick={e => this.selectTimePart(e, null)}>
            <span id="hour" className={hourStyle} onClick={e => this.selectTimePart(e, 'hour')}>
              {time[0]}
            </span>
            <span id="separator">:</span>
            <span id="minute" className={minuteStyle} onClick={e => this.selectTimePart(e, 'minute')}>
              {time[1]}
            </span>
            {timeButton}
          </span>
        </span>
      </span>
    );
  }
}

Timepicker.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  time: React.PropTypes.string,
  updateTimeCallback: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func,
  isDisabled: React.PropTypes.bool,
};
