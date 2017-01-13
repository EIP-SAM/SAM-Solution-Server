//
// Component group rights form create group
//

import React from 'react';
import SaveRestoreMode from 'containers/CreateGroup/Form/GroupRights/SaveRestoreMode';
import MigrationMode from 'containers/CreateGroup/Form/GroupRights/MigrationMode';
import SoftwareMode from 'containers/CreateGroup/Form/GroupRights/SoftwareMode';

/* eslint-disable react/prefer-stateless-function */
export default class CreateGroupFormGroupRights extends React.Component {
  render() {
    return (
      <div>
        <SaveRestoreMode />
        <MigrationMode />
        <SoftwareMode />
      </div>
    );
  }
}
