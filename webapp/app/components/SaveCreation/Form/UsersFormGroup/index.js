//
// UsersFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Option from 'components/Option';
import { isAdmin } from 'utils/user';
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
    if (!isAdmin()) {
      return (<div></div>);
    }

    let validationState = '';
    let errorMessage = '';

    if (this.props.state.userError !== '') {
      validationState = 'error';
      errorMessage = this.props.state.userError;
    }

    const usersOptions = this.props.state.users.map((item, index) => (
      <Option object={item} key={`item-${index}`} />
    ));

    return (
      <FormGroup controlId="users" className={styles.form} validationState={validationState}>
        <ControlLabel>Users</ControlLabel>
        <FormControl componentClass="select" multiple>
          {usersOptions}
        </FormControl>
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

SaveCreationUsersFormGroup.propTypes = {
  listUsersState: React.PropTypes.object,
  state: React.PropTypes.object,
  listUsers: React.PropTypes.func,
};
