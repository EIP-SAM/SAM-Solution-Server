//
// Log page
//

import React from 'react';
import request from 'superagent';
import LogFilter from 'components/Logs/LogFilter';
import LogResult from 'components/Logs/LogResult';

/*
*   NOTE: Talk about norm for React class
*   NOTE: Problem getInitalState/constructor
*   NOTE: Talk about containers/components pattern
*   NOTE: Talk bout eslint-disable thing
*/

/* eslint-disable react/prefer-stateless-function */
export default class LogContainer extends React.Component {
  getAllLogs() {
    request.get('http://127.0.0.1:8080/log')
      .end((error, response) => {
        if (!error && response) {
          console.log(response);
        } else {
          console.log(error);
        }
      });
  }

  render() {
    return (
      <div>
        <LogFilter loadLog={this.getAllLogs} />
        <LogResult />
      </div>
    );
  }
}
