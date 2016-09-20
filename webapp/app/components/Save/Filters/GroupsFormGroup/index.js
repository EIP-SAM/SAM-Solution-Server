//
// Filters page save
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import styles from 'components/Save/Filters/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class GroupsFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.selectGroup = this.selectGroup.bind(this);
  }

  componentDidMount() {
    this.props.getGroupsRequest();
  }

  selectGroup(e) {
    this.props.getVisibilityFilter(e.target.value, this.props.listGroups, this.props.listTypeUsers, this.props.listGroupsUsers);

  }

  render() {
    // console.log("view------listTypeUsers-------");
    // console.log(this.props.listTypeUsers);
    // console.log(this.props.listGroups);
    // console.log("view-----listTypeUsers-------");
    const groups = [];
    groups.push(<option value="-1">All Groups</option>)
    if (this.props.listGroups !== undefined){
      if (this.props.listGroups.length > 0) {
        this.props.listGroups.map(function (group, index) {
          groups.push(<option value={index}>{group.name}</option>)
        });
      }
    }
    return (
      <FormGroup controlId="groups" bsSize="small">
        <Col componentClass={ControlLabel} sm={2}>
          Groups :
        </Col>
        <Col sm={4}>
          <FormControl componentClass="select" className={styles.select} onChange={this.selectGroup}>
            { groups }
          </FormControl>
        </Col>
      </FormGroup>
    );
  }
}

GroupsFormGroup.propTypes = {
  listGroups: React.PropTypes.array,
  listTypeUsers: React.PropTypes.array,
  listGroupsUsers: React.PropTypes.array,
  getGroupsRequest: React.PropTypes.func,
  getVisibilityFilter: React.PropTypes.func,
};
