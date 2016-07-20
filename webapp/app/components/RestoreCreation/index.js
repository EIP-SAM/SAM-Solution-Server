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
        <RestoreCreationForm
          state={this.props.state}
          resetState={this.props.resetState}
          getHistorySavesByUserRequest={this.props.getHistorySavesByUserRequest}
          nameUser={this.props.nameUser}
          listFiles={this.props.listFiles}
          selectFiles={this.props.selectFiles}
          selectSave={this.props.selectSave}
          createRestoresRequest={this.props.createRestoresRequest}
          setUserId={this.props.setUserId}
          saveErrorMsg={this.props.saveErrorMsg}
          filesErrorMsg={this.props.filesErrorMsg}
        />
      </div>
    );
  }
}

RestoreCreation.propTypes = {
  state: React.PropTypes.object,
  resetState: React.PropTypes.func,
  nameUser: React.PropTypes.func,
  setUserId: React.PropTypes.func,
  selectSave: React.PropTypes.func,
  selectFiles: React.PropTypes.func,
  listFiles: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  getHistorySavesByUserRequest: React.PropTypes.func,
  saveErrorMsg: React.PropTypes.func,
  filesErrorMsg: React.PropTypes.func,
};
