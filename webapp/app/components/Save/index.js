//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { SaveTable } from 'components/Save/Table';
import { SaveButtons } from 'components/Save/Buttons';
import { SaveFilters } from 'components/Save/Filters';

/* eslint-disable react/prefer-stateless-function */
export class Save extends React.Component {

  componentDidMount() {
    this.props.getSavesRequest();
  }

  render() {
    return (
      <div>
        <PageHeader>Save</PageHeader>
        <SaveFilters />
        <SaveButtons />
        <SaveTable data={this.props.state.saves} />
      </div>
    );
  }
}

Save.propTypes = {
  state: React.PropTypes.object,
  getSavesRequest: React.PropTypes.func,
};
