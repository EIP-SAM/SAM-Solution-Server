//
// Page history save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { RestoreHistoryButtons } from 'components/RestoreHistory/Buttons';
import { RestoreHistoryTable } from 'components/RestoreHistory/Table';
import styles from 'components/RestoreHistory/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class RestoreHistory extends React.Component {

  componentDidMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.getHistoryRestoresByUserRequest(username);
  }

  render() {
    return (
      <div>
        <PageHeader>Restore</PageHeader>
        <PageHeader className={styles.title}><small>{window.location.pathname.split('/')[2]}</small></PageHeader>
        <RestoreHistoryButtons username={window.location.pathname.split('/')[2]} />
        <RestoreHistoryTable
          state={this.props.state}
          hideInstantRestoreModal={this.props.hideInstantRestoreModal}
          showInstantRestoreModal={this.props.showInstantRestoreModal}
          stateRestore={this.props.stateRestore}
          createRestoresRequest={this.props.createRestoresRequest}
          selectFiles={this.props.selectFiles}
          setUserId={this.props.setUserId}
          getHistoryRestoresByUserRequest={this.props.getHistoryRestoresByUserRequest}
        />
      </div>
    );
  }
}

RestoreHistory.propTypes = {
  state: React.PropTypes.object,
  stateRestore: React.PropTypes.object,
  getHistoryRestoresByUserRequest: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
  setUserId: React.PropTypes.func,
  selectFiles: React.PropTypes.func,
  hideInstantRestoreModal: React.PropTypes.func,
  showInstantRestoreModal: React.PropTypes.func,
};
