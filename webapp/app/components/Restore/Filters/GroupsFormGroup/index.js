//
 // Filters page save
 //

 import React from 'react';
 import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
 import styles from 'components/Restore/Filters/styles.css';

 /* eslint-disable react/prefer-stateless-function */
 export class GroupsFormGroup extends React.Component {
   render() {
     return (
       <FormGroup controlId="groups" bsSize="small" >
         <Col componentClass={ControlLabel} sm={2}>
           Groups :
         </Col>
         <Col sm={4}>
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
