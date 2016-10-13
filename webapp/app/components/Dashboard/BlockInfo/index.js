//
// Block components
//

import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styles from './styles.css';

export default class BlockInfo extends React.Component {
  componentWillMount() {
    console.log('bsStyle: ', this.props.bsStyle);
    console.log('msg: ', this.props.msg);
  }

  render() {
    const bsStyle = this.props.bsStyle !== undefined ? this.props.bsStyle : 'jumbotron';
    return (
      <Jumbotron bsClass={bsStyle} className={styles.blockInfo}>
        <p>{this.props.msg}</p>
      </Jumbotron>
    );
  }
}

BlockInfo.propTypes = {
  bsStyle: React.PropTypes.string,
  msg: React.PropTypes.string.isRequired,
};
