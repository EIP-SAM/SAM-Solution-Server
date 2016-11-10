//
// Component sofwares by user
//

import React from 'react';
import { PageHeader, Alert } from 'react-bootstrap';
import SoftwaresByUserTable from 'containers/SoftwaresByUser/Table';

/* eslint-disable react/prefer-stateless-function */
export class SoftwaresByUser extends React.Component {
  componentWillMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.getUsername(username);
    this.props.getInstalledSoftwaresRequest();
  }

  componentWillUnmount() {
    this.props.resetAlert();
  }

  render() {
    let alert = '';
    if (this.props.displayAlert) {
      alert = (
        <Alert bsStyle={this.props.typeAlert}>
          <strong>{`${this.props.softName}`}</strong> {`${this.props.alertMsg}`}
        </Alert>
      );
    }

    return (
      <div>
        <PageHeader>{this.props.username}</PageHeader>
        {alert}
        <SoftwaresByUserTable />
      </div>
    );
  }
}

SoftwaresByUser.propTypes = {
  username: React.PropTypes.string,
  softName: React.PropTypes.string,
  alertMsg: React.PropTypes.string,
  typeAlert: React.PropTypes.string,
  displayAlert: React.PropTypes.bool,
  getUsername: React.PropTypes.func,
  getInstalledSoftwaresRequest: React.PropTypes.func,
  resetAlert: React.PropTypes.func,
};
