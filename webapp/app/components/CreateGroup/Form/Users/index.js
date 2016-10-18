//
// Component users form create group
//

import React from 'react';
import { Col } from 'react-bootstrap';
import AllUsers from 'containers/CreateGroup/Form/Users/AllUsers';
import SelectedUsers from 'containers/CreateGroup/Form/Users/SelectedUsers';
import Buttons from 'containers/CreateGroup/Form/Users/Buttons';

/* eslint-disable react/prefer-stateless-function */
export class CreateGroupFormUsers extends React.Component {

  render() {
    return (
      <div>
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
