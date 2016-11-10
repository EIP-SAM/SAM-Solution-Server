//
// Component header dashboard by user page
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
<<<<<<< HEAD
import RebootButton from 'containers/DashboardByUser/HeaderPage/Button';
=======
>>>>>>> #359: create component HeaderPage
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
          <RebootButton />
=======
>>>>>>> #359: create component HeaderPage
        </PageHeader>
      </div>
    );
  }
}

DashboardByUserHeaderPage.propTypes = {
};
