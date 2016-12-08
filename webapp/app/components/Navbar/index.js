//
// Navbar
//
import React from 'react';
import { Navbar, Nav, NavItem, Image, Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from 'components/Navbar/logo_sam_solution.png';
import styles from 'components/Navbar/styles.css';


/* eslint-disable react/prefer-stateless-function */
export default class NavbarContainer extends React.Component {
  getNavbarLinkContainer(item, i) {
    return (
      <LinkContainer key={`navItem-${i}`} to={{ pathname: item.pathname }}>
        <NavItem eventKey={i} className={styles.navBarMenuItem}><Glyphicon glyph={item.glyphicon} className={styles.icon} />{item.value}</NavItem>
      </LinkContainer>
    );
  }

  getNavbarDropDownMenu(item, i) {
    if (item.value !== 'Logout') {
      return (
        <LinkContainer key={`dropdownItem-${i}`} to={{ pathname: item.pathname }}>
          <MenuItem eventKey={`1.${i}`} className={styles.itemDropDown}><Glyphicon glyph={item.glyphicon} className={styles.icon} />{item.value}</MenuItem>
        </LinkContainer>
      );
    }
    return (
      <LinkContainer onClick={() => this.props.logoutRequest()} key={`dropdownItem-${i}`} to={{ pathname: item.pathname }}>
        <MenuItem eventKey={`1.${i}`} className={styles.itemDropDown}><Glyphicon glyph={item.glyphicon} className={styles.icon} />{item.value}</MenuItem>
      </LinkContainer>
    );
  }

  render() {
    let navItems = [];
    const userInfo = this.props.userInfo;

    if (userInfo.isAdmin) {
      navItems = [
        { pathname: '/dashboard', value: 'Dashboard', glyphicon: 'dashboard' },
        { pathname: '/users', value: 'Users', glyphicon: 'user' },
        { pathname: '/groups', value: 'Groups', glyphicon: 'tags' },
        { pathname: '/save', value: 'Save', glyphicon: 'floppy-disk' },
        { pathname: '/restore', value: 'Restore', glyphicon: 'repeat' },
        { pathname: '/migration/history', value: 'Migration', glyphicon: 'send' },
        { pathname: '/software', value: 'Software', glyphicon: 'cd' },
        { pathname: '/logs', value: 'Logs', glyphicon: 'list' },
        { pathname: '/statistics', value: 'Statistics', glyphicon: 'stats' },
        { pathname: '/notifications', value: 'Notifications', glyphicon: 'envelope' },
        { pathname: '#', value: 'Help', glyphicon: 'book' },
      ];
    } else {
      navItems = [
        { pathname: '/dashboard', value: 'Dashboard', glyphicon: 'dashboard' },
        { pathname: `/save/${userInfo.username}/${userInfo.userId}`, value: 'Save', glyphicon: 'floppy-disk' },
        { pathname: `/restore/${userInfo.username}`, value: 'Restore', glyphicon: 'repeat' },
        { pathname: '/migration/history', value: 'Migration', glyphicon: 'send' },
        { pathname: '#', value: 'Software', glyphicon: 'list' },
        { pathname: '#', value: 'Help', glyphicon: 'book' },
      ];
    }

    const dropdownItems = [
      { pathname: `/edit-user/${userInfo.username}`, value: 'Profile', glyphicon: 'user' },
      { pathname: '/login', value: 'Logout', glyphicon: 'off' },
    ];

    return (
      <Navbar inverse fixedTop className={styles.navbarStyle} role="navigation">
        <Navbar.Header>
          <LinkContainer key={'item-logo'} to={{ pathname: '/dashboard' }}>
            <NavItem><Image src={Logo} responsive className={styles.navbarLogo} /></NavItem>
          </LinkContainer>
          <Navbar.Brand>
            <LinkContainer key={'item-name'} to={{ pathname: '/dashboard' }}>
              <NavItem>SAM-Solution</NavItem>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav pullRight className={styles.navBarRightButtonBlock}>
          <NavDropdown title={userInfo.username} eventKey={1}>
            {dropdownItems.map((item, i) =>
              this.getNavbarDropDownMenu(item, i)
            )}
          </NavDropdown>
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
