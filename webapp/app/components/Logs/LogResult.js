//
// LogResult : block that shows the logs once a query
// has been executed
//

import React from 'react';
import { Table } from 'react-bootstrap';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';

/* eslint-disable react/prefer-stateless-function */
export class LogResult extends React.Component {
  getDefaultLog() {
    let logs = this.props.logs;
    if (typeof (logs) === 'undefined') {
      logs = { error: false, data: [] };
    }

    return logs;
  }

  getRowValues(log) {
    return [
      { isLink: false, value: this.formatDate(log.time) },
      { isLink: false, value: log.name },
      { isLink: false, value: log.hostname },
      { isLink: false, value: log.msg },
    ];
  }

  formatDate(ISODate) {
    const date = new Date(ISODate);
    return date.toString();
  }

  render() {
    const logs = this.getDefaultLog();
    const columns = [
      { isLink: false, value: 'Date' },
      { isLink: false, value: 'Module' },
      { isLink: false, value: 'Host' },
      { isLink: false, value: 'Message' },
    ];

    const bodyStyle = {
      backgroundColor: '#333333',
      color: 'white',
      borderColor: 'black',
    };

    return (
      <Table responsive>
        <thead>
          <Tr items={columns} component={Th} />
        </thead>
        <tbody style={bodyStyle}>
          {
            logs.data.map((log, index) => (
              <Tr
                style={bodyStyle}
                key={`item-${index}`}
                items={this.getRowValues(log)}
                component={Td}
              />
            ))
          }
        </tbody>
      </Table>
    );
  }
}

LogResult.propTypes = {
  logs: React.PropTypes.object,
};
