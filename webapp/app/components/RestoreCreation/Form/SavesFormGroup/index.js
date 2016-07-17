import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
import Option from 'components/Option';
import styles from 'components/RestoreCreation/styles.css';
const moment = require('moment');

/* eslint-disable react/prefer-stateless-function */
export class RestoreCreationSavesFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilesChange = this.handleFilesChange.bind(this);
  }

  componentDidMount() {
    let files = [];
    if (this.props.state.allSaves.length > 0) {
      files = this.props.state[0].save_scheduled.files;
      this.props.listFiles(files);
    }
  }

  // event on click to dynamically change files depending on save selected
  handleFilesChange(e) {
    const files = [];
    const data = this.props.state.allSaves;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id.toString() === e.target.value) {
        files.push(data[i].save_scheduled.files);
      }
    }
    this.props.listFiles(files);
  }

  render() {
    let saves = [];
    let savesOption = [];
    if (this.props.state.allSaves.length > 0) {
      saves = this.props.state.allSaves.map((save) => (
        { value: save.id, text: moment(save.execDate).format('DD/MM/YYYY HH:mm') }
      ));
      savesOption = saves.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }
    return (
      <FormGroup controlId="saves" className={styles.form}>
        <ControlLabel>Saves</ControlLabel>
        <ButtonPopover
          buttonType="link"
          icon="question-sign"
          popoverContent="Select the save"
          trigger="hover"
          placement="right"
        />
        <FormControl componentClass="select" onChange={this.handleFilesChange}>
          {savesOption}
        </FormControl>
      </FormGroup>
    );
  }
}

RestoreCreationSavesFormGroup.propTypes = {
  state: React.PropTypes.object,
  listSaves: React.PropTypes.func,
  listFiles: React.PropTypes.func,
  setUserId: React.PropTypes.func,
};