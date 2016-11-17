//
// Button header page in dashboard by user page
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import RebootButtonModal from 'containers/DashboardByUser/HeaderPage/Button/ModalRebootUser';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class DashboardByUserHeaderPageButton extends React.Component {
  handleRebootClick() {
    this.props.showInstantRebootModal();
  }

  render() {
    return (
      <div className={styles.buttonHandle}>
        <ButtonToolbar className={styles.toolbar}>
          <LinkContainerButton
            buttonBsStyle="info"
            buttonText="Reboot"
            onClick={() => this.handleRebootClick()}
          />
        </ButtonToolbar>
        <RebootButtonModal />
      </div>
    );
  }
}

DashboardByUserHeaderPageButton.propTypes = {
  showInstantRebootModal: React.PropTypes.func,
};
