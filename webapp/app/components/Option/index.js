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
  object: React.PropTypes.shape({
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    text: React.PropTypes.string,
  }).isRequired,
};
