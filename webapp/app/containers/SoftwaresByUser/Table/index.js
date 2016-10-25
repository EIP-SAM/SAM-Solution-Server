//
// Container table sofwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserTable } from 'components/SoftwaresByUser/Table';

function mapStateToProps(state) {
  return {
    softwares: state.get('softwaresByUser').get('SoftwaresByUserReducer').softwares,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserTable);
