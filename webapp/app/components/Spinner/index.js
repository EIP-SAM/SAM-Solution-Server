//
// Spinner components to display during ajax requests
// Props:
//    color: optional, choose the spinner's color
//    size: optional, choose the spinner's size
//    className: optional, add your own css here, to center the component etc...
// Example:
//    import Spinner from 'components/Spinner';
//    ...
//    <Spinner color="#ff0000" size={200} className={styles.newStyleSpinner} />
//

import React from 'react';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Spinner extends React.Component {
  static defaultProps = {
    color: '#3498db',
    size: 120,
    className: '',
  }

  render() {
    const width = 16 * (this.props.size / 120);
    const newStyle = {
      borderTopColor: this.props.color,
      width: this.props.size,
      height: this.props.size,
      borderWidth: width,
      borderTopWidth: width,
    };

    return (
      <div className={[styles.spinner, this.props.className].join(' ')} style={newStyle} >
      </div>
    );
  }
}

Spinner.propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.number,
  className: React.PropTypes.string,
};
