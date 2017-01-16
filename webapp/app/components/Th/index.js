//
// Component <th></th>
//

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Th extends React.Component {
  render() {
    const value = this.props.object;
    return (
      <th>{value}</th>
    );
  }
}

Th.propTypes = {
  object: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]).isRequired,
};
