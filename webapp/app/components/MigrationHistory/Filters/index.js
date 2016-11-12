//
// Migration History Filters component
//

import React from 'react';
import {
  Label,
  ButtonToolbar,
  Col,
  Grid,
} from 'react-bootstrap';
import { LinkContainerButton as Button } from 'components/Button';
import RadioGroup from 'components/RadioGroup';
import styles from './styles.css';

const status = [
  <Label>all</Label>,
  <Label bsStyle="success">done</Label>,
  <Label bsStyle="warning">in progress</Label>,
  <Label bsStyle="primary">planned</Label>,
];

/* eslint-disable react/prefer-stateless-function */
export default class Filters extends React.Component {
  render() {
    return (
      <Grid className={styles.filters}>
        <Col xs={9} md={6}>
          Show:
          <RadioGroup
            className={styles.statusFilter}
            onChange={(e) => this.props.setStatusFilter(e.props.children)}
            placeholder={status[0]}
            values={status}
            inline
          />
        </Col>
        <Col xs={9} md={6}>
          <ButtonToolbar className={styles.createButton}>
            <Button
              buttonBsStyle="info"
              buttonText="Create Migration"
              link="#"
            />
          </ButtonToolbar>
        </Col>
      </Grid>
    );
  }
}

Filters.propTypes = {
  setStatusFilter: React.PropTypes.func,
};
