//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { RestoreCreationForm } from 'components/RestoreCreation/Form';

/* eslint-disable react/prefer-stateless-function */
export class RestoreCreation extends React.Component {

  render() {
    return (
      <div>
        <PageHeader>Launch Restore</PageHeader>
        {
        <RestoreCreationForm
          data={this.props.data}
          state={this.props.state}
          listFiles={this.props.listFiles}
          nameUser={this.props.nameUser}
          listSaves={this.props.listSaves}
          getRestores={this.props.getRestores}
         />
       }
      </div>
    );
  }
}

RestoreCreation.propTypes = {
  data: React.PropTypes.object,
  state: React.PropTypes.object,
  getRestores: React.PropTypes.func,
  nameUser: React.PropTypes.func,
  listFiles: React.PropTypes.func,
  listSaves: React.PropTypes.func,
  createRestoresRequest: React.PropTypes.func,
};
