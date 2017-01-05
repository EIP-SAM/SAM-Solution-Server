//
// Radio button type user filters page save
//

import React from 'react';
import { ControlLabel, FormGroup, Col } from 'react-bootstrap';
import RadioGroup from 'components/RadioGroup';
import styles from 'components/Save/Filters/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveFiltersTypeUser extends React.Component {
  constructor(props) {
    super(props);
    this.selectTypeUser = this.selectTypeUser.bind(this);
  }

  selectTypeUser(e) {
    this.props.getCurrentTypeUser(e);
    this.props.filterUsers(e, this.props.currentGroup, this.props.allUsers);
  }

  render() {
    return (
      <FormGroup controlId="type_user" bsSize="small" className={styles.radioButtons}>
        <Col componentClass={ControlLabel} sm={2}>
           Type of user :
        </Col>
        <Col sm={6}>
          <RadioGroup
            inline
            values={['All', 'Admins', 'Users']}
            placeholder="All"
            onChange={this.selectTypeUser}
          />
        </Col>
      </FormGroup>
    );
  }
}

SaveFiltersTypeUser.propTypes = {
  currentGroup: React.PropTypes.string,
  allUsers: React.PropTypes.array,
  getCurrentTypeUser: React.PropTypes.func,
  filterUsers: React.PropTypes.func,
};
