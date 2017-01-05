//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import UserDeletionModal from 'containers/Users/Table/ModalDeletionUser';
import UserRebootModal from 'containers/Users/Table/ModalRebootUser';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class UserTable extends React.Component {
  handleRebootClick(username) {
    this.props.showInstantRebootModal();
    this.props.getUsername(username);
  }

  handleDeleteClick(user) {
    this.props.showInstantDeleteModal();
    this.props.userToDelete(user.id);
    this.props.getUsername(user.name);
  }

  render() {
    const names = [{ isLink: false, value: '#' },
                  { isLink: false, value: 'Name' },
                  { isLink: false, value: 'Email' },
                  { isLink: false, value: 'Group(s)' },
                  { isLink: false, value: 'Actions' }];

    return (
      <div>
        <Table responsive hover striped>
          <thead>
            <Tr items={names} component={Th} />
          </thead>
          <tbody>
            {this.props.users.map((user, index) => {
              const action = [];

              let groupName = '';
              user.groups.map((group, index2) => {
                if (index2 > 0) {
                  groupName += ', ';
                }
                groupName += group.name;
                return true;
              });
              action.push(<ButtonPopover key={`action-${0}`} id="edit_user" trigger={['focus', 'hover']} placement="bottom" popoverContent="Edit User" buttonType="link" icon="pencil" link={`/edit-user/${user.id}`} />);
              action.push(<ButtonPopover key={`action-${1}`} id="reboot_user" trigger={['focus', 'hover']} placement="bottom" popoverContent="Reboot User" buttonType="link" icon="refresh" onClick={() => this.handleRebootClick(user.name)} />);
              action.push(<ButtonPopover key={`action-${2}`} id="delete_user" trigger={['focus', 'hover']} placement="bottom" popoverContent="Delete User" buttonType="link" icon="trash" onClick={() => this.handleDeleteClick(user)} buttonStyle={styles.trash} />);
              return (
                <Tr
                  key={`row-${index}`} items={[
                  { isLink: false, value: user.id },
                  { isLink: false, value: user.name },
                  { isLink: false, value: user.email },
                  { isLink: false, value: groupName },
                  { isLink: false, value: action }]} component={Td}
                />
              );
            })}
          </tbody>
        </Table>
        <UserDeletionModal />
        <UserRebootModal />
      </div>
    );
  }
}

UserTable.propTypes = {
  users: React.PropTypes.array,
  showInstantDeleteModal: React.PropTypes.func,
  showInstantRebootModal: React.PropTypes.func,
  userToDelete: React.PropTypes.func,
  getUsername: React.PropTypes.func,
};
