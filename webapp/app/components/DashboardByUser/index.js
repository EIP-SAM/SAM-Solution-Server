//
// Component dashboard by user page
//

import React from 'react';
import DashboardByUserHeaderPage from 'containers/DashboardByUser/';

/* eslint-disable react/prefer-stateless-function */
export class DashboardByUser extends React.Component {

  render() {
    return (
      <div>
        <DashboardByUserHeaderPage />
      </div>
    );
  }
}

DashboardByUser.propTypes = {
};
