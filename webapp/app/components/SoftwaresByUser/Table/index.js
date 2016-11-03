//
// Table sofwares by user page
//

import React from 'react';
import { Table, FormGroup, Checkbox } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import SoftwaresByUserAddSoftwareModal from 'containers/SoftwaresByUser/Table/ModalAddSoftware';
import SoftwaresByUserUpdateSoftwareModal from 'containers/SoftwaresByUser/Table/ModalUpdateSoftware';
import SoftwaresByUserDeleteSoftwareModal from 'containers/SoftwaresByUser/Table/ModalDeleteSoftware';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SoftwaresByUserTable extends React.Component {
  onChangeCheckboxLegend(event) {
    if (event.target.checked) {
      this.props.getSelectedSoftware(this.props.softwares);
      this.props.isAllCheckboxChecked(true);
    } else {
      this.props.getSelectedSoftware([]);
      this.props.isAllCheckboxChecked(false);
    }
    this.forceUpdate();
  }

  onChangeCheckbox(event, soft) {
    let selectedSoftwares = [];
    if (event.target.checked) {
      selectedSoftwares = this.props.selectedSoftwares;
      selectedSoftwares.push(soft);
    } else {
      for (const software of this.props.selectedSoftwares) {
        if (software === soft) {
          continue;
        }
        selectedSoftwares.push(software);
      }
    }
    this.props.getSelectedSoftware(selectedSoftwares);
    this.props.isAllCheckboxChecked(false);
    this.forceUpdate();
  }

  handleInstallClick() {
    this.props.showAddSoftwareModal();
  }

  handleUpdateClick() {
    this.props.showUpdateSoftwareModal();
  }

  handleDeleteClick() {
    this.props.showDeleteSoftwareModal();
  }

  render() {
    const checkboxLegend = (
      <FormGroup>
        <Checkbox onChange={(event => this.onChangeCheckboxLegend(event))} checked={(this.props.allChecked ? 'checked' : '')} />
      </FormGroup>);
    const names = [{ isLink: false, value: checkboxLegend },
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
            const checkbox = (
              <FormGroup>
                <Checkbox onChange={(event) => this.onChangeCheckbox(event, soft)} checked={(this.props.selectedSoftwares.indexOf(soft) !== -1 ? 'checked' : '')} />
              </FormGroup>);

            const actions = [];
            actions.push(<ButtonPopover key={`action-${0}`} id="install_software" trigger={['focus', 'hover']} placement="bottom" popoverContent="Install software" buttonType="link" icon="plus" onClick={() => this.handleInstallClick()} buttonStyle={styles.plus} />);
            actions.push(<ButtonPopover key={`action-${1}`} id="update_software" trigger={['focus', 'hover']} placement="bottom" popoverContent="Update software" buttonType="link" icon="open" onClick={() => this.handleUpdateClick()} buttonStyle={styles.open} />);
            actions.push(<ButtonPopover key={`action-${2}`} id="delete_software" trigger={['focus', 'hover']} placement="bottom" popoverContent="Delete software" buttonType="link" icon="trash" onClick={() => this.handleDeleteClick()} buttonStyle={styles.trash} />);
            return (
              <Tr
                key={`row-${index}`} items={[
                  { isLink: false, value: checkbox },
                  { isLink: false, value: soft.name },
                  { isLink: false, value: soft.version },
                  { isLink: false, value: actions }]} component={Td}
              />
            );
          })}
          </tbody>
        </Table>
        <SoftwaresByUserAddSoftwareModal />
        <SoftwaresByUserUpdateSoftwareModal />
        <SoftwaresByUserDeleteSoftwareModal />
      </div>
    );
  }
}

SoftwaresByUserTable.propTypes = {
  softwares: React.PropTypes.array,
  selectedSoftwares: React.PropTypes.array,
  allChecked: React.PropTypes.bool,
  getSelectedSoftware: React.PropTypes.func,
  showAddSoftwareModal: React.PropTypes.func,
  showUpdateSoftwareModal: React.PropTypes.func,
  showDeleteSoftwareModal: React.PropTypes.func,
  isAllCheckboxChecked: React.PropTypes.func,
};
