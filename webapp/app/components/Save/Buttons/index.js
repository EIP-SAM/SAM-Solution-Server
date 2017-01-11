//
// List buttons page save
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/Save/Buttons/styles.css';

const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export default class SaveButtons extends React.Component {

  handleClickInstantSave() {
    this.props.listUsers(this.props.saves.map(save => (
      { id: save.id, name: save.name }
    )));
    this.props.dateSave(moment().format('DD/MM/YYYY'));
    this.props.dateDisabled(true);
    this.props.timeSave(moment().format('HH:mm'));
    this.props.timeDisabled(true);
    this.props.frequencySave('No Repeat');
    this.props.frequencyDisabled(true);
  }

  handleClickSaveScheduled() {
    this.props.listUsers(this.props.saves.map(save => (
      { id: save.id, name: save.name }
    )));
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton
          buttonBsStyle="info"
          className={styles.button}
          buttonText="Launch save for all"
          link="/create-save"
          onClick={() => this.handleClickInstantSave()}
        />
        <LinkContainerButton
          buttonBsStyle="info"
          className={styles.button}
          buttonText="Program save for all"
          link="/create-save"
          onClick={() => this.handleClickSaveScheduled()}
        />
      </ButtonToolbar>
    );
  }
}

SaveButtons.propTypes = {
  saves: React.PropTypes.array,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  dateDisabled: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  timeDisabled: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  frequencyDisabled: React.PropTypes.func,
};
