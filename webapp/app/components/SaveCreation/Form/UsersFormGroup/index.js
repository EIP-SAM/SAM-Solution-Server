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
    const users = this.props.listUsersState.users.map((user) => (
      { isActive: true, value: user.id, text: user.name }
    ));
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
  listUsersState: React.PropTypes.object,
  state: React.PropTypes.object,
  listUsers: React.PropTypes.func,
};
