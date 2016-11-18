//
// Migration History Filters component
//

import React from 'react';
import {
  Form,
  Label,
  Col,
  FormGroup,
  ControlLabel,
} from 'react-bootstrap';
import RadioGroup from 'components/RadioGroup';

const status = [
  <Label>all</Label>,
  <Label bsStyle="success">done</Label>,
  <Label bsStyle="warning">in progress</Label>,
  <Label bsStyle="primary">planned</Label>,
];

/* eslint-disable react/prefer-stateless-function */
export default class Filters extends React.Component {
  componentWillMount() {
    this.props.setStatusFilter('all');
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="migrationStatus" bsSize="small">
          <Col componentClass={ControlLabel} sm={2}>
            Show :
          </Col>
          <Col sm={4}>
            <RadioGroup
              onChange={(e) => this.props.setStatusFilter(e.props.children)}
              placeholder={status[0]}
              values={status}
              inline
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

Filters.propTypes = {
  setStatusFilter: React.PropTypes.func,
};
