//
// Radio button type user filters page save
//

import React from 'react';
import { ControlLabel, FormGroup, Col } from 'react-bootstrap';
import RadioGroup from 'components/RadioGroup';
import styles from 'components/Restore/Filters/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class TypeUserFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.selectTypeUser = this.selectTypeUser.bind(this);
  }
  selectTypeUser(e) {
    this.props.getVisibilityFilter(e);
  }

  render() {
    return (
      <FormGroup controlId="type_user" bsSize="small" className={styles.radioButtons}>
        <Col componentClass={ControlLabel} sm={2}>
           Type of user :
        </Col>
        <Col sm={4}>
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
  getVisibilityFilter: React.PropTypes.func,
};
