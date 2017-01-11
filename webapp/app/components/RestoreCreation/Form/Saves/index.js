import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import ButtonPopover from 'components/ButtonPopover';
import Option from 'components/Option';
import styles from 'components/RestoreCreation/styles.css';

const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export default class RestoreCreationSaves extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilesChange = this.handleFilesChange.bind(this);
  }

  // event on click to dynamically change files depending on save selected
  handleFilesChange(e) {
    const files = [];
    const data = this.props.allSaves;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id.toString() === e.target.value) {
        this.props.selectSave({ value: data[i].id, text: moment().format('DD/MM/YYYY HH:mm') });
        files.push(data[i].save_scheduled.files);
      }
    }
    this.props.listFiles(files);
  }

  render() {
    let saves = [];
    let savesOption = [];
    let errorMessage = '';
    if (this.props.allSaves.length > 0) {
      saves = this.props.allSaves.map(save => (
        { value: save.id, text: moment(save.execDate).format('DD/MM/YYYY HH:mm') }
      ));
      savesOption = saves.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }

    if (this.props.saveError !== '') {
      errorMessage = this.props.saveError;
    }
    return (
      <FormGroup controlId="saves" className={styles.form} validationState={this.props.saveError.length > 0 ? 'error' : null}>
        <ControlLabel>Saves</ControlLabel>
        <ButtonPopover
          id="saves"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="Select the save"
          placement="right"
        />
        <FormControl componentClass="select" onChange={this.handleFilesChange}>
          {savesOption}
        </FormControl>
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

RestoreCreationSaves.propTypes = {
  allSaves: React.PropTypes.array,
  saveError: React.PropTypes.string,
  selectSave: React.PropTypes.func,
  listFiles: React.PropTypes.func,
};
