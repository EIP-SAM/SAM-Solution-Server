//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';

/* eslint-disable react/prefer-stateless-function */
export class RestoreTable extends React.Component {

  render() {
    const names = [{ isLink: 'true', link: '#', value: '#' },
                  { isLink: 'false', value: 'Username' },
                  { isLink: 'false', value: 'Last Restore date' },
                  { isLink: 'false', value: 'Files' },
                  { isLink: 'false', value: 'Actions' }];

    const actions = [];
    actions.push(<ButtonPopover key={`action-${0}`} trigger="hover" placement="bottom" popoverContent="Relaunch restore" buttonType="link" icon="repeat" />);

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
          {data.map((restore, index) =>
            <Tr
              key={`item-${index}`} items={[{ isLink: false, value: restore.id },
              { isLink: true, link: `/restore/${restore.name}`, value: restore.name },
              { isLink: false, value: restore.restores[0].execDate },
              { isLink: false, value: restore.restores[0].save_scheduled.files },
              { isLink: false, value: actions }]} component={Td}
            />
          )}
        </tbody>
      </Table>
    );
  }
}

RestoreTable.propTypes = {
  data: React.PropTypes.array,
};
