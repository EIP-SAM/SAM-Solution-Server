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
import Navbar from 'components/Navbar';
import styles from 'components/App/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Navbar />
        <Grid className={styles.padding}>
          <Row className="show-grid">
            <Col xs={10} sm={7} md={8} lg={9}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
