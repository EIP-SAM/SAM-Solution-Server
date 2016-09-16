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
  handleRebootClick(username) {
    this.props.rebootUser(username);
  }

  handleDeleteClick(save) {
    this.props.showInstantDeleteModal();
  }


  render() {
    const names = [{ isLink: false, value: 'Name' },
                  { isLink: false, value: 'Email' },
                  { isLink: false, value: 'Belongs to group(s)' },
                  { isLink: false, value: 'Edit' },
                  { isLink: false, value: 'Reboot' },
                  { isLink: false, value: 'Delete' }];

    let data = [];
    if (this.props.state.users.users !== null) {
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
          actionEdit.push(<ButtonPopover key={`action-${0}`} trigger="hover" placement="bottom" popoverContent="Edit User" buttonType="link" icon="pencil" link={`/edit-user/${user.name}`} />);
          const actionReboot = <ButtonPopover key={`action-${1}`} trigger="hover" placement="bottom" popoverContent="Reboot User" buttonType="link" icon="refresh" onClick={() => this.handleRebootClick(user.name)} />;
          actionRemove.push(<ButtonPopover key={`action-${2}`} trigger="hover" placement="bottom" popoverContent="Delete User" buttonType="link" icon="trash" onClick={() => this.handleDeleteClick(user)} />);
          return (
            <Tr
              key={`row-${index}`} items={[
                { isLink: false, value: user.name },
                { isLink: false, value: user.email },
                { isLink: false, value: groupName },
                { isLink: false, value: actionEdit },
                { isLink: false, value: actionReboot },
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
  showInstantDeleteModal: React.PropTypes.func,
  rebootUser: React.PropTypes.func,
};
