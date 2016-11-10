//
// Component dashboard by user page
//

import React from 'react';
import DashboardByUserHeaderPage from 'containers/DashboardByUser/HeaderPage';
import { PageHeader } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import styles from './styles.css';

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
