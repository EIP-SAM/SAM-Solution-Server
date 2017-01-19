//
// Image management page main components
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import ListImage from 'containers/ImageManagement/ListImage';
import NewImage from 'containers/ImageManagement/NewImage';
import AddImage from 'containers/ImageManagement/AddImage';

/* eslint-disable react/prefer-stateless-function */
export default class Log extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Images Management</PageHeader>
        <NewImage />
        <ListImage />
        <AddImage />
      </div>
    );
  }
}
