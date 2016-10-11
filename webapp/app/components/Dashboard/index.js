//
// Dashboard container
//

import React from 'react';

export class Dashboard extends React.Component {
  componentWillMount() {
    this.userInfo = this.props.userInfo;
    console.log('user info: ', this.userInfo);
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <hr />
      </div>
    );
  }
}

Dashboard.propTypes = {
  userInfo: React.propTypes.Object,
};
