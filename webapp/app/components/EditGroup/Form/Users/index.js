//
// Component users form edit group
//

import React from 'react';
import { Col } from 'react-bootstrap';
import AllUsers from 'containers/EditGroup/Form/Users/AllUsers';
import SelectedUsers from 'containers/EditGroup/Form/Users/SelectedUsers';
import Buttons from 'containers/EditGroup/Form/Users/Buttons';
import styles from 'components/EditGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class EditGroupFormUsers extends React.Component {
  componentWillMount() {
    const name = window.location.pathname.split('/')[2];
    this.props.getUsersRequest(name);
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

EditGroupFormUsers.propTypes = {
  getUsersRequest: React.PropTypes.func,
};
