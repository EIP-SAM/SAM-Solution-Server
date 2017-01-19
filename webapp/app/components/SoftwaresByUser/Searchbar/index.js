//
// Searchbar sofwares by user page
//

import React from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class SoftwaresByUserSearchbar extends React.Component {
  handleChangeSearchbar(event) {
    this.props.searchbarChange(event.target.value);
    this.props.searchbarState(true);
  }

  handleValidationSearchbar() {
    this.props.searchSoftwareRequest(this.props.username, this.props.searchbar);
    this.props.searchbarState(false);
  }

  handleEmptySearchBar() {
    this.props.searchbarChange('');
    this.props.searchbarState(true);
    this.props.getInstalledSoftwaresRequest(this.props.username);
  }

  render() {
    let button = null;

    if (this.props.searchstate === true) {
      button = <InputGroup.Addon onClick={() => this.handleValidationSearchbar()}><Glyphicon glyph="search" /></InputGroup.Addon>;
    } else {
      button = <InputGroup.Addon onClick={() => this.handleEmptySearchBar()}><Glyphicon glyph="remove" /></InputGroup.Addon>;
    }

    return (
      <FormGroup controlId="searchbar">
        <InputGroup>
          <FormControl type="text" value={this.props.searchbar} placeholder="Search..." onChange={event => this.handleChangeSearchbar(event)} />
          { button }
        </InputGroup>
      </FormGroup>
    );
  }
}

SoftwaresByUserSearchbar.propTypes = {
  username: React.PropTypes.string,
  searchbar: React.PropTypes.string,
  searchstate: React.PropTypes.bool,
  searchbarChange: React.PropTypes.func,
  searchbarState: React.PropTypes.func,
  searchSoftwareRequest: React.PropTypes.func,
  getInstalledSoftwaresRequest: React.PropTypes.func,
};
