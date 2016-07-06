import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export class StatisticFilterComponent extends React.Component {

  componentDidMount() {
      this.props.getFiltersFromServer()
    }

  render() {

    var filters = this.props.filters.filters;

    if (!filters)
      return null;

    return (
      <Nav bsStyle="pills" activeKey={1}>
        {
          filters.map((data, index) => (
            <NavItem key={ index }>{ data }</NavItem>
          ))
        }
      </Nav>
    );
  }
}

StatisticFilterComponent.propTypes = {
  getFiltersFromServer: React.PropTypes.func.isRequired,
  filters: React.PropTypes.object.isRequired,
}
