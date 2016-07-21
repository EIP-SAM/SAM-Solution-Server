//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { RestoreTable } from 'components/Restore/Table';
import { RestoreFilters } from 'components/Restore/Filters';

/* eslint-disable react/prefer-stateless-function */
export class Restore extends React.Component {

  componentDidMount() {
    this.props.getRestoresRequest();
  }

  render() {
    return (
      <div>
        <PageHeader>Restore</PageHeader>
        <RestoreFilters />
        <RestoreTable
          data={this.props.state.restores}
          createRestoresRequest={this.props.createRestoresRequest}
          historyState={this.props.historyState}
          creationState={this.props.creationState}
          hideInstantRestoreModal={this.props.hideInstantRestoreModal}
          showInstantRestoreModal={this.props.showInstantRestoreModal}
          createRestoresRequest={this.props.createRestoresRequest}
          selectFiles={this.props.selectFiles}
          setUserId={this.props.setUserId}
          resetStateCreationRestore={this.props.resetStateCreationRestore}
        />
      </div>
    );
  }
}

Restore.propTypes = {
  state: React.PropTypes.object,
  historyState: React.PropTypes.object,
  creationState: React.PropTypes.object,
  getRestoresRequest: React.PropTypes.func,
  hideInstantRestoreModal: React.PropTypes.func,
  showInstantRestoreModal: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  setUserId: React.PropTypes.func,
  selectFiles: React.PropTypes.func,
  resetStateCreationRestore: React.PropTypes.func,
};
