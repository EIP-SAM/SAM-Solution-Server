//
// Radio button type user filters page save
//

import React from 'react';
import { ControlLabel, FormGroup, Col } from 'react-bootstrap';
import RadioGroup from 'components/RadioGroup';
import styles from 'components/Save/Filters/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class TypeUserFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.selectTypeUser = this.selectTypeUser.bind(this);
  }

  selectTypeUser(e) {
    // console.log("TypeView------listGroupsUsers-------");
    // console.log(this.props.listGroupsUsers);
    // console.log("TypeView-----listGroupsUsers-------");
    // console.log("TypeView------listTypeUsers-------");
    // console.log(this.props.listTypeUsers);
    // console.log("TypeView-----listTypeUsers-------");
    // console.log("TypeView-----listUsers-------");
    // console.log(this.props.listUsers);
    // console.log("TypeView-----listUsers-------");
    this.props.getVisibilityFilter(e, this.props.listGroupsUsers, this.props.listTypeUsers, this.props.listUsers);
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

TypeUserFormGroup.propTypes = {
  listTypeUsers: React.PropTypes.array,
  listGroupsUsers: React.PropTypes.array,
  getVisibilityFilter: React.PropTypes.func,
};
