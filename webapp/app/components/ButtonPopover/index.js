//
// Button with popover
//

import React from 'react';
import { Glyphicon, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class ButtonPopover extends React.Component {
  render() {
    const buttonStyle = ((this.props.buttonStyle) ? this.props.buttonStyle : styles.button);

    let content;
    if (this.props.link) {
      content = (
        <LinkContainer to={{ pathname: this.props.link }}>
          <Button className={buttonStyle} bsStyle={this.props.buttonType} onClick={this.props.onClick}>
            <Glyphicon glyph={this.props.icon} />
            {this.props.buttonText}
          </Button>
        </LinkContainer>
      );
    } else {
      content = (
        <Button className={buttonStyle} bsStyle={this.props.buttonType} onClick={this.props.onClick}>
          <Glyphicon glyph={this.props.icon} />
          {this.props.buttonText}
        </Button>
      );
    }
    return (
      <OverlayTrigger
        trigger={this.props.trigger}
        placement={this.props.placement}
        overlay={
          <Popover
            id={this.props.id}
            title={this.props.popoverTitle}
          >
            {this.props.popoverContent}
          </Popover>
        }
      >
        {content}
      </OverlayTrigger>
    );
  }
}

ButtonPopover.propTypes = {
  trigger: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]).isRequired,
  id: React.PropTypes.string,
  placement: React.PropTypes.string.isRequired,
  popoverContent: React.PropTypes.string.isRequired,
  buttonType: React.PropTypes.string.isRequired,
  popoverTitle: React.PropTypes.string,
  link: React.PropTypes.string,
  onClick: React.PropTypes.func,
  buttonText: React.PropTypes.string,
  icon: React.PropTypes.string,
  buttonStyle: React.PropTypes.string,
};
