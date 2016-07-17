//
// Component <td></td>
//

import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from 'components/Td/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Td extends React.Component {
  render() {
    const item = this.props.object;
    let content = (<div></div>);

    if (item) {
      content = item.value;

      if (item.isLink === true) {
        content = (<LinkContainer to={{ pathname: item.link }}><Button onClick={item.onClick} className={styles.padding} bsStyle="link" href="#">{item.value}</Button></LinkContainer>);
      }

      return (
        <td>{content}</td>
      );
    }
    return { content };
  }
}

Td.propTypes = {
  object: React.PropTypes.object.isRequired,
};
