//
// Container PageNotFound
//

import { connect } from 'react-redux';
import { redirectToLoginPage, redirectToDashboardPage, redirectToPageNotFound } from './actions';

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
)();
