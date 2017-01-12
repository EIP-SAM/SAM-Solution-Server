//
// Migration History table components
//

import React from 'react';
import { Table as TableBS } from 'react-bootstrap';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Line from 'containers/MigrationHistory/Table/Line';

const columns = ['#', 'Status', 'Date', 'User', 'Image', 'Comment', 'Actions'];

/* eslint-disable react/prefer-stateless-function */
export default class Table extends React.Component {
  componentWillMount() {
    this.props.getAllMigrations();
  }

  render() {
    const migrations = (this.props.migrations) ? this.props.migrations : [];
    const statusFilter = (this.props.statusFilter) ? this.props.statusFilter : 'all';

    return (
      <div>
        <TableBS responsive hover striped>
          <thead>
            <Tr items={columns} component={Th} />
          </thead>
          <tbody>
            {
              migrations.map((migration, index) => {
                if (statusFilter === 'all' || migration.status === statusFilter) {
                  return <Line key={index} index={index} values={migration} />;
                }
                return undefined;
              }, this)
            }
          </tbody>
        </TableBS>
      </div>
    );
  }
}

Table.propTypes = {
  migrations: React.PropTypes.arrayOf(React.PropTypes.object),
  statusFilter: React.PropTypes.string,
  getAllMigrations: React.PropTypes.func,
};
