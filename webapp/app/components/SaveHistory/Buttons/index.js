//
// List buttons page history save by user
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SaveHistory/Buttons/styles.css';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export default class SaveHistoryButtons extends React.Component {

  handleClick() {
    this.props.dateSave(moment().format('DD/MM/YYYY'));
    this.props.dateDisabled(true);
    this.props.timeSave(moment().format('HH:mm'));
    this.props.timeDisabled(true);
    this.props.frequencySave('No Repeat');
    this.props.frequencyDisabled(true);
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton
          buttonBsStyle="info"
          className={styles.button}
          buttonText="Launch save"
          link="/create-save"
          onClick={() => this.handleClick()}
        />
        <LinkContainerButton
          buttonBsStyle="info"
          className={styles.button}
          buttonText="Program save"
          link="/create-save"
        />
      </ButtonToolbar>
    );
  }
}

SaveHistoryButtons.propTypes = {
  dateSave: React.PropTypes.func,
  dateDisabled: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  timeDisabled: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  frequencyDisabled: React.PropTypes.func,
};
