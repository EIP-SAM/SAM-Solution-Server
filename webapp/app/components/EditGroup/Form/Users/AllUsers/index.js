//
// Component all users form edit group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Option from 'components/Option';
import styles from 'components/EditGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class EditGroupFormUsersAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeAllUsers = this.onChangeAllUsers.bind(this);
  }

  onChangeAllUsers(event) {
    const options = event.target.options;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push({ id: parseInt(options[i].value), name: options[i].text });
      }
    }
    this.props.preSelectedUsersOnChange(value);
  }

  render() {
    let users = [];
    let usersOption = [];

    if (this.props.users.length > 0) {
      users = this.props.users.map(user => (
        { value: user.id, text: user.name }
      ));
      usersOption = users.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }
    return (
      <FormGroup controlId="allUsers" className={styles.form} >
        <ControlLabel>All Users</ControlLabel>
        <ButtonPopover
          id="allUsers"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="Select one or several users and add them to the group using CTRL^ key"
          placement="right"
        />
        <FormControl componentClass="select" onChange={this.onChangeAllUsers} multiple>
          {usersOption}
        </FormControl>
      </FormGroup>
    );
  }
}

EditGroupFormUsersAllUsers.propTypes = {
  users: React.PropTypes.array,
  preSelectedUsersOnChange: React.PropTypes.func,
};
