//
// Component notifications form description
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
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
    let validationState = null;
    let errorMessage = '';

    if (this.props.descriptionError !== '') {
      validationState = 'error';
      errorMessage = this.props.descriptionError;
    }
    return (
      <FormGroup controlId="description" className={styles.form} validationState={validationState}>
        <ControlLabel>Description</ControlLabel>
        <FormControl type="textarea" value={this.props.description} placeholder="Enter description" onChange={this.onChangeDescription} />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

NotificationsFormDescription.propTypes = {
  description: React.PropTypes.string,
  descriptionChange: React.PropTypes.func,
  descriptionError: React.PropTypes.string,
};
