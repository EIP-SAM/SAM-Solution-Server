//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';

/* eslint-disable react/prefer-stateless-function */
export class SaveTable extends React.Component {

  onClickUser(index) {
    this.props.onClickUser(this.props.data[index].name);
  }

  render() {
    const names = [{ isLink: 'true', link: '#', value: '#' }, { isLink: 'false', value: 'Username' },
     { isLink: 'false', value: 'Last save date' }, { isLink: 'false', value: 'Files' },
      { isLink: 'false', value: 'Actions' }];

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
                key={`item-${index}`} items={[{ isLink: false, value: save.id },
                { isLink: true, link: `/save/${save.name}`, value: save.name },
                { isLink: false, value: save.save_scheduleds.saves[0].execDate },
                { isLink: false, value: save.save_scheduleds.files }]} component={Td}
              />
            );
          })}
        </tbody>
      </Table>
    );
  }
}

SaveTable.propTypes = {
  data: React.PropTypes.array,
  onClickUser: React.PropTypes.func,
};
