import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styles from 'components/RestoreCreation/styles.css';

export class RestoreCreationUserFormGroup extends React.Component {
  componentDidMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.nameUser(username);
  }

  render() {
    const user = this.props.state.user;
    return (
      <FormGroup controlId="users" className={styles.form}>
        <ControlLabel>User</ControlLabel>
        <FormControl type="text" placeholder={ user } disabled />
      </FormGroup>
    )
  }
}

RestoreCreationUserFormGroup.propTypes = {
  state: React.PropTypes.object,
  nameUser: React.PropTypes.func,
}
