//
// Component groups form page edit user
//

import React from 'react';
import { ControlLabel, FormGroup, Col } from 'react-bootstrap';
import RadioGroup from 'components/RadioGroup';
import styles from 'components/EditUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class EditUserFormGroups extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeGroups = this.onChangeGroups.bind(this);
  }

  onChangeGroups(changedGroup, event) {
    const userGroups = this.props.userGroups;
    if (event === 'out') {
      const i = this.props.userGroups.map(group => (group)).indexOf(changedGroup);
      if (i !== -1) {
        userGroups.splice(i, 1);
      }
    } else if (event === 'in') {
      const i = this.props.userGroups.map(group => (group)).indexOf(changedGroup);
      if (i === -1) {
        userGroups.push(changedGroup);
      }
    }
    this.props.getUserGroups(userGroups);
  }

  render() {
    let groupsForm = [];

    if (this.props.allGroups) {
      groupsForm = this.props.allGroups.map((group, i) => (
        <Col key={i} xs={12}>
          <p className={styles.editUserName}>{group}</p>
          <RadioGroup inline id={group} values={['in', 'out']} placeholder={this.props.userGroups.map(userGroup => (userGroup)).indexOf(group) !== -1 ? 'in' : 'out'} onChange={event => this.onChangeGroups(group, event)} />
        </Col>
        ));
    }

    return (
      <FormGroup controlId="groups" className={styles.form}>
        <ControlLabel>Groups</ControlLabel>
        {groupsForm}
      </FormGroup>
    );
  }
}

EditUserFormGroups.propTypes = {
  allGroups: React.PropTypes.arrayOf(React.PropTypes.string),
  userGroups: React.PropTypes.arrayOf(React.PropTypes.string),
  getUserGroups: React.PropTypes.func,
};
