//
// Dashboard container
//

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import BlockInfo from 'containers/Dashboard/BlockInfo';

export default class Dashboard extends React.Component {
  componentWillMount() {
    this.username = this.props.currentUserName;
    this.props.getSavesNumbers(this.username);
    this.props.getRestoresNumbers(this.username);
  }

  componentWillUpdate() {
    this.props.getSavesNumbers(this.username);
    this.props.getRestoresNumbers(this.username);
  }

  render() {
    const username = this.props.currentUserName;
    const saveNumbers = this.props.saveNumbers || 0;
    const restoreNumbers = this.props.restoreNumbers || 0;

    return (
      <div>
        <h1>Dashboard <small>Welcome {username}</small></h1>
        <hr />
        <Grid bsClass="">
          <Row>
            <Col md={6} lg={3}>
              <BlockInfo
                icon="floppy-disk"
                title="Save"
                msg={saveNumbers.toString()}
                color="blue"
                text="More details"
                link="/save"
              />
            </Col>
            <Col md={6} lg={3}>
              <BlockInfo
                icon="repeat"
                title="Restore"
                msg={restoreNumbers.toString()}
                color="green"
                text="More details"
                link="/restore"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  currentUserName: React.PropTypes.string,
  saveNumbers: React.PropTypes.number,
  restoreNumbers: React.PropTypes.number,
  getSavesNumbers: React.PropTypes.func,
  getRestoresNumbers: React.PropTypes.func,
};
