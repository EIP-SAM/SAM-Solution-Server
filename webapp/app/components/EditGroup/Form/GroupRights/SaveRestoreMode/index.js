//
// Component save & restore mode group rights form edit group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import styles from 'components/EditGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class EditGroupFormGroupRightsSaveRestoreMode extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSaveAndRestoreMode = this.onChangeSaveAndRestoreMode.bind(this);
  }

  onChangeSaveAndRestoreMode(event) {
    this.props.saveRestoreModeChange(Number(event.target.value));
  }

  render() {
    return (
      <FormGroup controlId="saveAndRestoreMode" className={styles.form}>
        <ControlLabel>Save and restore mode</ControlLabel>
        <FormControl componentClass="select" value={this.props.saveRestoreMode} onChange={this.onChangeSaveAndRestoreMode}>
          <option value="1">Simple</option>
          <option value="2">Advanced</option>
        </FormControl>
      </FormGroup>
    );
  }
}

EditGroupFormGroupRightsSaveRestoreMode.propTypes = {
  saveRestoreMode: React.PropTypes.number,
  saveRestoreModeChange: React.PropTypes.func,
};
