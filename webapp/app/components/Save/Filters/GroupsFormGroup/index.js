//
// Filters page save
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import styles from 'components/Save/Filters/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class GroupsFormGroup extends React.Component {
  render() {
    return (
      <FormGroup controlId="groups" bsSize="small">
        <Col componentClass={ControlLabel} sm={1}>
          Groups :
        </Col>
        <Col sm={2}>
          <FormControl componentClass="select" className={styles.select}>
            <option value="0">All Groups</option>
          </FormControl>
        </Col>
      </FormGroup>
    );
  }
}

GroupsFormGroup.propTypes = {
};
