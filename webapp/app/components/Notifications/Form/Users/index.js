//
// Component users form notifications
//

import React from 'react';
import { Col } from 'react-bootstrap';
import AllUsers from 'containers/Notifications/Form/Users/AllUsers';
import SelectedUsers from 'containers/Notifications/Form/Users/SelectedUsers';
import Buttons from 'containers/Notifications/Form/Users/Buttons';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class NotificationsFormUsers extends React.Component {
  componentWillMount() {
    this.props.getUsersRequest();
  }

  render() {
    return (
      <div className={styles.users}>
        <Col lg={5} md={5} sm={5} xs={5}>
          <AllUsers />
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <Buttons />
        </Col>
        <Col lg={5} md={5} sm={5} xs={5}>
          <SelectedUsers />
        </Col>
      </div>
    );
  }
}

NotificationsFormUsers.propTypes = {
  getUsersRequest: React.PropTypes.func,
};
