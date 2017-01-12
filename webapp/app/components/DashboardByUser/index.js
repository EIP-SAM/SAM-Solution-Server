//
// Component dashboard by user page
//

import React from 'react';
import DashboardByUserHeaderPage from 'containers/DashboardByUser/HeaderPage';
import DashboardByUserLogs from 'containers/DashboardByUser/Logs';

/* eslint-disable react/prefer-stateless-function */
export default class DashboardByUser extends React.Component {

  render() {
    return (
      <div>
        <DashboardByUserHeaderPage />
        <DashboardByUserLogs />
      </div>
    );
  }
}

DashboardByUser.propTypes = {
};
