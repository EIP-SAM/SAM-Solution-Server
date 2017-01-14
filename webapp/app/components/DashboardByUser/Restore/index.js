//
// Component restore dashboard by user page
//

import React from 'react';
import { Panel, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import RestoreHistoryTable from 'containers/RestoreHistory/Table';
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
      expanded: false,
      userId,
      username,
    };
  }

  componentDidMount() {
    this.props.getHistoryRestoresByUserRequest(this.state.username, 5);
  }

  getHeaderPanel() {
    const icon = (this.state.expanded) ? 'minus-sign' : 'plus-sign';
    const helpText = (this.state.expanded) ? '(click to hide)' : '(click to show)';

    return (
      <h5 onClick={() => this.setState({ expanded: !this.state.expanded })}>
        <Glyphicon glyph={icon} />
        {' Restore '}
        <span className={styles.panelHelpText}>
          {helpText}
        </span>
      </h5>
    );
  }

  render() {
    return (
      <Panel header={this.getHeaderPanel()} collapsible bsStyle="primary">
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
