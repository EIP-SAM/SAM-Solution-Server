import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { ButtonPopover } from 'components/ButtonPopover';
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
    let errorMessage = '';

    if (this.props.state.allSaves.length > 0) {
      if (this.props.state.files.length > 0) {
        listFiles = this.props.state.files[0].split(',').map((file) => (
            { value: file, text: file }
        ));
      } else {
        listFiles = this.props.state.allSaves[0].save_scheduled.files.split(',').map((file) => (
            { value: file, text: file }
        ));
      }
      options = listFiles.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }

    if (this.props.state.filesError !== '') {
      errorMessage = this.props.state.filesError;
    }
    return (
      <FormGroup controlId="files" className={styles.form} validationState={this.props.state.filesError.length > 0 ? 'error' : null}>
        <ControlLabel>Files</ControlLabel>
        <ButtonPopover
          id="files"
          trigger={['hover', 'focus']}
          buttonType="link"
          icon="question-sign"
          popoverContent="Select the files you want to restore"
          placement="right"
        />
        <FormControl componentClass="select" multiple onChange={this.handleSelectedFiles}>
          {options}
        </FormControl>
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

RestoreCreationFilesFormGroup.propTypes = {
  state: React.PropTypes.object,
  selectFiles: React.PropTypes.func,
};
