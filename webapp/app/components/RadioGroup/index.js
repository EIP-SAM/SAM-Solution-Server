//
// Component to wrap a list of react-bootstrap radio button
//

import React from 'react';
import { Radio } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: undefined,
    };
  }

  componentWillMount() {
    if (this.props.placeholder) {
      this.setState({ button: this.props.placeholder });
    }
  }

  handleChange(value) {
    if (this.state.button !== value) {
      this.setState({ button: value });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    const values = this.props.values;
    const isInline = (this.props.inline) ? this.props.inline : false;
    const radios = values.map((value, index) => (
      <Radio
        inline={isInline}
        key={index}
        onChange={() => this.handleChange(value)}
        checked={this.state.button === value}
      >
        {value}
      </Radio>

    ));
    const content = (this.props.block) ?
      (<div className={this.props.className}>{radios}</div>) :
      (<span className={this.props.className}>{radios}</span>);

    return (content);
  }
}

RadioGroup.propTypes = {
  className: React.PropTypes.string,
  placeholder: React.PropTypes.node,
  block: React.PropTypes.bool,
  inline: React.PropTypes.bool,
  values: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func,
};
