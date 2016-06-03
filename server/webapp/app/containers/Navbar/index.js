//
// Navbar
//

import React from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import Logo from './logo_sam_solution.png';
import styles from 'components/Navbar/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NavbarContainer extends React.Component {

  render() {
    return (
      <Navbar pullLeft inverse className={styles.position}>
        <Navbar.Header className={styles.noFloat}>
          <Navbar.Brand className={styles.noFloat}>
            <Image src={Logo} responsive className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className={styles.collapse}>
          <Nav className={styles.menu}>
            <NavItem eventKey={1} href="#" className={styles.menuItem}>Users</NavItem>
            <NavItem eventKey={2} href="#" className={styles.menuItem}>Save</NavItem>
            <NavItem eventKey={3} href="#" className={styles.menuItem}>Restore</NavItem>
            <NavItem eventKey={4} href="#" className={styles.menuItem}>Logs</NavItem>
            <NavItem eventKey={5} href="#" className={styles.menuItem}>Statistics</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
