//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class RestoreHistoryTable extends React.Component {

  render() {
    const names = [{ isLink: false, value: 'Date' },
                  { isLink: false, value: 'State' },
                  { isLink: false, value: 'Files' },
                  { isLink: false, value: 'Actions' }];


    const actions = [];
    actions.push(<ButtonPopover key={`action-${0}`} trigger="hover" placement="bottom" popoverContent="Relaunch Restore" buttonType="link" icon="repeat" />);

    let data = this.props.data;
    if (typeof data === 'undefined') {
      data = [];
    }
    console.log(data);

    return (
      <Table responsive hover striped>
        <thead>
          <Tr items={names} component={Th} />
        </thead>
        <tbody>
        {data.map((restore, index) =>
          <Tr
            key={`row-${index}`} items={[
              { isLink: false, value: restore.execDate },
              { isLink: false, value: (restore.isStart) ? ((restore.isFinish) ? ((restore.isSuccess) ? 'Succeeded' : 'Failed') : 'In progress') : 'Scheluded' },
              { isLink: false, value: restore.save_scheduled.files },
              { isLink: false, value: actions }]} component={Td}
          />
        )}
        </tbody>
      </Table>
    );
  }
}

RestoreHistoryTable.propTypes = {
  data: React.PropTypes.array,
};
