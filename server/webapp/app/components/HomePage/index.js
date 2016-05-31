/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Button from 'components/Button';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {

  clickMe() {
    alert('test');
  }

  render() {
    return (
      <div>
        <h1>This is the Homepage!</h1>
        <Button handleRoute={this.clickMe} className="btn-primary" >titi</Button>
      </div>
    );
  }
}
