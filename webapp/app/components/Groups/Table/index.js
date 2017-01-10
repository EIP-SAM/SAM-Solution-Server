//
// Table page save
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import GroupDeletionModal from 'containers/Groups/Table/ModalDeletionGroup';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class GroupTable extends React.Component {
  handleDeleteClick(group) {
    this.props.groupToDelete(group.name, group.id);
    this.props.showInstantDeleteModal();
  }

  render() {
    const names = [{ isLink: false, value: '#' },
                  { isLink: false, value: 'Name' },
                  { isLink: false, value: 'Save & Restore mode' },
                  { isLink: false, value: 'Migration mode' },
                  { isLink: false, value: 'Software packages mode' },
                  { isLink: false, value: 'Actions' }];

    return (
      <div>
        <Table responsive hover striped>
          <thead>
            <Tr items={names} component={Th} />
          </thead>
          <tbody>
            {this.props.groups.map((group, index) => {
              const actions = [];

              actions.push(<ButtonPopover key={`action-${0}`} id="edit_group" trigger={['focus', 'hover']} placement="bottom" popoverContent="Edit Group" buttonType="link" icon="pencil" link={`/edit-group/${group.name}/${group.id}`} />);
              actions.push(<ButtonPopover key={`action-${1}`} id="delete_group" trigger={['focus', 'hover']} placement="bottom" popoverContent="Delete Group" buttonType="link" icon="trash" buttonStyle={styles.trash} onClick={() => this.handleDeleteClick(group)} />);
              return (
                <Tr
                  key={`row-${index}`} items={[
                  { isLink: false, value: group.id },
                  { isLink: false, value: group.name },
                  { isLink: false, value: (group.saveAndRestoreMode === 1) ? 'Basic' : 'Advanced' },
                  { isLink: false, value: (group.migrationMode === 1) ? 'Basic' : 'Advanced' },
                  { isLink: false, value: (group.softwarePackagesMode === 1) ? 'Basic' : 'Advanced' },
                  { isLink: false, value: actions }]} component={Td}
                />
              );
            })}
          </tbody>
        </Table>
        <GroupDeletionModal />
      </div>
    );
  }
}

GroupTable.propTypes = {
  groups: React.PropTypes.array,
  showInstantDeleteModal: React.PropTypes.func,
  groupToDelete: React.PropTypes.func,
};
