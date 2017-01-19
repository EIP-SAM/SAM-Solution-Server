//
// Component sofwares by user
//

import React from 'react';
import { PageHeader, Alert } from 'react-bootstrap';
import Searchbar from 'containers/SoftwaresByUser/Searchbar';
import Buttons from 'containers/SoftwaresByUser/Buttons';
import Table from 'containers/SoftwaresByUser/Table';

/* eslint-disable react/prefer-stateless-function */
export default class SoftwaresByUser extends React.Component {
  componentWillMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.getUsername(username);
    this.props.getInstalledSoftwaresRequest(username);
  }

  componentWillUnmount() {
    this.props.resetAlert();
    this.props.resetStateTable();
    this.props.resetSoftwares();
  }

  render() {
    let alerts = '';
    if (this.props.displayAlert) {
      alerts = this.props.alerts.map((alert, index) => (
        <Alert key={`row-${index}`} bsStyle={alert.typeAlert}>
          <strong>{alert.alertMsg}</strong>
        </Alert>
        ));
    }

    return (
      <div>
        <PageHeader>{this.props.username}</PageHeader>
        {alerts}
        <Searchbar />
        <Buttons />
        <Table />
      </div>
    );
  }
}

SoftwaresByUser.propTypes = {
  username: React.PropTypes.string,
  alerts: React.PropTypes.arrayOf(React.PropTypes.object),
  displayAlert: React.PropTypes.bool,
  getUsername: React.PropTypes.func,
  getInstalledSoftwaresRequest: React.PropTypes.func,
  resetAlert: React.PropTypes.func,
  resetStateTable: React.PropTypes.func,
  resetSoftwares: React.PropTypes.func,
};
