//
// Modal to create an instant save in save history page
//

import React from 'react';
import { Modal, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SaveHistory/Table/ModalInstantSave/styles.css';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveHistoryInstantSaveModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
  }

  componentDidMount() {
    this.props.dateSave(moment().format('DD/MM/YYYY'));
    this.props.timeSave(moment().format('HH:mm'));
    this.props.frequencySave('No Repeat');
  }

  handleLaunchClick() {
    this.props.createSave(this.props.createSaveState, false);
    this.props.hideInstantSaveModal();
  }

  render() {
    return (
      <Modal show={this.props.state.showInstantSaveModal} onHide={this.props.hideInstantSaveModal}>
        <Modal.Header closeButton>
          <Modal.Title><Glyphicon glyph="floppy-open" className={styles.icon} />Instant save</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.p}>
          <p>You are about to launch save.</p>
          <p className={styles.bold}>Are you sure that you want to launch it?</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <LinkContainerButton buttonType="info" buttonText="Launch" onClick={this.handleLaunchClick} />
            <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.props.hideInstantSaveModal} />
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

SaveHistoryInstantSaveModal.propTypes = {
  createSaveState: React.PropTypes.object,
  state: React.PropTypes.object.isRequired,
  hideInstantSaveModal: React.PropTypes.func.isRequired,
  dateSave: React.PropTypes.func.isRequired,
  timeSave: React.PropTypes.func.isRequired,
  frequencySave: React.PropTypes.func.isRequired,
  createSave: React.PropTypes.func,
};
