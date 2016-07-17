//
// Navbar
//
import React from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from 'components/Navbar/logo_sam_solution.png';
import styles from 'components/Navbar/styles.css';
/* eslint-disable react/prefer-stateless-function */
export default class NavbarContainer extends React.Component {
  render() {
    return (
      <Navbar inverse className={styles.position}>
        <Navbar.Header className={styles.noFloat}>
          <Navbar.Brand className={styles.noFloat}>
            <Image src={Logo} responsive className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className={styles.collapse}>
          <Nav className={styles.menu}>
            <LinkContainer to={{ pathname: '#' }}>
              <NavItem eventKey={1} className={styles.menuItem}>Users</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/save' }}>
              <NavItem eventKey={2} className={styles.menuItem}>Save</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/restore' }}>
              <NavItem eventKey={3} className={styles.menuItem}>Restore</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '#' }}>
              <NavItem eventKey={4} className={styles.menuItem}>Migration</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '#' }}>
              <NavItem eventKey={5} className={styles.menuItem}>Software</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '#' }}>
              <NavItem eventKey={6} className={styles.menuItem}>Logs</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/statistics' }}>
              <NavItem eventKey={5} className={styles.menuItem}>Statistics</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '#' }}>
              <NavItem eventKey={8} className={styles.menuItem}>Help</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
