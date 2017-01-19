//
// Component all Groups form notifications
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ButtonPopover from 'components/ButtonPopover';
import Option from 'components/Option';
import NotificationsFormAllGroupsSelectAll from 'containers/Notifications/Form/Groups/AllGroups/SelectAll';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsFormAllGroups extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeAllGroups = this.onChangeAllGroups.bind(this);
  }

  onChangeAllGroups(event) {
    const options = event.target.options;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push({ id: parseInt(options[i].value, 10), name: options[i].text });
      }
    }
    this.props.preSelectedGroupsOnChange(value);
  }

  render() {
    let groups = [];
    let groupsOption = [];

    if (this.props.groups.length > 0) {
      groups = this.props.groups.map(user => (
        { value: user.id, text: user.name }
      ));
      groupsOption = groups.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }
    return (
      <FormGroup controlId="allGroups" className={styles.form} >
        <ControlLabel>All Groups</ControlLabel>
        <ButtonPopover
          id="allGroups"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="Select one or several groups and add them to the notifications list using CTRL^ key"
          placement="right"
        />
        <FormControl componentClass="select" onChange={this.onChangeAllGroups} multiple>
          {groupsOption}
        </FormControl>
        <NotificationsFormAllGroupsSelectAll />
      </FormGroup>
    );
  }
}

NotificationsFormAllGroups.propTypes = {
  groups: React.PropTypes.arrayOf(React.PropTypes.object),
  preSelectedGroupsOnChange: React.PropTypes.func,
};
