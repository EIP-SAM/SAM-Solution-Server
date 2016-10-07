//
// Component group name form create group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from 'components/CreateGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateGroupFormGroupName extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeGroupName = this.onChangeGroupName.bind(this);
  }

  onChangeGroupName(event) {
    this.props.groupNameChange(event.target.value);
  }

  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.groupNameError !== '') {
      validationState = 'error';
      errorMessage = this.props.groupNameError;
    }

    return (
      <FormGroup controlId="groupName" className={styles.form} validationState={validationState}>
        <ControlLabel>Group name</ControlLabel>
        <FormControl type="text" value={this.props.groupName} placeholder="Enter group name" onChange={this.onChangeGroupName} />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

CreateGroupFormGroupName.propTypes = {
  groupName: React.PropTypes.string,
  groupNameError: React.PropTypes.string,
  groupNameChange: React.PropTypes.func,
};
