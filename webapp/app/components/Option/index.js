//
// Component <option></option>
//

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Option extends React.Component {
  render() {
    const item = this.props.object;

    return (<option value={item.value} disabled={item.isActive}>{item.text}</option>);
  }
}

Option.propTypes = {
  object: React.PropTypes.object.isRequired,
};
