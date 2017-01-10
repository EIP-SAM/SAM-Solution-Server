//
// List buttons page save
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import AddAllSoftwaresModal from 'containers/SoftwaresByUser/Buttons/ModalAddAllSoftwares';
import UpdateAllSoftwaresModal from 'containers/SoftwaresByUser/Buttons/ModalUpdateAllSoftwares';
import DeleteAllSoftwaresModal from 'containers/SoftwaresByUser/Buttons/ModalDeleteAllSoftwares';
import styles from 'components/SoftwaresByUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class SoftwaresByUserButtons extends React.Component {

  handleClickInstallSoftwares() {
    this.props.showAddAllSoftwaresModal();
  }

  handleClickUpdateSoftwares() {
    this.props.showUpdateAllSoftwaresModal();
  }

  handleClickDeleteSoftwares() {
    this.props.showDeleteAllSoftwaresModal();
  }

  render() {
    return (
      <div>
        <ButtonToolbar className={styles.toolbar}>
          <LinkContainerButton
            buttonBsStyle="info"
            buttonText="Install all"
            onClick={() => this.handleClickInstallSoftwares()}
          />
          <LinkContainerButton
            buttonBsStyle="warning"
            buttonText="Update all"
            onClick={() => this.handleClickUpdateSoftwares()}
          />
          <LinkContainerButton
            buttonBsStyle="danger"
            buttonText="Delete all"
            onClick={() => this.handleClickDeleteSoftwares()}
          />
        </ButtonToolbar>
        <AddAllSoftwaresModal />
        <UpdateAllSoftwaresModal />
        <DeleteAllSoftwaresModal />
      </div>
    );
  }
}

SoftwaresByUserButtons.propTypes = {
  showAddAllSoftwaresModal: React.PropTypes.func,
  showUpdateAllSoftwaresModal: React.PropTypes.func,
  showDeleteAllSoftwaresModal: React.PropTypes.func,
};
