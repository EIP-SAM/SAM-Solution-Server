import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Option from 'components/Option';

/* eslint-disable react/prefer-stateless-function */
export class CreateUserFormGroupsFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectedFiles = this.handleSelectedFiles.bind(this);
  }

  componentWillMount() {
    this.props.getGroupsRequest();
  }

  handleSelectedFiles(e) {
    const options = e.target.options;
    const selectedGroups = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedGroups.push(options[i].value);
      }
    }
    this.props.getSelectedGroup(selectedGroups);
  }

  render() {
    const options = this.props.groups.map((item, index) => (
      <Option object={{ value: item.name, text: item.name }} key={`item-${index}`} />
    ));

    return (
      <FormGroup controlId="groups" validationState={null}>
        <ControlLabel>Groups</ControlLabel>
        <ButtonPopover
          id="groups_button_popover"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="Select several groups by using CTRL^ key"
          placement="right"
        />
        <FormControl componentClass="select" multiple onChange={this.handleSelectedFiles}>
          {options}
        </FormControl>
      </FormGroup>
    );
  }
}

// <HelpBlock>{errorMessage}</HelpBlock>

CreateUserFormGroupsFormGroup.propTypes = {
  groups: React.PropTypes.array,
  selectedGroup: React.PropTypes.array,
  getGroupsRequest: React.PropTypes.func,
  getSelectedGroup: React.PropTypes.func,
};
