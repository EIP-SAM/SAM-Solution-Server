//
// Component group name form edit group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from 'components/EditGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class EditGroupFormGroupName extends React.Component {
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

EditGroupFormGroupName.propTypes = {
  groupName: React.PropTypes.string,
  groupNameError: React.PropTypes.string,
  groupNameChange: React.PropTypes.func,
};
