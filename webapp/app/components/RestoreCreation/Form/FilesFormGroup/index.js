import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/RestoreCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class RestoreCreationFilesFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectedFiles = this.handleSelectedFiles.bind(this);
  }

  handleSelectedFiles(e) {
    const options = e.target.options;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.props.selectFiles(value);
  }

  render() {
    let options = [];
    let listFiles = [];

    if (this.props.state.allsaves.length > 0) {
      if (this.props.state.files.length > 0) {
        listFiles = this.props.state.files[0].split(',').map((file) => (
            { value: file, text: file }
        ));
      }
      else {
        listFiles = this.props.state.allsaves[0].save_scheduled.files.split(',').map((file) => (
            { value: file, text: file }
        ));
      }
      options = listFiles.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }

    return (
      <FormGroup controlId="files" className={styles.form}>
        <ControlLabel>Files</ControlLabel>
        <FormControl componentClass="select" multiple onChange={this.handleSelectedFiles}>
          {options}
        </FormControl>
      </FormGroup>
    );
  }
}

RestoreCreationFilesFormGroup.propTypes = {
  state: React.PropTypes.object,
  listFiles: React.PropTypes.func,
  selectFiles: React.PropTypes.func,
};
