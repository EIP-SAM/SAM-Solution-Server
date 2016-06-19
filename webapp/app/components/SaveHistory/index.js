//
// Page history save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { SaveHistoryButtons } from 'components/SaveHistory/Buttons';
import { SaveHistoryTable } from 'components/SaveHistory/Table';
import styles from 'components/SaveHistory/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveHistory extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.location.pathname);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <PageHeader>Save</PageHeader>
        <PageHeader className={styles.title}><small>Username</small></PageHeader>
        <SaveHistoryButtons />
        <SaveHistoryTable />
      </div>
    );
  }
}
