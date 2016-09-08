//
// Page history save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import SaveHistoryButtons from 'containers/SaveHistory/Buttons';
import SaveHistoryTable from 'containers/SaveHistory/Table';
import { isAdmin } from 'utils/user';
import styles from 'components/SaveHistory/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveHistory extends React.Component {

  componentDidMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.getHistorySavesByUserRequest(username);
  }

  render() {
    let username = '';
    if (isAdmin()) {
      username = <PageHeader className={styles.title}><small>{window.location.pathname.split('/')[2]}</small></PageHeader>;
    }

    return (
      <div>
        <PageHeader>Save</PageHeader>
        {username}
        <SaveHistoryButtons />
        <SaveHistoryTable />
      </div>
    );
  }
}

SaveHistory.propTypes = {
  getHistorySavesByUserRequest: React.PropTypes.func,
};
