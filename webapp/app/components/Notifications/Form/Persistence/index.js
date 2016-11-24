//
// Component notifications form persistence
//

import React from 'react';
import { FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class NotificationsFormPersistence extends React.Component {
  constructor(props) {
    super(props);
    this.onChangePersistence = this.onChangePersistence.bind(this);
  }

  onChangePersistence() {
    if (this.props.persistence) {
      this.props.persistenceChange(false);
    } else {
      this.props.persistenceChange(true);
    }
  }

  render() {
    return (
      <FormGroup controlId="persistence" className={styles.form}>
        <ControlLabel>Persistence</ControlLabel>
        <ButtonPopover
          id="persistence"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="If persistence is not checked, it will send the notification to the connected users only. Else, it will send the notifications to all the users (not connected users will receive it on their next connexion)"
          placement="right"
        />
        <Checkbox onChange={this.onChangePersistence}>Persistence</Checkbox>
      </FormGroup>
    );
  }
}

NotificationsFormPersistence.propTypes = {
  persistence: React.PropTypes.bool,
  persistenceChange: React.PropTypes.func,
};
