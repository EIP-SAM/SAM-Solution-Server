/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Navbar from 'containers/Navbar';
import styles from './styles.css';
import { browserHistory } from 'react-router';

/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {
  componentWillMount() {
    this.props.getUserInfo();
  }

  componentWillUpdate(nextProps) {
    if ((!nextProps.userInfo || !nextProps.userInfo.logged)
      && this.props.location.pathname !== '/login'
      && this.props.location.pathname !== '/forgotten-password') {
      browserHistory.push('/login');
    }
  }

  render() {
    const userInfo = this.props.userInfo;
    const navbar = (userInfo && userInfo.logged) ? <Navbar /> : (<span></span>);
    const appClass = (userInfo && userInfo.logged) ? styles.appBlock : '';

    return (
      <div className={appClass}>
        {navbar}
        <div className={styles.pageWrapper}>
          <Grid fluid>
            <Row>
              <Col lg={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  userInfo: React.PropTypes.object,
  location: React.PropTypes.object,
  getUserInfo: React.PropTypes.func,
};
