//
// Component dashboard by user page
//

import React from 'react';
import DashboardByUserHeaderPage from 'containers/DashboardByUser/HeaderPage';
import DashboardByUserLogs from 'containers/DashboardByUser/Logs';
import DashboardByUserSave from 'containers/DashboardByUser/Save';
import DashboardByUserRestore from 'containers/DashboardByUser/Restore';

/* eslint-disable react/prefer-stateless-function */
export default class DashboardByUser extends React.Component {

  render() {
    return (
      <div>
        <DashboardByUserHeaderPage />
        <DashboardByUserLogs />
        <DashboardByUserSave />
        <DashboardByUserRestore />
      </div>
    );
  }
}
