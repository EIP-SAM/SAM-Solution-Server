//
// Component selected groups form notifications
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import ButtonPopover from 'components/ButtonPopover';
import Option from 'components/Option';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsFormSelectedGroups extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSelectedGroups = this.onChangeSelectedGroups.bind(this);
  }

  onChangeSelectedGroups(event) {
    const options = event.target.options;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push({ id: parseInt(options[i].value, 10), name: options[i].text });
      }
    }
    this.props.unselectedGroupsOnChange(value);
  }

  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.selectedGroupsError !== '') {
      validationState = 'error';
      errorMessage = this.props.selectedGroupsError;
    }

    let selectedGroups = [];
    let selectedGroupsOption = [];

    if (this.props.selectedGroups.length > 0) {
      selectedGroups = this.props.selectedGroups.map((user) => (
        { value: user.id, text: user.name }
      ));
      selectedGroupsOption = selectedGroups.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }
    return (
      <FormGroup controlId="selectedGroups" className={styles.form} validationState={validationState}>
        <ControlLabel>Selected Groups</ControlLabel>
        <ButtonPopover
          id="selectedGroups"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="Select one or several groups and remove them from the group using CTRL^ key"
          placement="right"
        />
        <FormControl componentClass="select" onChange={this.onChangeSelectedGroups} multiple>
          {selectedGroupsOption}
        </FormControl>
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

NotificationsFormSelectedGroups.propTypes = {
  selectedGroups: React.PropTypes.arrayOf(React.PropTypes.object),
  unselectedGroupsOnChange: React.PropTypes.func,
  selectedGroupsError: React.PropTypes.string,
};
