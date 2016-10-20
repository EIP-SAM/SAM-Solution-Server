//
// Component notifications form description
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class NotificationsFormDescription extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
  }

  onChangeDescription(event) {
    this.props.descriptionChange(event.target.value);
  }

  render() {
    return (
      <FormGroup controlId="description" className={styles.form}>
        <ControlLabel>Description</ControlLabel>
        <FormControl type="text" value={this.props.description} placeholder="Enter description" onChange={this.onChangeDescription} />
      </FormGroup>
    );
  }
}

NotificationsFormDescription.propTypes = {
  description: React.PropTypes.string,
  descriptionChange: React.PropTypes.func,
};
