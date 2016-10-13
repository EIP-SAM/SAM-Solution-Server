//
// Block components
//

import React from 'react';
import { LinkContainerButton } from 'components/Button';
import styles from './styles.css';

export default class BlockInfo extends React.Component {
  componentWillMount() {
    const color = this.props.color !== undefined ? color : 'blue';

    this.state = this.state || {};
    switch (color) {
      case 'blue':
        this.state.blockInfoClass = styles.blockInfoBlue;
        break;
      default:
        this.state.blockInfoClass = styles.blockInfoBlue;
    }
  }

  render() {
    return (
      <div className={this.state.blockInfoClass}>
        <div className={styles.blockInfoHeader}>{this.props.msg}</div>
        <LinkContainerButton buttonBsStyle="link" buttonText="LINK" />
      </div>
    );
  }
}

BlockInfo.propTypes = {
  color: React.PropTypes.string,
  msg: React.PropTypes.string.isRequired,
};
