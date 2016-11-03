//
// Searchbar sofwares by user page
//

import React from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class SoftwaresByUserSearchbar extends React.Component {
  onChangeSearchbar(event) {
    this.props.searchbarChange(event.target.value);
  }

  render() {
    return (
      <FormGroup controlId="searchbar">
        <InputGroup>
          <FormControl type="text" value={this.props.searchbar} placeholder="Search..." onChange={(event) => this.onChangeSearchbar(event)} />
          <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    );
  }
}

SoftwaresByUserSearchbar.propTypes = {
  searchbar: React.PropTypes.string,
  searchbarChange: React.PropTypes.func,
};
