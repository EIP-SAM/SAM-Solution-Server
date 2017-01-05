//
// Page history save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import SaveHistoryButtons from 'containers/SaveHistory/Buttons';
import SaveHistoryTable from 'containers/SaveHistory/Table';
import styles from 'components/SaveHistory/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class SaveHistory extends React.Component {

  componentDidMount() {
    const url = window.location.pathname.split('/');
    const username = url[2];
    const userId = url[3];
    this.props.getHistorySavesByUserRequest(username);
    this.props.listUsers([{ id: userId, name: username }]);
  }

  render() {
    let username = '';
    if (this.props.userInfo.isAdmin) {
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
  userInfo: React.PropTypes.object,
  getHistorySavesByUserRequest: React.PropTypes.func,
  listUsers: React.PropTypes.func,
};
