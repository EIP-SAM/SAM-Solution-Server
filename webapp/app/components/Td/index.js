//
// Component <td></td>
//

import React from 'react';
import { Button } from 'react-bootstrap';
import styles from 'components/Td/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Td extends React.Component {
  render() {
    const item = this.props.object;
    let content = (<div></div>);

    if (item) {
      content = item.value;

      if (item.isLink === 'true') {
        content = (<Button className={styles.padding} bsStyle="link" href={item.link}>{item.value}</Button>);
      }

      return (
        <td>{content}</td>
      );
    }
    return { content };
  }
}

Td.propTypes = {
  object: React.PropTypes.object,
};
