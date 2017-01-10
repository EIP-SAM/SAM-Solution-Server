import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styles from 'components/RestoreCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class RestoreCreationUser extends React.Component {
  render() {
    if (!this.props.userInfo.isAdmin) {
      return (<div />);
    }

    const user = this.props.username;
    return (
      <FormGroup controlId="users" className={styles.form}>
        <ControlLabel>User</ControlLabel>
        <FormControl type="text" value={user} disabled />
      </FormGroup>
    );
  }
}

RestoreCreationUser.propTypes = {
  userInfo: React.PropTypes.object,
  username: React.PropTypes.string,
};
