import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/RestoreCreation/styles.css';

export class RestoreCreationSavesFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilesChange = this.handleFilesChange.bind(this);
  }

  // event on click to dynamically change files depending on save selected
  handleFilesChange(e) {
    var files = [];
    const data = this.props.state.allsaves;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == e.target.value) {
        files.push(data[i].save_scheduled.files);
      }
    }
    this.props.listFiles(files);
    this.props.setUserId(this.props.state.allsaves[0].save_scheduled.userId);
  }

  render() {
    var saves = [];
    var savesOption = [];
    if (this.props.state.allsaves.length > 0){
      saves = this.props.state.allsaves.map((save) => (
        { value: save.id, text: "save " + save.id + " " + save.createdAt}
      ));
      savesOption = saves.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }
    return (
      <FormGroup controlId="saves" className={styles.form}>
        <ControlLabel>Select a save</ControlLabel>
        <FormControl componentClass="select" onChange={this.handleFilesChange}>
          { savesOption }
        </FormControl>
      </FormGroup>
    )
  }
}

RestoreCreationSavesFormGroup.propTypes = {
  state: React.PropTypes.object,
  listSaves: React.PropTypes.func,
  listFiles: React.PropTypes.func,
  setUserId: React.PropTypes.func,
}
