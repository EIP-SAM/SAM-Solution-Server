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
export class SaveTable extends React.Component {

  render() {
    const names = [{ isLink: 'true', link: '#', value: '#' },
                  { isLink: 'false', value: 'Username' },
                  { isLink: 'false', value: 'Last save date' },
                  { isLink: 'false', value: 'State' },
                  { isLink: 'false', value: 'Files' },
                  { isLink: 'false', value: 'Actions' }];

    const actions = [];
    actions.push(<ButtonPopover key={`action-${0}`} trigger="hover" placement="bottom" popoverContent="Relaunch save" buttonType="link" icon="floppy-disk" />);
    actions.push(<ButtonPopover key={`action-${1}`} trigger="hover" placement="bottom" popoverContent="Relaunch save at a specific time" buttonType="link" icon="calendar" />);
    actions.push(<ButtonPopover key={`action-${2}`} trigger="hover" placement="bottom" popoverContent="Restore" buttonType="link" icon="repeat" />);

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
          {data.map((save, index) =>
            <Tr
              key={`item-${index}`} items={[{ isLink: false, value: save.id },
              { isLink: true, link: `/save/${save.name}`, value: save.name },
              { isLink: false, value: save.save_scheduleds.saves[0].execDate },
              { isLink: false, value: (save.save_scheduleds.saves[0].isSuccess) ? 'Succeeded' : 'Failed' },
              { isLink: false, value: save.save_scheduleds.files },
              { isLink: false, value: actions }]} component={Td}
            />
          )}
        </tbody>
      </Table>
    );
  }
}

SaveTable.propTypes = {
  data: React.PropTypes.array,
};
