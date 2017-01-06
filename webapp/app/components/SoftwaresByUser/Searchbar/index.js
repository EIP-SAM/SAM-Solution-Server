//
// Searchbar sofwares by user page
//

import React from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class SoftwaresByUserSearchbar extends React.Component {
  handleChangeSearchbar(event) {
    this.props.searchbarChange(event.target.value);
  }

  handleValidationSearchbar() {
    this.props.searchSoftwareRequest(this.props.username, this.props.searchbar);
  }

  render() {
    return (
      <FormGroup controlId="searchbar">
        <InputGroup>
          <FormControl type="text" value={this.props.searchbar} placeholder="Search..." onChange={event => this.handleChangeSearchbar(event)} />
          <InputGroup.Addon onClick={() => this.handleValidationSearchbar()}><Glyphicon glyph="search" /></InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    );
  }
}

SoftwaresByUserSearchbar.propTypes = {
  username: React.PropTypes.string,
  searchbar: React.PropTypes.string,
  searchbarChange: React.PropTypes.func,
  searchSoftwareRequest: React.PropTypes.func,
};
