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
export class GroupTable extends React.Component {

  render() {
    const names = [{ isLink: false, value: 'Name' },
                  { isLink: false, value: 'Save and restore mode' },
                  { isLink: false, value: 'Migration mode' },
                  { isLink: false, value: 'Software packages mode' },
                  { isLink: false, value: 'Edit' },
                  { isLink: false, value: 'Delete' }];

    let data = [];

    if (typeof this.props.state.groups !== 'undefined') {
      if (this.props.state.groups.groups.length > 0) {
        data = this.props.state.groups.groups;
      }
    }

    return (
      <Table responsive hover striped>
        <thead>
          <Tr items={names} component={Th} />
        </thead>
        <tbody>
        {data.map((group, index) => {
          const actionEdit = [];
          const actionRemove = [];

          actionEdit.push(<ButtonPopover key={`action-${0}`} link={`/edit-group/${group.name}`} trigger="hover" placement="bottom" popoverContent="Edit Group" buttonType="link" icon="pencil" />);
          actionRemove.push(<ButtonPopover key={`action-${1}`} trigger="hover" placement="bottom" popoverContent="Delete Group" buttonType="link" icon="trash" />);
          return (
            <Tr
              key={`row-${index}`} items={[
                { isLink: false, value: group.name },
                { isLink: false, value: group.saveAndRestoreMode },
                { isLink: false, value: group.migrationMode },
                { isLink: false, value: group.softwarePackagesMode },
                { isLink: false, value: actionEdit },
                { isLink: false, value: actionRemove }]} component={Td}
            />
          );
        })}
        </tbody>
      </Table>
    );
  }
}

GroupTable.propTypes = {
  state: React.PropTypes.object,
};
