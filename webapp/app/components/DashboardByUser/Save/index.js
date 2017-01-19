//
// Component save dashboard by user page
//

import React from 'react';
import { Panel, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import SaveHistoryTable from 'containers/SaveHistory/Table';
import moment from 'moment';
import LinkContainerButton from 'components/Button';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class DashboardByUserSave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  componentDidMount() {
    const url = window.location.pathname.split('/');
    const username = url[2];
    const userId = url[3];
    this.props.getHistorySavesByUserRequest(username, 5);
    this.props.listUsers([{ id: userId, name: username }]);
  }

  getHeaderPanel() {
    const icon = (this.state.expanded) ? 'minus-sign' : 'plus-sign';
    const helpText = (this.state.expanded) ? '(click to hide)' : '(click to show)';

    return (
      <h5>
        <Glyphicon glyph={icon} />
        {' Save '}
        <span className={styles.panelHelpText} onClick={() => this.setState({ expanded: !this.state.expanded })}>
          {helpText}
        </span>
      </h5>
    );
  }

  handleClick() {
    this.props.dateSave(moment().format('DD/MM/YYYY'));
    this.props.dateDisabled(true);
    this.props.timeSave(moment().format('HH:mm'));
    this.props.timeDisabled(true);
    this.props.frequencySave('No Repeat');
    this.props.frequencyDisabled(true);
  }

  render() {
    return (
      <Panel header={this.getHeaderPanel()} collapsible bsStyle="primary">
        <ButtonToolbar className={styles.saveButtons}>
          <LinkContainerButton
            buttonBsStyle="info"
            buttonText="Launch save"
            link="/create-save"
            onClick={() => this.handleClick()}
          />
          <LinkContainerButton
            buttonBsStyle="info"
            buttonText="Program save"
            link="/create-save"
          />
        </ButtonToolbar>
        <SaveHistoryTable />
      </Panel>
    );
  }
}

DashboardByUserSave.propTypes = {
  getHistorySavesByUserRequest: React.PropTypes.func,
  listUsers: React.PropTypes.func,
  dateSave: React.PropTypes.func,
  dateDisabled: React.PropTypes.func,
  timeSave: React.PropTypes.func,
  timeDisabled: React.PropTypes.func,
  frequencySave: React.PropTypes.func,
  frequencyDisabled: React.PropTypes.func,
};
