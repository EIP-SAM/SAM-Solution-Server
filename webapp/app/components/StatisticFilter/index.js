import React from 'react';
import { PageHeader, Nav, NavItem } from 'react-bootstrap';
import Button from 'components/Button';

export class StatisticFilterComponent extends React.Component {

  componentDidMount() {
      this.props.getFiltersFromServer()
    }

  render() {

    return (
      <div>
        <PageHeader>Stats</PageHeader>
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem><Button buttonStyle="test" buttonText="LEL" link="lol">General</Button></NavItem>
          <NavItem>Save</NavItem>
          <NavItem>Restore</NavItem>
          <NavItem>Migration</NavItem>
          <NavItem>Software</NavItem>
          <NavItem>Users</NavItem>
        </Nav>
      </div>
    );
  }
}

StatisticFilterComponent.propTypes = {
  getFiltersFromServer: React.PropTypes.func.isRequired,
  filters: React.PropTypes.object.isRequired,
}
