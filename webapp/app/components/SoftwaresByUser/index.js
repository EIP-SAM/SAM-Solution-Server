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
    let alert = '';
    // if (this.props.displayAlert) {
    //   alert = (
    //     <Alert bsStyle={this.props.typeAlert}>
    //       <strong>{`${this.props.softName}`}</strong> {`${this.props.alertMsg}`}
    //     </Alert>
    //   );
    // }
    console.log(this.props.alerts);

    return (
      <div>
        <PageHeader>{this.props.username}</PageHeader>
        {alert}
        <Searchbar />
        <Buttons />
        <Table />
      </div>
    );
  }
}

SoftwaresByUser.propTypes = {
  username: React.PropTypes.string,
  alerts: React.PropTypes.array,
  displayAlert: React.PropTypes.bool,
  getUsername: React.PropTypes.func,
  getInstalledSoftwaresRequest: React.PropTypes.func,
  resetAlert: React.PropTypes.func,
  resetStateTable: React.PropTypes.func,
  resetSoftwares: React.PropTypes.func,
};
