//
// Migration History page Status select component
//

import React from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Col
} from 'react-bootstrap';
import RadioGroup from 'components/RadioGroup';
import DatePicker from 'components/DatePicker';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class StatusSelect extends React.Component {
  render() {
    return (
      <div>
        <FormGroup className={ styles.headerModal } controlId="migrationCreateIsPlanned" bsSize="small">
          <ControlLabel>Time :</ControlLabel>
          <RadioGroup
            className={styles.isPlannedRadio}
            placeholder={'Now'}
            values={['Now', 'Planned']}
            inline
            block={false}
          />
        </FormGroup>
        <FormGroup controlId="time" className="clearfix">
          <Col sm={6}>
            <ControlLabel>Date</ControlLabel>
            <DatePicker />
          </Col>
          <Col sm={6}>
            <ControlLabel>Time</ControlLabel>
            <FormControl type="time" value={this.props.time} />
          </Col>
        </FormGroup>
      </div>
    );
  }

}
