//
// Component <th></th>
//

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Th extends React.Component {
  render() {
    return (
      <th>{this.props.object.value}</th>
    );
  }
}

Th.propTypes = {
  object: React.PropTypes.object,
};
