//
// Page history save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import RestoreHistoryButtons from 'containers/RestoreHistory/Buttons';
import RestoreHistoryTable from 'containers/RestoreHistory/Table';
import styles from 'components/RestoreHistory/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class RestoreHistory extends React.Component {

  componentDidMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.getHistoryRestoresByUserRequest(username);
  }

  render() {
    let username = '';
    if (this.props.userInfo.isAdmin) {
      username = <PageHeader className={styles.title}><small>{window.location.pathname.split('/')[2]}</small></PageHeader>;
    }

    return (
      <div>
        <PageHeader>Restore</PageHeader>
        {username}
        <RestoreHistoryButtons />
        <RestoreHistoryTable />
      </div>
    );
  }
}

RestoreHistory.propTypes = {
  userInfo: React.PropTypes.object,
  getHistoryRestoresByUserRequest: React.PropTypes.func,
};
