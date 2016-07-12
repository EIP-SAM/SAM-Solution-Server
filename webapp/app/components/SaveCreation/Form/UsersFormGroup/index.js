//
// UsersFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationUsersFormGroup extends React.Component {
  componentDidMount() {
    const usersSave = this.props.data.map((save) => (
      { isActive: true, value: save.save_scheduled.user.id, text: save.save_scheduled.user.name }
    ));

    const users = [];
    for (let i = 0; i < usersSave.length; i++) {
      const current = usersSave[i];
      for (let j = 0; j < users.length; j++) {
        if (users[j].value !== current.value) {
          users.push(current);
          break;
        }
      }
      if (users.length === 0) {
        users.push(current);
      }
    }

    this.props.listUsers(users);
  }

  render() {
    const usersOptions = this.props.state.users.map((item, index) => (
      <Option object={item} key={`item-${index}`} />
    ));

    return (
      <FormGroup controlId="users" className={styles.form}>
        <ControlLabel>Users</ControlLabel>
        <FormControl componentClass="select" multiple>
          {usersOptions}
        </FormControl>
      </FormGroup>
    );
  }
}

SaveCreationUsersFormGroup.propTypes = {
  data: React.PropTypes.array,
  state: React.PropTypes.object,
  listUsers: React.PropTypes.func,
};
