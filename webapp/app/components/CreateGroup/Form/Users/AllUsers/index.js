//
// Component all users form create group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Option from 'components/Option';
import styles from 'components/CreateGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateGroupFormAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeAllUsers = this.onChangeAllUsers.bind(this);
  }

  onChangeAllUsers(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <FormGroup controlId="allUsers" className={styles.form} >
        <ControlLabel>All Users</ControlLabel>
        <ButtonPopover
          id="allUsers"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="Select one or several users and add them to the group"
          placement="right"
        />
        <FormControl componentClass="select" onChange={this.onChangeAllUsers} multiple>
          <Option object={{ value: 1, text: 'Users 1' }} key={'item-1'} />
          <Option object={{ value: 2, text: 'Users 2' }} key={'item-2'} />
          <Option object={{ value: 3, text: 'Users 3' }} key={'item-3'} />
        </FormControl>
      </FormGroup>
    );
  }
}
