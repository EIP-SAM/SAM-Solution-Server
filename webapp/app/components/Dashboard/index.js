//
// Dashboard container
//

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import BlockInfo from 'containers/Dashboard/BlockInfo';

export default class Dashboard extends React.Component {
  componentWillMount() {
    this.username = this.props.currentUserName;
  }

  render() {
    const username = this.props.currentUserName;

    return (
      <div>
        <h1>Dashboard <small>Welcome {username}</small></h1>
        <hr />
        <Grid fluid bsClass="">
          <Row>

            {/* Users */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="user"
                title="Module users"
                msg="You can manage all the users of the application: create, edit or remove them"
                color="blue"
                text="More details"
                link="/users"
              />
            </Col>

            {/* Groups */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="tags"
                title="Module groups"
                msg="You can also manage the users by grouping them. Consequently, you can create edit or remove a group"
                color="green"
                text="More details"
                link="/groups"
              />
            </Col>

            {/* Save */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="floppy-disk"
                title="Module save"
                msg="You can create an instant save, scheduled a one shot save or scheduled an auto save"
                color="orange"
                text="More details"
                link="/save"
              />
            </Col>

            {/* Restore */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="repeat"
                title="Module restore"
                msg="You can restore data from a previous save"
                color="red"
                text="More details"
                link="/restore"
              />
            </Col>

            {/* Softwares */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="cd"
                title="Module softwares"
                msg="You can install, update or remove software in an user's computer"
                color="blue"
                text="More details"
                link="/software"
              />
            </Col>

            {/* Logs */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="list"
                title="Module logs"
                msg="You can check every action made on the application in the logs module. There are several levels of logs : info, warn, error and fatal"
                color="green"
                text="More details"
                link="/logs"
              />
            </Col>

            {/* Notifications */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="envelope"
                title="Module notifications"
                msg="You can send a notification to one or several users"
                color="orange"
                text="More details"
                link="/notifications"
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
};
