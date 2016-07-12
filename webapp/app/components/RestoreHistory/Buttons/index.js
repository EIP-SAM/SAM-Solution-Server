//
// List buttons page history save by user
//

import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import styles from 'components/RestoreHistory/Buttons/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class RestoreHistoryButtons extends React.Component {
  render() {
    var url = "/create-restore/" + this.props.data[0].user.name;

    return (
      <ButtonToolbar className={styles.toolbar}>
        <Button bsStyle="info" className={styles.button} href={url} >Launch restore</Button>
      </ButtonToolbar>
    );
  }
}

RestoreHistoryButtons.propTypes = {
  data: React.PropTypes.array,
};
