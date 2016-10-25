//
// Table sofwares by user page
//

import React from 'react';
import { Table } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SoftwaresByUserTable extends React.Component {
  handleInstallClick() {
  }

  handleUpdateClick() {
  }

  handleDeleteClick() {
  }

  render() {
    const names = [{ isLink: false, value: '#' },
                  { isLink: false, value: 'Name' },
                  { isLink: false, value: 'Version' },
                  { isLink: false, value: 'Actions' }];

    return (
      <div>
        <Table responsive hover striped>
          <thead>
            <Tr items={names} component={Th} />
          </thead>
          <tbody>
          {this.props.softwares.map((soft, index) => {
            const actions = [];

            actions.push(<ButtonPopover key={`action-${0}`} id="install_software" trigger={['focus', 'hover']} placement="bottom" popoverContent="Install software" buttonType="link" icon="plus" onClick={() => this.handleInstallClick()} />);
            actions.push(<ButtonPopover key={`action-${1}`} id="update_software" trigger={['focus', 'hover']} placement="bottom" popoverContent="Update software" buttonType="link" icon="open" onClick={() => this.handleUpdateClick()} />);
            actions.push(<ButtonPopover key={`action-${2}`} id="delete_software" trigger={['focus', 'hover']} placement="bottom" popoverContent="Delete software" buttonType="link" icon="trash" onClick={() => this.handleDeleteClick()} buttonStyle={styles.trash} />);
            return (
              <Tr
                key={`row-${index}`} items={[
                  { isLink: false, value: 0 },
                  { isLink: false, value: soft.name },
                  { isLink: false, value: soft.version },
                  { isLink: false, value: actions }]} component={Td}
              />
            );
          })}
          </tbody>
        </Table>
      </div>
    );
  }
}

SoftwaresByUserTable.propTypes = {
  softwares: React.PropTypes.array,
};
