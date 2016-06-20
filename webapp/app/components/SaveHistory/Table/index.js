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
    const names = [{ isLink: false, value: 'Date' },
                  { isLink: false, value: 'State' },
                  { isLink: false, value: 'Files' },
                  { isLink: false, value: 'Actions' }];


    let data = this.props.data;
    if (typeof data === 'undefined') {
      data = [];
    }

    return (
      <Table responsive hover striped>
        <thead>
          <Tr items={names} component={Th} />
        </thead>
        <tbody>
        {data.map((save, index) => {
          return (
            <Tr
              key={`item-${index}`} items={[
              { isLink: false, value: save.execDate },
              { isLink: false, value: (save.isStart) ? ((save.isFinish) ? ((save.isSuccess) ? 'Succeeded' : 'Failed') : 'In progress') : 'Scheluded' },
              { isLink: false, value: save.save_scheduled.files }]} component={Td}
            />
          );
        })}
        </tbody>
      </Table>
    );
  }
}

SaveHistoryTable.propTypes = {
  data: React.PropTypes.array,
};
