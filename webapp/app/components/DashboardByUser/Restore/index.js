//
// Component restore dashboard by user page
//

import React from 'react';
import { Panel, ButtonToolbar } from 'react-bootstrap';
import RestoreHistoryTable from 'containers/RestoreHistory/Table';
import moment from 'moment';
import LinkContainerButton from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class DashboardByUserRestore extends React.Component {
  constructor(props) {
    super(props);
    const url = window.location.pathname.split('/');
    const username = url[2];
    const userId = url[3];
    this.state = {
      open: false,
      userId,
      username,
    };
  }

  componentDidMount() {
    this.props.getHistoryRestoresByUserRequest(this.state.username, 5);
  }

  handleCollapsingPanelClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Panel collapsible header="Restore" expanded={this.state.open} onClick={() => this.handleCollapsingPanelClick()}>
        <ButtonToolbar className={styles.saveButtons}>
          <LinkContainerButton
            buttonBsStyle="info"
            buttonText="Launch restore"
            link={`/create-restore/${this.state.username}`}
          />
        </ButtonToolbar>
        <RestoreHistoryTable />
      </Panel>
    );
  }
}

DashboardByUserRestore.propTypes = {
  getHistoryRestoresByUserRequest: React.PropTypes.func,
};
