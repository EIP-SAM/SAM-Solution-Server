//
// PageNotFound component
//

import React from 'react';
import { Alert, PageHeader } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Page not found</PageHeader>
        <Alert bsStyle="info">
          The page you are trying to access does not exist...
        </Alert>
      </div>
    );
  }
}
