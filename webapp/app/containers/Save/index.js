//
// Page save
//

import React from 'react';
import { PageHeader, ButtonToolbar, Button, Table } from 'react-bootstrap';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import styles from 'components/Save/styles.css';


/* eslint-disable react/prefer-stateless-function */
export default class Save extends React.Component {

  render() {
    const names = [{ isLink: 'true', link: '#', value: '#' }, { isLink: 'false', value: 'Username' },
     { isLink: 'false', value: 'Last save date' }, { isLink: 'false', value: 'Files' },
      { isLink: 'false', value: 'Actions' }];

    return (
      <div>
        <PageHeader>Save</PageHeader>
        <ButtonToolbar className={styles.toolbar}>
          <Button bsStyle="info" className={styles.button}>Launch save for all</Button>
          <Button bsStyle="info" className={styles.button}>Program save for all</Button>
        </ButtonToolbar>
        <Table responsive hover striped>
          <thead>
            <Tr items={names} component={Th} />
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
