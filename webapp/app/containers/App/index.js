//
// App container
//

import { connect } from 'react-redux';
import { getUserInfo } from 'containers/Login/actions';
import App from 'components/App';

function mapStateToProps(state) {
  return {
    userInfo: state.get('login').userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: () => dispatch(getUserInfo()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
