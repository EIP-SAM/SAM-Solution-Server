//
// Migration History table components
//

import React from 'react';
import { Table as TableBS } from 'react-bootstrap';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Line from './Line';

const columns = [
  { isLink: false, value: '#' },
  { isLink: false, value: 'Status' },
  { isLink: false, value: 'Date' },
  { isLink: false, value: 'User' },
  { isLink: false, value: 'Image' },
  { isLink: false, value: 'Comment' },
  { isLink: false, value: 'Actions' },
];

/* eslint-disable react/prefer-stateless-function */
export default class Table extends React.Component {
  componentWillMount() {
    this.props.getAllMigrations();
  }

  render() {
    return (
      <div>
        <TableBS responsive hover striped>
          <thead>
            <Tr items={columns} component={Th} />
          </thead>
          <tbody>
            {
              this.props.migrations.map((migration, index) => (
                <Line key={index} index={index} values={migration} />
              ))
            }
          </tbody>
        </TableBS>
      </div>
    );
  }
}

Table.propTypes = {
  migrations: React.PropTypes.array,
  getAllMigrations: React.PropTypes.func,
};
