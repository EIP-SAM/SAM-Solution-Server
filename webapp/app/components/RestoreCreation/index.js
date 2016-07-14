//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { RestoreCreationForm } from 'components/RestoreCreation/Form';

/* eslint-disable react/prefer-stateless-function */
export class RestoreCreation extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Launch Restore</PageHeader>
        {
        <RestoreCreationForm
          state={this.props.state}
          listFiles={this.props.listFiles}
          nameUser={this.props.nameUser}
          setUserId={this.props.setUserId}
          listSaves={this.props.listSaves}
          getHistorySavesByUserRequest={this.props.getHistorySavesByUserRequest}
          createRestoresRequest={this.props.createRestoresRequest}
         />
       }
      </div>
    );
  }
}

RestoreCreation.propTypes = {
  state: React.PropTypes.object,
  nameUser: React.PropTypes.func,
  setUserId: React.PropTypes.func,
  listFiles: React.PropTypes.func,
  listSaves: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  getHistorySavesByUserRequest: React.PropTypes.func,
};
