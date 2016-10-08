//
// Container PageNotFound
//

import { connect } from 'react-redux';
import { redirectToLoginPage, redirectToDashboardPage, redirectToPageNotFound } from './actions';
import { PageNotFound } from './components/PageNotFound';

function mapStateToProps(state) {
  return {
    userInfo: state.get('login').userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    redirectToLoginPage: () => dispatch(redirectToLoginPage()),
    redirectToDashboardPage: () => dispatch(redirectToDashboardPage()),
    redirectToPageNotFound: () => dispatch(redirectToPageNotFound()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageNotFound);
