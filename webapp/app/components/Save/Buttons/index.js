//
// List buttons page save
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/Save/Buttons/styles.css';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class SaveButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dateSave(moment().format('DD/MM/YYYY'));
    this.props.timeSave(moment().format('HH:mm'));
    this.props.frequencySave('No Repeat');
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton
          buttonType="info"
          className={styles.button}
          buttonText="Launch save for all"
          link="/create-save"
          onClick={this.handleClick}
        />
        <LinkContainerButton
          buttonType="info"
          className={styles.button}
          buttonText="Program save for all"
          link="/create-save"
        />
      </ButtonToolbar>
    );
  }
}

SaveButtons.propTypes = {
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
};
