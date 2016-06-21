//
// Button with popover
//

import React from 'react';
import { Glyphicon, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class ButtonPopover extends React.Component {

  render() {
    const buttonStyle = ((this.props.buttonStyle) ? this.props.buttonStyle : styles.button);

    return (
      <OverlayTrigger
        trigger={this.props.trigger}
        placement={this.props.placement}
        overlay={
          <Popover title={this.props.popoverTitle}>
            {this.props.popoverContent}
          </Popover>
        }
      >
        <Button
          className={buttonStyle}
          bsStyle={this.props.buttonType}
          href={this.props.link}
          onClick={this.props.onClick}
        >
          <Glyphicon glyph={this.props.icon} />
          {this.props.buttonText}
        </Button>
      </OverlayTrigger>
    );
  }
}

ButtonPopover.propTypes = {
  trigger: React.PropTypes.string.isRequired,
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
