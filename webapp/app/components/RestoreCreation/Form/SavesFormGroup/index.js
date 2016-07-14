import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/RestoreCreation/styles.css';

export class RestoreCreationSavesFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilesChange = this.handleFilesChange.bind(this);
  }

  componentDidMount() {
    const saves = this.props.data.restores.map((save) => (
      { value: save.id, text: "save " + save.id + " " + save.createdAt}
    ));
    this.props.listSaves(saves);
  }

  // event on click to dynamically change files depending on save selected
  handleFilesChange(e) {
    var files = [];
    const data = this.props.data.restores;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == e.target.value) {
        files.push(data[i].save_scheduled.files);
      }
    }
    this.props.listFiles(files);
  }

  render() {
    const savesOption = this.props.state.saves.map((item, index) => (
      <Option object={item} key={`item-${index}`} />
    ));

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
  data: React.PropTypes.object,
  state: React.PropTypes.object,
  listSaves: React.PropTypes.func,
  listFiles: React.PropTypes.func,
}
