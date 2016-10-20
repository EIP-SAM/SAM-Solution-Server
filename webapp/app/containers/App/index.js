//
// App container
//

import { connect } from 'react-redux';
import {
  getUserInfo,
  setAppLoadingState,
  setAppRedirectState,
} from './actions';

import App from 'components/App';

function mapStateToProps(state) {
  return {
    userInfo: state.get('app').userInfo,
    isLoading: state.get('app').isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: () => dispatch(getUserInfo()),
    setAppLoadingState: (isLoading) => dispatch(setAppLoadingState(isLoading)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
