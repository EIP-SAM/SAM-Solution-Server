//
// Radio button type user filters page save
//

import React from 'react';
import { FormGroup, Radio, ControlLabel, Col } from 'react-bootstrap';
import styles from 'components/Restore/Filters/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class TypeUserFormGroup extends React.Component {
  render() {
    return (
      <FormGroup controlId="type_user" bsSize="small" className={styles.radioButtons}>
        <Col componentClass={ControlLabel} sm={1}>
           Type of user :
        </Col>
        <Col sm={3}>
          <Radio inline checked>
             All
          </Radio>
          <Radio inline>
             Admins
          </Radio>
          <Radio inline>
           Users
          </Radio>
        </Col>
      </FormGroup>
   );
  }
}

TypeUserFormGroup.propTypes = {
};
