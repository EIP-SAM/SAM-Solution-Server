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
  getNavbarLinkContainer(item, i) {
    if (item.value !== 'Logout') {
      return (
        <LinkContainer key={`navItem-${i}`} to={{ pathname: item.pathname }}>
          <NavItem eventKey={i} className={styles.navBarMenuItem}>{item.value}</NavItem>
        </LinkContainer>
      );
    }
    return (
      <LinkContainer onClick={() => this.props.logoutRequest()} key={`navItem-${i}`} to={{ pathname: item.pathname }}>
        <NavItem eventKey={i}>{item.value}</NavItem>
      </LinkContainer>
    );
  }

  render() {
    let navItems = [];
    const userInfo = this.props.userInfo;

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
      ];
    } else {
      navItems = [
      { pathname: `/edit-user/${userInfo.username}`, value: 'Users' },
      { pathname: `/save/${userInfo.username}/${userInfo.userId}`, value: 'Save' },
      { pathname: `/restore/${userInfo.username}`, value: 'Restore' },
      { pathname: '#', value: 'Migration' },
      { pathname: '#', value: 'Software' },
      { pathname: '#', value: 'Help' },
      ];
    }

    return (
      <Navbar inverse fixedTop className={styles.navbarStyle} role="navigation">
        <Navbar.Header>
          <LinkContainer key={'item-logo'} to={{ pathname: '/logs' }}>
            <NavItem><Image src={Logo} responsive className={styles.navbarLogo} /></NavItem>
          </LinkContainer>
          <Navbar.Brand>
            <LinkContainer key={'item-name'} to={{ pathname: '/logs' }}>
              <NavItem>SAM-Solution</NavItem>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav pullRight className={styles.navBarRightButtonBlock}>
          {this.getNavbarLinkContainer({ pathname: '/login', value: 'Logout' }, 1)}
        </Nav>
        <Navbar.Collapse>
          <Nav className={styles.navBarSideBar}>
            {navItems.map((item, i) =>
              this.getNavbarLinkContainer(item, i)
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavbarContainer.propTypes = {
  userInfo: React.PropTypes.object,
  logoutRequest: React.PropTypes.func,
};
