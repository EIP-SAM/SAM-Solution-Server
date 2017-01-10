//
// Filters page software
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import styles from 'components/Software/Filters/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class SoftwareFiltersGroups extends React.Component {
  constructor(props) {
    super(props);
    this.selectGroup = this.selectGroup.bind(this);
  }

  componentDidMount() {
    this.props.getGroupsRequest();
  }

  selectGroup(e) {
    this.props.getCurrentGroup(e.target.value);
    this.props.filterUsers(this.props.currentTypeUser, e.target.value, this.props.allUsers);
  }

  render() {
    const selectGroups = [];
    selectGroups.push(<option key="option-all" value="All">All Groups</option>);
    if (this.props.groups !== undefined) {
      if (this.props.groups.length > 0) {
        this.props.groups.map((group, index) => (
          selectGroups.push(<option key={`option-${index}`} value={group.name}>{group.name}</option>)
        ));
      }
    }
    return (
      <FormGroup controlId="groups" bsSize="small">
        <Col componentClass={ControlLabel} sm={2}>
          Groups :
        </Col>
        <Col sm={4}>
          <FormControl componentClass="select" className={styles.select} onChange={this.selectGroup}>
            {selectGroups}
          </FormControl>
        </Col>
      </FormGroup>
    );
  }
}

SoftwareFiltersGroups.propTypes = {
  groups: React.PropTypes.array,
  currentTypeUser: React.PropTypes.string,
  allUsers: React.PropTypes.array,
  getCurrentGroup: React.PropTypes.func,
  getGroupsRequest: React.PropTypes.func,
  filterUsers: React.PropTypes.func,
};
