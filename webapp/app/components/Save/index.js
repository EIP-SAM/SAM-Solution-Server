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
        <SaveButtons
          dateSave={this.props.dateSave}
          timeSave={this.props.timeSave}
          frequencySave={this.props.frequencySave}
        />
        <SaveTable
          data={this.props.state.saves}
          addAllFiles={this.props.addAllFiles}
        />
      </div>
    );
  }
}

Save.propTypes = {
  state: React.PropTypes.object,
  getSavesRequest: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  addAllFiles: React.PropTypes.func,
};
