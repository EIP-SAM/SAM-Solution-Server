//
// Component groups form notifications
//

import React from 'react';
import { Col } from 'react-bootstrap';
import AllGroups from 'containers/Notifications/Form/Groups/AllGroups';
import SelectedGroups from 'containers/Notifications/Form/Groups/SelectedGroups';
import Buttons from 'containers/Notifications/Form/Groups/Buttons';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsFormGroups extends React.Component {
  componentWillMount() {
    this.props.getGroupsRequest();
  }

  render() {
    return (
      <div className={styles.groups}>
        <Col lg={5} md={5} sm={5} xs={5}>
          <AllGroups />
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <Buttons />
        </Col>
        <Col lg={5} md={5} sm={5} xs={5}>
          <SelectedGroups />
        </Col>
      </div>
    );
  }
}

NotificationsFormGroups.propTypes = {
  getGroupsRequest: React.PropTypes.func,
};
