//
// Button
//

import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class LinkContainerButton extends React.Component {

  render() {
    const buttonStyle = ((this.props.buttonStyle) ? this.props.buttonStyle : styles.button);

    if (this.props.link) {
      return (
        <LinkContainer to={{ pathname: this.props.link }}>
          <Button className={buttonStyle} bsStyle={this.props.buttonType} onClick={this.props.onClick}>
            {this.props.buttonText}
          </Button>
        </LinkContainer>
      );
    }
    return (
      <Button className={buttonStyle} bsStyle={this.props.buttonType} onClick={this.props.onClick}>
        {this.props.buttonText}
      </Button>
    );
  }
}

LinkContainerButton.propTypes = {
  buttonType: React.PropTypes.string.isRequired,
  buttonText: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
  onClick: React.PropTypes.func,
  buttonStyle: React.PropTypes.string,
};
