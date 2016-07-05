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
          const displayButton = (save.isStart) ? styles.undisplay : styles.button;
          const actions = [];
          actions.push(<ButtonPopover key={`action-${0}`} trigger="hover" placement="bottom" popoverContent="Relaunch Save" buttonType="link" icon="floppy-disk" />);
          actions.push(<ButtonPopover key={`action-${1}`} trigger="hover" placement="bottom" popoverContent="Relaunch save at a specific time" buttonType="link" icon="calendar" />);
          actions.push(<ButtonPopover key={`action-${2}`} trigger="hover" placement="bottom" popoverContent="Restore" buttonType="link" icon="repeat" />);
          actions.push(<ButtonPopover key={`action-${3}`} trigger="hover" placement="bottom" popoverContent="Remove scheduled save" buttonType="link" icon="remove" buttonStyle={displayButton} />);

          const status = (save.isStart) ? ((save.isFinish) ? ((save.isSuccess) ? 'Succeeded' : 'Failed') : 'In progress') : 'Scheluded';

          return (
            <Tr
              key={`row-${index}`} items={[
                { isLink: false, value: save.execDate },
                { isLink: false, value: status },
                { isLink: false, value: save.save_scheduled.files },
                { isLink: false, value: actions }]} component={Td}
            />

          );
        }

        )}
        </tbody>
      </Table>
    );
  }
}

SaveHistoryTable.propTypes = {
  data: React.PropTypes.array,
};
