//
// Component notifications form title
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class NotificationsFormTitle extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  onChangeTitle(event) {
    this.props.titleChange(event.target.value);
  }

  render() {
    return (
      <FormGroup controlId="title" className={styles.form}>
        <ControlLabel>Title</ControlLabel>
        <FormControl type="textarea" value={this.props.title} placeholder="Enter title" onChange={this.onChangeTitle} />
      </FormGroup>
    );
  }
}

NotificationsFormTitle.propTypes = {
  title: React.PropTypes.string,
  titleChange: React.PropTypes.func,
};
