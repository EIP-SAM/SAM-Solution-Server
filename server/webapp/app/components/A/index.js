/**
 * A link to a certain page, an anchor tag
 */

import React, { PropTypes } from 'react';

function A(props) {
  return (
    <a
      { ...props }
    />
  );
}

A.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default A;
