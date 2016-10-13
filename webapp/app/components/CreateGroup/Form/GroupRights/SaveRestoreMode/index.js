//
// Component save & restore mode group rights form create group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import styles from 'components/CreateGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateGroupFormGroupRightsSaveRestoreMode extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSaveAndRestoreMode = this.onChangeSaveAndRestoreMode.bind(this);
  }

  componentWillMount() {
    this.props.saveRestoreModeChange(1);
  }

  onChangeSaveAndRestoreMode(event) {
    this.props.saveRestoreModeChange(Number(event.target.value));
  }

  render() {
    return (
      <FormGroup controlId="saveAndRestoreMode" className={styles.form}>
        <ControlLabel>Save and restore mode</ControlLabel>
        <FormControl componentClass="select" onChange={this.onChangeSaveAndRestoreMode}>
          <option value="1">Simple</option>
          <option value="2">Advanced</option>
        </FormControl>
      </FormGroup>
    );
  }
}

CreateGroupFormGroupRightsSaveRestoreMode.propTypes = {
  saveRestoreModeChange: React.PropTypes.func,
};
