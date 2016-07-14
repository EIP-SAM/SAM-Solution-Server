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
        <PageHeader className={styles.title}><small>{this.props.location.pathname.split('/')[2]}</small></PageHeader>
        <RestoreHistoryButtons username={window.location.pathname.split('/')[2]} />
        <RestoreHistoryTable data={this.props.state.restores} />
      </div>
    );
  }
}

RestoreHistory.propTypes = {
  state: React.PropTypes.object,
  getHistoryRestoreByUserRequest: React.PropTypes.func,
};
