//
// Component notifications form title
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsFormTitle extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  onChangeTitle(event) {
    this.props.titleChange(event.target.value);
  }

  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.titleError !== '') {
      validationState = 'error';
      errorMessage = this.props.titleError;
    }
    return (
      <FormGroup controlId="title" className={styles.form} validationState={validationState}>
        <ControlLabel>Title</ControlLabel>
        <FormControl type="textarea" value={this.props.title} placeholder="Enter title" onChange={this.onChangeTitle} />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

NotificationsFormTitle.propTypes = {
  title: React.PropTypes.string,
  titleChange: React.PropTypes.func,
  titleError: React.PropTypes.string,
};
