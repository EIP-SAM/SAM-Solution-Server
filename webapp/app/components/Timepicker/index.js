//
// Component <Timepicker />
//

import React from 'react';
import * as ReactDOM from 'react-dom';

//
// Modules
//
import moment from 'moment';

import styles from 'components/Timepicker/styles.css';

import {
    ControlLabel
} from 'react-bootstrap';

export default class Timepicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: props.time || '00:00',
            partSelected: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.time !== this.props.time && this.props.time) {
            this.setState({
                time: nextProps.time
            });
        }
    }

    componentDidMount() {
      this.loadKeyboardEventListener(this.handleKeyboardInput.bind(this))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.time !== this.props.time && this.props.time) {
            this.setState({
                time: this.props.time
            });
        }
    }

    componentWillUnmount() {
      this.unloadKeyboardEventListener();
    }

    render() {
        const timepickerStyle = "input-group " + styles.timepickerStyle;
        const removeStyle = "glyphicon glyphicon-remove " + styles.remove;
        const formControlStyle = "form-control " + styles.timePart;
        const hourStyle = this.state.partSelected === 'hour' ? styles.selected + " " + styles.hour : styles.hour;
        const minuteStyle = this.state.partSelected === 'minute' ? styles.selected + " " + styles.hour : styles.hour;
        const timeSelectorStyle = styles.timeMenu;
        const plusStyle = "glyphicon glyphicon-arrow-up " + styles.plus;
        const minusStyle = "glyphicon glyphicon-arrow-down " + styles.minus;

        let time = this.convertTimeToArray(this.state.time);

        return (
          <span id={this.props.id} className={timepickerStyle}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <span className={timepickerStyle}>
                    <span className={formControlStyle} onClick={(e) => this.selectTimePart(e, null)}>
                        <span id="hour" className={hourStyle} onClick={(e) => this.selectTimePart(e, 'hour')}>
                            { time[0] }
                        </span>
                        <span id="separator">:</span>
                        <span id="minute" className={minuteStyle} onClick={(e) => this.selectTimePart(e, 'minute')}>
                            { time[1] }
                        </span>
                        <span className={removeStyle} onClick={this.props.handleRemove}></span>
                        <span id="time-selector" className={timeSelectorStyle}>
                            <i className={plusStyle} onClick={(e) => this.changePartTimeSelected(e, 'up')}></i>
                            <i className={minusStyle} onClick={(e) => this.changePartTimeSelected(e, 'down')}></i>
                        </span>
                    </span>
                </span>
            </span>
        );
    }

    // Convert string time into array string
    convertTimeToArray(time) {
        return time && time !== '' ? time.split(':') : ['00', '00'];
    }

    // Select time part
    selectTimePart(e, part) {
        e.stopPropagation();
        this.setState({
            partSelected: part === this.state.partSelected ? null : part,
        });
    }

    // change the selected time part by mode
    changePartTimeSelected(e, mode) {
      if (e) {
        e.stopPropagation();
      }
      const defaultTime = this.state.time || '00:00';

      if (this.state.partSelected && defaultTime) {
          let time = JSON.parse(JSON.stringify(this.convertTimeToArray(defaultTime)));
          let value = -1;

          if (this.state.partSelected === 'hour') {
            value = parseInt(time[0]);
          } else if (this.state.partSelected === 'minute') {
            value = parseInt(time[1]);
          }

          if (value >= 0) {
            if (mode === 'up') {
              if (this.state.partSelected === 'hour') {
                value = this.handleHourLimit(value, 1)
                time[0] = this.getTwoDigitStringFromNumber(value);
              } else if (this.state.partSelected === 'minute') {
                value = this.handleMinuteLimit(value, 1)
                time[1] = this.getTwoDigitStringFromNumber(value)
              }
            } else if (mode === 'down') {
              if (this.state.partSelected === 'hour') {
                value = this.handleHourLimit(value, -1)
                time[0] = this.getTwoDigitStringFromNumber(value);
              } else if (this.state.partSelected === 'minute') {
                value = this.handleMinuteLimit(value, -1)
                time[1] = this.getTwoDigitStringFromNumber(value)
              }
            }
            this.props.updateTimeCallback(time[0] + ":" + time[1]);
          }
      }
    }

    // Handle hour max and min limit
    handleHourLimit(time, toAdd) {
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
    handleMinuteLimit(time, toAdd) {
        const min = 0;
        const max = 60;

        if (time + toAdd >= max) {
            return min;
        } else if (time + toAdd < min) {
            return max - 1;
        }

        return time + toAdd;
    }

    // Return time part in 2 digits number
    getTwoDigitStringFromNumber(number) {
        return number > 9 ? number.toString() : "0" + number.toString();
    }

    // Handle keyborad input on time part
    handleKeyboardInput(key) {
      let time = this.convertTimeToArray(this.state.time);

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
              partSelected: this.state.partSelected === 'hour' ? 'minute' : 'hour'
            })
          } else {
            this.setState({
              partSelected: 'minute'
            })
          }
          break;
        }
        case 'ArrowRight':
        {
          if (this.state.partSelected !== null) {
            this.setState({
              partSelected: this.state.partSelected === 'hour' ? 'minute' : 'hour'
            })
          } else {
            this.setState({
              partSelected: 'hour'
            })
          }
          break;
        }
        default:
        {
          break;
        }

      }
    }

    // Add keyboard event listener to Timepicker
    loadKeyboardEventListener(handleKeyboardInput) {
        $(window).on('keydown', function(event) {
          handleKeyboardInput(event.key);
        });
    }

    // Remove keyboard event listener from Timepicker
    unloadKeyboardEventListener() {
      $(window).off('keydown');
    }
}

Timepicker.propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    time: React.PropTypes.string,
    format: React.PropTypes.string,
    updateTimeCallback: React.PropTypes.func,
    handleRemove: React.PropTypes.func
};
