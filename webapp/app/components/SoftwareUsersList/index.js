import React from 'react';
import { PageHeader } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class SoftwareUsersListComponent extends React.Component {

  componentDidMount() {
    this.props.startSocketIo();
  }

  render() {
    return (
      <div>
        <PageHeader>Liste utilisateurs</PageHeader>
        <div>
          {this.props.socketData}
        </div>
      </div>
    );
  }
}

SoftwareUsersListComponent.propTypes = {
  startSocketIo: React.PropTypes.func,
  socketData: React.PropTypes.object.isRequired,
};
