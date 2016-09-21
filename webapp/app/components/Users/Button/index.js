//
// List buttons page save
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class UsersButton extends React.Component {

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton
          buttonType="info"
          className={styles.button}
          buttonText="Create user"
          link="/create-user"
        />
      </ButtonToolbar>
    );
  }
}
