//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';

/* eslint-disable react/prefer-stateless-function */
export class SaveHistoryTable extends React.Component {

  render() {
    const names = [{ isLink: false, link: '#', value: '#' }, { isLink: false, value: 'State' },
     { isLink: false, value: 'Date' }, { isLink: false, value: 'Files' },
      { isLink: false, value: 'Actions' }];

    return (
      <Table responsive hover striped>
        <thead>
          <Tr items={names} component={Th} />
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

SaveHistoryTable.propTypes = {
  data: React.PropTypes.array,
  onClickUser: React.PropTypes.func,
};
