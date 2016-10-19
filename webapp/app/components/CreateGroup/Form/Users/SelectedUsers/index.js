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
    const options = event.target.options;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.props.unselectedUsersOnChange(value);
  }

  render() {
    let selectedUsers = [];
    let selectedUsersOption = [];

    if (this.props.selectedUsers.length > 0) {
      selectedUsers = this.props.selectedUsers.map((username) => (
        { value: username, text: username }
      ));
      selectedUsersOption = selectedUsers.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }
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
          {selectedUsersOption}
        </FormControl>
      </FormGroup>
    );
  }
}

CreateGroupFormSelectedUsers.propTypes = {
  selectedUsers: React.PropTypes.array,
  unselectedUsersOnChange: React.PropTypes.func,
};
