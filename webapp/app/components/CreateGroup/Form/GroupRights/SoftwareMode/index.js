//
// Component software mode group rights form create group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import styles from 'components/CreateGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class CreateGroupFormGroupRightsSoftwareMode extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSoftwareMode = this.onChangeSoftwareMode.bind(this);
  }

  componentWillMount() {
    this.props.softwareModeChange(1);
  }

  onChangeSoftwareMode(event) {
    this.props.softwareModeChange(Number(event.target.value));
  }

  render() {
    return (
      <FormGroup controlId="softwareMode" className={styles.form}>
        <ControlLabel>Software packages mode</ControlLabel>
        <FormControl componentClass="select" onChange={this.onChangeSoftwareMode}>
          <option value="1">Simple</option>
          <option value="2">Advanced</option>
        </FormControl>
      </FormGroup>
    );
  }
}

CreateGroupFormGroupRightsSoftwareMode.propTypes = {
  softwareModeChange: React.PropTypes.func,
};
