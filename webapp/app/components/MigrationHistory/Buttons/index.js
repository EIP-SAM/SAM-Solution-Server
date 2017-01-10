//
// Migration History Buttons component
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton as Button } from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Buttons extends React.Component {
  onClick() {
    this.props.showCreateMigrationPopup(true);
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <Button
          buttonBsStyle="info"
          buttonText="Create Migration"
          link="#"
          onClick={() => this.onClick()}
        />
      </ButtonToolbar>
    );
  }
}

Buttons.propTypes = {
  showCreateMigrationPopup: React.PropTypes.func,
};
