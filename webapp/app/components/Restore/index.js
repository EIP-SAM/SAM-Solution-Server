//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { RestoreTable } from 'components/Restore/Table';

/* eslint-disable react/prefer-stateless-function */
export class Restore extends React.Component {

  componentDidMount() {
    this.props.getRestoresRequest();
  }

  render() {
    return (
      <div>
        <PageHeader>Restore</PageHeader>
        <RestoreTable data={this.props.state.restores} />
      </div>
    );
  }
}

Restore.propTypes = {
  state: React.PropTypes.object,
  getSavesRequest: React.PropTypes.func,
};
