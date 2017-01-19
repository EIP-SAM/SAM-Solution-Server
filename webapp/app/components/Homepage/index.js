//
// Homepage container
//

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import BlockInfo from 'containers/Homepage/BlockInfo';

export default class Homepage extends React.Component {
  componentWillMount() {
    this.username = this.props.currentUserName;
  }

  render() {
    const username = this.props.currentUserName;

    return (
      <div>
        <h1>Homepage <small>Welcome {username}</small></h1>
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
                text="Navigate to page"
                link="/users"
              />
            </Col>

            {/* Groups */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="tags"
                title="Module groups"
                msg="You can also manage the users by grouping them. Consequently, you can create edit or remove a group"
                color="blue"
                text="Navigate to page"
                link="/groups"
              />
            </Col>

            {/* Save */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="floppy-disk"
                title="Module save"
                msg="You can create an instant save, scheduled a one shot save or scheduled an auto save"
                color="blue"
                text="Navigate to page"
                link="/save"
              />
            </Col>

            {/* Restore */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="repeat"
                title="Module restore"
                msg="You can restore data from a previous save"
                color="blue"
                text="Navigate to page"
                link="/restore"
              />
            </Col>

            {/* Migration */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="repeat"
                title="Module migration"
                msg="You can migration one or several users into a new OS"
                color="blue"
                text="Navigate to page"
                link="/migration/history"
              />
            </Col>

            {/* Images */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="repeat"
                title="Module images"
                msg="You can manage OS images by adding or removing them"
                color="blue"
                text="Navigate to page"
                link="/images"
              />
            </Col>

            {/* Softwares */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="cd"
                title="Module softwares"
                msg="You can install, update or remove software in an user's computer"
                color="blue"
                text="Navigate to page"
                link="/software"
              />
            </Col>

            {/* Logs */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="list"
                title="Module logs"
                msg="You can check every action made on the application in the logs module. There are several levels of logs : info, warn, error and fatal"
                color="blue"
                text="Navigate to page"
                link="/logs"
              />
            </Col>

            {/* Statistics */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="stats"
                title="Module Statistics"
                msg="You can find usefull statistics in the stats module. Number of save/restore over time, logs type repartition..."
                color="blue"
                text="Navigate to page"
                link="/statistics"
              />
            </Col>

            {/* Notifications */}
            <Col md={6} lg={4}>
              <BlockInfo
                icon="envelope"
                title="Module notifications"
                msg="You can send a notification to one or several users"
                color="blue"
                text="Navigate to page"
                link="/notifications"
              />
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

Homepage.propTypes = {
  currentUserName: React.PropTypes.string,
};
