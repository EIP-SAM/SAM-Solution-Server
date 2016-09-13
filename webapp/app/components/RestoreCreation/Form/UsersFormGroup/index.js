import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { isAdmin } from 'utils/user';
import styles from 'components/RestoreCreation/styles.css';

export class RestoreCreationUserFormGroup extends React.Component {
  render() {
    if (!isAdmin()) {
      return (<div></div>);
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

RestoreCreationUserFormGroup.propTypes = {
  username: React.PropTypes.string,
};
