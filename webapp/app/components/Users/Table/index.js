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
export class UserTable extends React.Component {

  render() {
    const names = [{ isLink: false, value: 'Name' },
                  { isLink: false, value: 'Email' },
                  { isLink: false, value: 'Belongs to group(s)' },
                  { isLink: false, value: 'Edit' },
                  { isLink: false, value: 'Delete' }];

    let data = [];

    if (typeof this.props.state.users !== 'undefined') {
      if (this.props.state.users.users.length > 0) {
        data = this.props.state.users.users;
      }
    }

    return (
      <Table responsive hover striped>
        <thead>
          <Tr items={names} component={Th} />
        </thead>
        <tbody>
        {data.map((user, index) => {
          const actionEdit = [];
          const actionRemove = [];
          let groupName = '';

          groupName = user.groups.map((group, index2) => {
            if (index2 > 0) {
              groupName += ', ';
            }
            groupName += group.name;
            return groupName;
          });

          actionEdit.push(<ButtonPopover key={`action-${0}`} trigger="hover" placement="bottom" popoverContent="Edit User" buttonType="link" icon="pencil" />);
          actionRemove.push(<ButtonPopover key={`action-${1}`} trigger="hover" placement="bottom" popoverContent="Delete User" buttonType="link" icon="trash" />);
          return (
            <Tr
              key={`row-${index}`} items={[
                { isLink: false, value: user.name },
                { isLink: false, value: user.email },
                { isLink: false, value: groupName },
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

UserTable.propTypes = {
  state: React.PropTypes.object,
};
