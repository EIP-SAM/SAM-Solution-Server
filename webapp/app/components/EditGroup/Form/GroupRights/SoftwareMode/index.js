//
// Component software mode group rights form edit group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import styles from 'components/EditGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class EditGroupFormGroupRightsSoftwareMode extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSoftwareMode = this.onChangeSoftwareMode.bind(this);
  }

  onChangeSoftwareMode(event) {
    this.props.softwareModeChange(Number(event.target.value));
  }

  render() {
    return (
      <FormGroup controlId="softwareMode" className={styles.form}>
        <ControlLabel>Software packages mode</ControlLabel>
        <FormControl componentClass="select" value={this.props.softwareMode} onChange={this.onChangeSoftwareMode}>
          <option value="1">Simple</option>
          <option value="2">Advanced</option>
        </FormControl>
      </FormGroup>
    );
  }
}

EditGroupFormGroupRightsSoftwareMode.propTypes = {
  softwareMode: React.PropTypes.number,
  softwareModeChange: React.PropTypes.func,
};
