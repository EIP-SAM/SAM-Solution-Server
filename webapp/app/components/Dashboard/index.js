//
// Dashboard container
//

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import BlockInfo from 'containers/Dashboard/BlockInfo';

export default class Dashboard extends React.Component {
  componentWillMount() {
    this.username = this.props.userInfo.username;
    this.props.getSavesNumbers(this.username);
    this.props.getRestoresNumbers(this.username);
  }

  componentWillUpdate() {
    this.props.getRestoresNumbers(this.username);
  }

  render() {
    const username = this.props.userInfo.username;
    const saveStatus = `Save scheduled ${this.props.saveNumbers}`;
    const restoreStatus = `Restore scheduled ${this.props.restoreNumbers}`;

    return (
      <div>
        <h1>Dashboard <small>Welcome {username}</small></h1>
        <hr />
        <Grid bsClass="">
          <Row>
            <Col md={6} lg={3}>
              <BlockInfo msg={saveStatus} />
            </Col>
            <Col md={6} lg={3}>
              <BlockInfo msg={restoreStatus} />
            </Col>
            <Col md={6} lg={3}>
              <BlockInfo msg={saveStatus} />
            </Col>
            <Col md={6} lg={3}>
              <BlockInfo msg={restoreStatus} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  userInfo: React.PropTypes.object,
  saveNumbers: React.PropTypes.number,
  restoreNumbers: React.PropTypes.number,
  getSavesNumbers: React.PropTypes.func,
  getRestoresNumbers: React.PropTypes.func,
};
