
//
// Stats
//

import React from 'react';
import { PageHeader, Nav, NavItem } from 'react-bootstrap';

export default class StatsContainer extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Stats</PageHeader>
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem>General</NavItem>
          <NavItem>Save</NavItem>
          <NavItem>Restore</NavItem>
          <NavItem>Migration</NavItem>
          <NavItem>Software</NavItem>
          <NavItem>Users</NavItem>
        </Nav>
      </div>
    );
  }
}
