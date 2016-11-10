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

const statusLabel = {
  done: 'success',
  'in progress': 'warning',
  planned: 'primary',
};

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
    return moment(this.props.values.date).format('YYYY MMMM Do HH:mm:ss');
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
          />
          <ButtonPopover
            id="edit_migration"
            trigger={['focus', 'hover']}
            placement="bottom"
            popoverContent="Edit Migration"
            buttonType="link"
            icon="pencil"
            link=""
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
        />
      );
    }
    return (<span></span>);
  }

  render() {
    return (
      <Tr
        items={[
          { isLink: false, value: this.props.index },
          { isLink: false, value: this.getStatusLabel() },
          { isLink: false, value: this.getFormatedDate() },
          { isLink: false, value: this.props.values.userName },
          { isLink: false, value: this.props.values.image },
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
};
