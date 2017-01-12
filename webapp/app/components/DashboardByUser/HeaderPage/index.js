//
// Component header dashboard by user page
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import RebootButton from 'containers/DashboardByUser/HeaderPage/Button';
=======
>>>>>>> #359: create component HeaderPage
=======
import RebootButton from 'containers/DashboardByUser/HeaderPage/Button';
>>>>>>> #359: add reboot button in dashboard by user + remove reboot action button in users page
=======
import RebootButton from 'containers/DashboardByUser/HeaderPage/Button';
>>>>>>> 1835d45c8b9afe011b13ed848b07e67f1cf9e04a
import styles from 'components/DashboardByUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class DashboardByUserHeaderPage extends React.Component {

  render() {
    const userId = window.location.pathname.split('/')[3];
    const username = window.location.pathname.split('/')[2];

    return (
      <div>
        <PageHeader>
          {username}
          <ButtonPopover id="edit_user" trigger={['focus', 'hover']} placement="right" popoverContent="Edit user" link={`/edit-user/${userId}`} buttonType="link" icon="pencil" buttonStyle={styles.inline} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <RebootButton />
=======
>>>>>>> #359: create component HeaderPage
=======
          <RebootButton />
>>>>>>> #359: add reboot button in dashboard by user + remove reboot action button in users page
=======
          <RebootButton />
>>>>>>> 1835d45c8b9afe011b13ed848b07e67f1cf9e04a
        </PageHeader>
      </div>
    );
  }
}

DashboardByUserHeaderPage.propTypes = {
};
