//
// Component notifications form persistance
//

import React from 'react';
import { FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class NotificationsFormPersistance extends React.Component {
  constructor(props) {
    super(props);
    this.onChangePersistance = this.onChangePersistance.bind(this);
  }

  onChangePersistance() {
    if (this.props.persistance) {
      this.props.persistanceChange(false);
    } else {
      this.props.persistanceChange(true);
    }
  }

  render() {
    return (
      <FormGroup controlId="persistance" className={styles.form}>
        <ControlLabel>Persistance</ControlLabel>
        <Checkbox onChange={this.onChangePersistance}>Persistance</Checkbox>
      </FormGroup>
    );
  }
}

NotificationsFormPersistance.propTypes = {
  persistance: React.PropTypes.bool,
  persistanceChange: React.PropTypes.func,
};
