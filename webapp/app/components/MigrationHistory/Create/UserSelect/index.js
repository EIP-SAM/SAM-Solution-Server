//
// Migration History page User select component
//

import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class UserSelect extends React.Component {
  componentWillMount() {
    this.props.getAllUsers();
  }

  onChange(options) {
    const userId = options[options.selectedIndex].value;
    this.props.setSelectedUser(parseInt(userId, 10));
  }

  getSelectedValue() {
    return (this.props.userId) ? [this.props.userId.toString()] : [];
  }

  render() {
    const users = (this.props.users) ? this.props.users : [];

    return (
      <FormGroup controlId="selectUser">
        <ControlLabel>User:</ControlLabel>
        <FormControl
          componentClass="select"
          multiple
          onChange={e => this.onChange(e.target.options)}
          value={this.getSelectedValue()}
        >
          {users.map((user, index) => (
            <option key={index} value={user.id}>
              {user.name}
            </option>
        ))}
        </FormControl>
      </FormGroup>
    );
  }
}

UserSelect.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object),
  userId: React.PropTypes.number,
  getAllUsers: React.PropTypes.func,
  setSelectedUser: React.PropTypes.func,
};
