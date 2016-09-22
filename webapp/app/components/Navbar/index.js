//
// Navbar
//
import React from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getUser } from 'utils/user';
import Logo from 'components/Navbar/logo_sam_solution.png';
import styles from 'components/Navbar/styles.css';


/* eslint-disable react/prefer-stateless-function */
export default class NavbarContainer extends React.Component {
  logout() {
    this.props.logoutRequest();
  }

  render() {
    let navItems = [];
    const userInfo = getUser();

    if (userInfo.isAdmin) {
      navItems = [
      { pathname: '/users', value: 'Users' },
      { pathname: '/groups', value: 'Groups' },
      { pathname: '/save', value: 'Save' },
      { pathname: '/restore', value: 'Restore' },
      { pathname: '#', value: 'Migration' },
      { pathname: '#', value: 'Software' },
      { pathname: '/logs', value: 'Logs' },
      { pathname: '/statistics', value: 'Statistics' },
      { pathname: '#', value: 'Help' },
      { pathname: '/login', value: 'Logout', onClick: this.logout },
      ];
    } else {
      navItems = [
      { pathname: '#', value: 'Users' },
      { pathname: `/save/${userInfo.username}`, value: 'Save' },
      { pathname: `/restore/${userInfo.username}`, value: 'Restore' },
      { pathname: '#', value: 'Migration' },
      { pathname: '#', value: 'Software' },
      { pathname: '/logs', value: 'Logs' },
      { pathname: '/statistics', value: 'Statistics' },
      { pathname: '#', value: 'Help' },
      { pathname: '/login', value: 'Logout', onClick: this.logout },
      ];
    }

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
            {navItems.map((item, i) =>
              <LinkContainer onClick={() => this.logout()} key={`navItem-${i}`} to={{ pathname: item.pathname }}>
                <NavItem eventKey={i} className={styles.menuItem}>{item.value}</NavItem>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navbar.propTypes = {
  logoutRequest: React.PropTypes.func,
};
