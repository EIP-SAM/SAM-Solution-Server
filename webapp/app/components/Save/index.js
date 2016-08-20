//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import SaveTable from 'containers/Save/Save/Table';
import SaveButtons from 'containers/Save/Save/Buttons';
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
        <SaveTable />
      </div>
    );
  }
}

Save.propTypes = {
  getSavesRequest: React.PropTypes.func,
};
