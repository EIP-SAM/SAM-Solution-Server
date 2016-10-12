//
// UsersFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationUsers extends React.Component {
  render() {
    if (!this.props.userInfo.isAdmin) {
      return (<div></div>);
    }

    let validationState = null;
    let errorMessage = '';

    if (this.props.userError !== '') {
      validationState = 'error';
      errorMessage = this.props.userError;
    }

    const usersOptions = this.props.users.map((user, index) => {
      const item = { isActive: true, value: user.id, text: user.name };
      return (<Option object={item} key={`item-${index}`} />);
    });

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

SaveCreationUsers.propTypes = {
  userInfo: React.PropTypes.object,
  users: React.PropTypes.array,
  listAllUsers: React.PropTypes.array,
  userError: React.PropTypes.string,
  listUsers: React.PropTypes.func,
};
