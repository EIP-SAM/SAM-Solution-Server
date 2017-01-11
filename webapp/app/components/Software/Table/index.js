//
// Table page software
//

import React from 'react';
import { Table } from 'react-bootstrap';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';

/* eslint-disable react/prefer-stateless-function */
export default class SoftwareTable extends React.Component {

  render() {
    const names = [{ isLink: 'false', link: '#', value: '#' },
                  { isLink: 'false', value: 'Username' },
                  { isLink: 'false', value: 'OS' }];

    if (!this.props.users) {
      return null;
    }

    return (
      <div>
        <Table responsive hover striped key={this.props.refresh}>
          <thead>
            <Tr items={names} component={Th} />
          </thead>
          <tbody>
            {this.props.users.map((user, index) =>
              <Tr
                key={`item-${index}-${user.os}`} items={[
                  { isLink: false, value: user.id },
                  { isLink: true, link: `/software/${user.name}/${user.id}`, value: user.name },
                  { isLink: false, value: user.os }]} component={Td}
              />
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

SoftwareTable.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object),
  refresh: React.PropTypes.number,
};
