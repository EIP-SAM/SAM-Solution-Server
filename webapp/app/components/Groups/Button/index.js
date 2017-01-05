//
// List buttons page groups
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class GroupsButton extends React.Component {

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton
          buttonBsStyle="info"
          buttonText="Create group"
          link="/create-group"
        />
      </ButtonToolbar>
    );
  }
}
