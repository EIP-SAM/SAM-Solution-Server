//
// PageNotFound component
//

import React from 'react';
import { Alert } from 'react-bootstrap';

export class PageNotFound extends React.Component {

  componentDidMount() {
    this.state.isLogged = this.props.userInfo;
  }

  render() {
    let page = this.state.isLogged !== undefined ? 'dashboard' : 'login';

    return (
      <Alert bsStyle="danger">
        The page you are trying to access does not exist, you will be redirect to the {page} page soon ...
      </Alert>
    );
  }
}

PageNotFound.propTypes = {
  userInfo: React.PropTypes.object,
};
