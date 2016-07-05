import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/RestoreCreation/styles.css';

export class RestoreCreationForm extends React.Component {
  constructor(props){
    super(props);
  }

  onChangeUser(event){
    console.log(this.props);
    console.log(event.target.value);
  }

  render () {
    let data = this.props.data;
    if (typeof data === 'undefined') {
      data = [];
    }
    var users = [];
    var i = 0;
    data.forEach(function() {
        users.push({isActive: false, value: data[i].id, text: data[i].name}  );
        i++;
    });

    var usersOptions = users.map((item, index) => (
      <Option object={item} key={`item-${index}`} />
    ));


    return (
      <Form horizontal>
        <FormGroup controlId="users" className={styles.form}>
          <ControlLabel>Users</ControlLabel>
          <FormControl componentClass="select" multiple  onChange={this.onChangeUser}>
            {usersOptions}
          </FormControl>
        </FormGroup>
        <FormGroup controlId="frequency" className={styles.form}>
          <ControlLabel>Select a save</ControlLabel>
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
          <Button type="submit" bsStyle="info" className={styles.button}>Restore</Button>
          <Button type="submit" className={styles.button}>Cancel</Button>
        </ButtonToolbar>
      </Form>
    );
  }
};

RestoreCreationForm.propTypes = {
  data: React.PropTypes.array,
};
