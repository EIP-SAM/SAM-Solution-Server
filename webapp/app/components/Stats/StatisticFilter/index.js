import React from 'react';
import { Nav, NavItem, ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button'
import styles from 'components/Stats/StatisticFilter/styles.css';

export class StatisticFilterComponent extends React.Component {

  componentDidMount() {
      this.props.getFiltersFromServer()
    }


  render() {

    var handleClick = function(type) {
      this.props.getGraphFromServer(type.value)
    }

    var filters = this.props.filters.filters;
    if (!filters)
      return null;

    return (
      <ButtonToolbar className={ styles.buttonBar } >
        {
          filters.map((value, index) => (
            <LinkContainerButton buttonText={ value } buttonType="link"
              onClick={ handleClick.bind(this, { value }) } key={ index } />
          ))
        }
      </ButtonToolbar>
    );
  }
}

StatisticFilterComponent.propTypes = {
  getFiltersFromServer: React.PropTypes.func.isRequired,
  getGraphFromServer: React.PropTypes.func.isRequired,
  filters: React.PropTypes.object.isRequired,
}
