//
// PageNotFound component
//

import React from 'react';
import { Alert } from 'react-bootstrap';
import styles from './styles.css';

export class PageNotFound extends React.Component {

  componentDidMount() {
    this.isLogged = this.props.userInfo;

    setTimeout(() => {
      if (this.isLogged) {
        this.props.redirectToLoginPage();
      } else {
        this.props.redirectToDashboardPage();
      }
    }, 5000);
  }

  render() {
    let page = this.isLogged !== undefined ? 'login' : 'dashboard';

    return (
      <Alert bsStyle="info" className={styles.pageNotFoundAlert}>
        The page you are trying to access does not exist, you will be redirect to the {page} page soon ...
      </Alert>
    );
  }
}

PageNotFound.propTypes = {
  userInfo: React.PropTypes.object,
  redirectToLoginPage: React.PropTypes.func,
  redirectToDashboardPage: React.PropTypes.func,
  redirectToPageNotFound: React.PropTypes.func,
};
