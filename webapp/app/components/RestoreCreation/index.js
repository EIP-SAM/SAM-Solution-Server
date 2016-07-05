//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { RestoreCreationForm } from 'components/RestoreCreation/Form';

/* eslint-disable react/prefer-stateless-function */
export class RestoreCreation extends React.Component {

  componentDidMount() {
    this.props.getRestoresRequest();
  }
  render() {
    return (
      <div>
        <PageHeader>Launch Restore</PageHeader>
        <RestoreCreationForm data={this.props.state.restores} />
      </div>
    );
  }
}

RestoreCreation.propTypes = {
  state: React.PropTypes.object,
  getRestoresRequest: React.PropTypes.func,
};
