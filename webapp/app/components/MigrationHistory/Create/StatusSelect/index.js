//
// Migration History page Status select component
//

import React from 'react';
import {
  FormGroup,
  ControlLabel,
} from 'react-bootstrap';
import RadioGroup from 'components/RadioGroup';
import DatePicker from 'components/DatePicker';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class StatusSelect extends React.Component {
  render() {
    return (
      <FormGroup controlId="migrationCreateIsPlanned" bsSize="small">
        <ControlLabel>Time :</ControlLabel>
        <RadioGroup
          className={styles.isPlannedRadio}
          placeholder={'Now'}
          values={['Now', 'Planned']}
          inline
          block={false}
        />
        <DatePicker />
      </FormGroup>
    );
  }
}
