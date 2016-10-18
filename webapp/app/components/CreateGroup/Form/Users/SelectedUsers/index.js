//
// Component selected users form create group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Option from 'components/Option';
import styles from 'components/CreateGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateGroupFormSelectedUsers extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSelectedUsers = this.onChangeSelectedUsers.bind(this);
  }

  onChangeSelectedUsers(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <FormGroup controlId="selectedUsers" className={styles.form} >
        <ControlLabel>Selected Users</ControlLabel>
        <ButtonPopover
          id="selectedUsers"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="Select one or several users and remove them from the group"
          placement="right"
        />
        <FormControl componentClass="select" onChange={this.onChangeSelectedUsers} multiple>
          <Option object={{ value: 1, text: 'Users 1' }} key={'item-1'} />
          <Option object={{ value: 2, text: 'Users 2' }} key={'item-2'} />
          <Option object={{ value: 3, text: 'Users 3' }} key={'item-3'} />
        </FormControl>
      </FormGroup>
    );
  }
}
