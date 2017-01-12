//
// Component group rights form edit group
//

import React from 'react';
import SaveRestoreMode from 'containers/EditGroup/Form/GroupRights/SaveRestoreMode';
import MigrationMode from 'containers/EditGroup/Form/GroupRights/MigrationMode';
import SoftwareMode from 'containers/EditGroup/Form/GroupRights/SoftwareMode';

/* eslint-disable react/prefer-stateless-function */
export default class EditGroupFormGroupRights extends React.Component {
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
