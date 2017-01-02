//
// Migration History Line main components
//

import React from 'react';
import moment from 'moment';
import Tr from 'components/Tr';
import Td from 'components/Td';
import { Label } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import styles from './styles.css';
import statusLabel from 'components/MigrationHistory/statusToLabel.json';

/* eslint-disable react/prefer-stateless-function */
export default class Line extends React.Component {
  getStatusLabel() {
    return (
      <Label bsStyle={statusLabel[this.props.values.status]}>
        {this.props.values.status}
      </Label>
    );
  }

  getFormatedDate() {
    return moment(this.props.values.migrationDate).format('YYYY MMMM Do HH:mm');
  }

  getActions() {
    if (this.props.values.status === 'planned') {
      return (
        <span>
          <ButtonPopover
            buttonStyle={styles.trash}
            id="delete_migration"
            placement="bottom"
            trigger={['focus', 'hover']}
            popoverContent="Delete Migration"
            buttonType="link"
            icon="trash"
            link=""
            onClick={() => this.deleteMigration()}
          />
          <ButtonPopover
            id="edit_migration"
            trigger={['focus', 'hover']}
            placement="bottom"
            popoverContent="Edit Migration"
            buttonType="link"
            icon="pencil"
            link=""
            onClick={() => this.editMigration()}
          />
        </span>
      );
    } else if (this.props.values.status === 'done') {
      return (
        <ButtonPopover
          buttonStyle={styles.trash}
          id="delete_migration"
          trigger={['focus', 'hover']}
          placement="bottom"
          popoverContent="Delete Migration"
          buttonType="link"
          icon="trash"
          link=""
          onClick={() => this.deleteMigration()}
        />
      );
    }
    return (<span></span>);
  }

  deleteMigration() {
    this.props.deleteMigration(this.props.values);
  }

  editMigration() {
    this.props.setCreateDate(this.props.values.migrationDate);
    this.props.setCreateTime(moment(this.props.values.migrationDate).format('HH:mm'));
    this.props.setSelectedUser(this.props.values.userId);
    this.props.setSelectedImage(this.props.values.imageId);
    this.props.showCreateMigrationPopup(true, this.props.values);
  }

  render() {
    return (
      <Tr
        items={[
          { isLink: false, value: this.props.index },
          { isLink: false, value: this.getStatusLabel() },
          { isLink: false, value: this.getFormatedDate() },
          { isLink: false, value: this.props.values.user.name },
          { isLink: false, value: this.props.values.image.name },
          { isLink: false, value: this.props.values.comment },
          { isLink: false, value: this.getActions() },
        ]}
        component={Td}
      />
    );
  }
}

Line.propTypes = {
  index: React.PropTypes.number,
  values: React.PropTypes.object,
  setSelectedUser: React.PropTypes.func,
  setSelectedImage: React.PropTypes.func,
  setCreateDate: React.PropTypes.func,
  setCreateTime: React.PropTypes.func,
  showCreateMigrationPopup: React.PropTypes.func,
  deleteMigration: React.PropTypes.func,
};
