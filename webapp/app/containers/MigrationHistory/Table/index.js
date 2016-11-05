//
// Container for Migration History Table
//

import { connect } from 'react-redux';
import Table from 'components/MigrationHistory/Table';
import { getAllMigrationsRequest } from './actions';

function mapStateToProps(state) {
  return {
    migrations: state.get('migrationHistory').get('table').migrations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllMigrations: () => dispatch(getAllMigrationsRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);
