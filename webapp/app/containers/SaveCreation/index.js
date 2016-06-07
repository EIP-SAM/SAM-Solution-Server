//
// Page create save
//

import React from 'react';
import { PageHeader, Form, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/SaveCreation/styles.css';


/* eslint-disable react/prefer-stateless-function */
export default class SaveCreation extends React.Component {

  render() {
    const users = [{ isActive: true, value: '0', text: 'User1' },
      { isActive: true, value: '1', text: 'User2' },
      { isActive: true, value: '2', text: 'User3' },
      { isActive: true, value: '3', text: 'User4' },
      { isActive: true, value: '4', text: 'User5' }];
    const usersOptions = users.map((item, index) => (
      <Option object={item} key={`item-${index}`} />
    ));

    return (
      <div>
        <PageHeader>Scheduled Save</PageHeader>
        <Form horizontal>
          <FormGroup controlId="users" className={styles.form}>
            <ControlLabel>Users</ControlLabel>
            <FormControl componentClass="select" multiple>
              {usersOptions}
            </FormControl>
          </FormGroup>

          <FormGroup controlId="date" className={styles.form}>
            <ControlLabel>Date</ControlLabel>
            <FormControl type="date" />
          </FormGroup>

          <FormGroup controlId="time" className={styles.form}>
            <ControlLabel>Time</ControlLabel>
            <FormControl type="time" />
          </FormGroup>

          <FormGroup controlId="frequency" className={styles.form}>
            <ControlLabel>Repeat</ControlLabel>
            <FormControl componentClass="select">
              <option value="0">No Repeat</option>
              <option value="1">Daily</option>
              <option value="2">Weekly</option>
              <option value="3">Monthy</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="files" className={styles.form}>
            <ControlLabel>Files</ControlLabel>
            <FormControl componentClass="select" multiple>
              <option value="">select (multiple)</option>
              <option value="">...</option>
            </FormControl>
          </FormGroup>

          <ButtonToolbar>
            <Button type="submit" bsStyle="info" className={styles.button}>Create</Button>
            <Button type="submit" className={styles.button}>Cancel</Button>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}
