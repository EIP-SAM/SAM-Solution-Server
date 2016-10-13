//
// Block components
//

import React from 'react';
import { Jumbotron } from 'react-bootstrap';
<<<<<<< 6d8ccc86983b5dce868e0e8c4b25d84fc58259ff
import styles from './styles.css';
=======
>>>>>>> #349: Create BlockInfo component/container and add actions/constants/reducers.js for Dashboard container

export default class BlockInfo extends React.Component {
  componentWillMount() {
    console.log('bsStyle: ', this.props.bsStyle);
    console.log('msg: ', this.props.msg);
  }

  render() {
    const bsStyle = this.props.bsStyle !== undefined ? this.props.bsStyle : 'jumbotron';
    return (
<<<<<<< 6d8ccc86983b5dce868e0e8c4b25d84fc58259ff
      <Jumbotron bsClass={bsStyle} className={styles.blockInfo}>
=======
      <Jumbotron bsClass={bsStyle}>
>>>>>>> #349: Create BlockInfo component/container and add actions/constants/reducers.js for Dashboard container
        <p>{this.props.msg}</p>
      </Jumbotron>
    );
  }
}

BlockInfo.propTypes = {
  bsStyle: React.PropTypes.string,
  msg: React.PropTypes.string.isRequired,
};
