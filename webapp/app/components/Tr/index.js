//
// Component <tr></tr>
//

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Tr extends React.Component {
  render() {
    const ComponentToRender = this.props.component;
    let content = null;

    content = this.props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} object={item} />
    ));

    return (
      <tr>{content}</tr>
    );
  }
}

Tr.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array.isRequired,
};
