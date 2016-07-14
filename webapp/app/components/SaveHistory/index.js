//
// Page history save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { SaveHistoryButtons } from 'components/SaveHistory/Buttons';
import { SaveHistoryTable } from 'components/SaveHistory/Table';
import styles from 'components/SaveHistory/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveHistory extends React.Component {

  componentDidMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.getHistorySavesByUserRequest(username);
  }

  render() {
    return (
      <div>
        <PageHeader>Save</PageHeader>
        <PageHeader className={styles.title}><small>{window.location.pathname.split('/')[2]}</small></PageHeader>
        <SaveHistoryButtons
          dateSave={this.props.dateSave}
          timeSave={this.props.timeSave}
          frequencySave={this.props.frequencySave}
        />
        <SaveHistoryTable
          state={this.props.state}
          addAllFiles={this.props.addAllFiles}
          showDeletionScheduledSaveModal={this.props.showDeletionScheduledSaveModal}
          hideDeletionScheduledSaveModal={this.props.hideDeletionScheduledSaveModal}
          cancelSave={this.props.cancelSave}
        />
      </div>
    );
  }
}

SaveHistory.propTypes = {
  state: React.PropTypes.object,
  getHistorySavesByUserRequest: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addAllFiles: React.PropTypes.func,
  showDeletionScheduledSaveModal: React.PropTypes.func,
  hideDeletionScheduledSaveModal: React.PropTypes.func,
  cancelSave: React.PropTypes.func,
};
