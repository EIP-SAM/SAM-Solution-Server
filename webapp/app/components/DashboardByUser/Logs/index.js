//
// Component dashboard by user page
//

import React from 'react';
import moment from 'moment';
import { Table, Label } from 'react-bootstrap';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import levels from 'components/Logs/Results/levels.json';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class DashboardByUserLogs extends React.Component {
  componentWillMount() {
    const userId = window.location.pathname.split('/')[3];
    const username = window.location.pathname.split('/')[2];

    this.props.getFilteredLogs(
      {
        findOpts: {
          user: { name: username, id: parseInt(userId, 10) },
        },
        limit: 10,
      });
  }

  render() {
    const legends = ['Date', 'Level', 'Module', 'Message'];

    return (
      <Table responsive className={styles.tableInverse}>
        <thead>
          <Tr items={legends} component={Th} />
        </thead>
        <tbody>
          { this.props.logs.map((log, index) => (
            <Tr
              key={`row-${index}`} items={[
                { isLink: false, value: moment(log.time).format('YYYY MMMM Do HH:mm:ss') },
                { isLink: false, value: <Label bsStyle={levels[log.level].style}>{levels[log.level].name}</Label> },
                { isLink: false, value: log.moduleName },
                { isLink: false, value: log.msg }]} component={Td}
            />
            ))}
        </tbody>
      </Table>
    );
  }
}

DashboardByUserLogs.propTypes = {
  logs: React.PropTypes.arrayOf(React.PropTypes.object),
  getFilteredLogs: React.PropTypes.func,
};
