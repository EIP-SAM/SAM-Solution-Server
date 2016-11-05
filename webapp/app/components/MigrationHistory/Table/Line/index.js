//
// Migration History Line main components
//

import React from 'react';
import Tr from 'components/Tr';
import Td from 'components/Td';
import { Label } from 'react-bootstrap';

const statusLabel = {
  done: 'success',
  'in progress': 'warning',
  planned: 'primary',
};

/* eslint-disable react/prefer-stateless-function */
export default class Line extends React.Component {
  getStatusLabel() {
    return (
      <Label bsStyle={statusLabel[this.props.values.status]}>
        {this.props.values.status}
      </Label>
    );
  }

  render() {
    return (
      <Tr
        items={[
          { isLink: false, value: this.props.index },
          { isLink: false, value: this.getStatusLabel() },
          { isLink: false, value: this.props.values.date },
          { isLink: false, value: this.props.values.userName },
          { isLink: false, value: this.props.values.image },
          { isLink: false, value: this.props.values.comment },
          { isLink: false, value: 'EDIT (NYI)' },
        ]}
        component={Td}
      />
    );
  }
}

Line.propTypes = {
  index: React.PropTypes.number,
  values: React.PropTypes.object,
};
