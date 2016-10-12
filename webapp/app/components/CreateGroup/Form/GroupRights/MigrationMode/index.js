//
// Component migration mode group rights form create group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import styles from 'components/CreateGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateGroupFormGroupRightsMigrationMode extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeMigrationMode = this.onChangeMigrationMode.bind(this);
  }

  componentWillMount() {
    this.props.migrationModeChange(1);
  }

  onChangeMigrationMode(event) {
    this.props.migrationModeChange(Number(event.target.value));
  }

  render() {
    return (
      <FormGroup controlId="migrationMode" className={styles.form}>
        <ControlLabel>Migration mode</ControlLabel>
        <FormControl componentClass="select" onChange={this.onChangeMigrationMode}>
          <option value="1">Simple</option>
          <option value="2">Advanced</option>
        </FormControl>
      </FormGroup>
    );
  }
}

CreateGroupFormGroupRightsMigrationMode.propTypes = {
  migrationModeChange: React.PropTypes.func,
};
