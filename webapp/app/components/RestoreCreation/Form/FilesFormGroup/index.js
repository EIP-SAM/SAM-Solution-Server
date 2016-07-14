import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/RestoreCreation/styles.css';

export class RestoreCreationFilesFormGroup extends React.Component {
  render() {
    var files = '';
    if (this.props.state.files == '' && this.props.data.restores[0] !== 'undefined') {
      files = this.props.data.restores[0].save_scheduled.files;
    }
    else {
      files = this.props.state.files;
    }
    return (
      <FormGroup controlId="files" className={styles.form}>
        <ControlLabel>Files</ControlLabel>
        <FormControl type="text" placeholder={ files } disabled />
      </FormGroup>
    )
  }
}

RestoreCreationFilesFormGroup.propTypes = {
  data: React.PropTypes.object,
  state: React.PropTypes.object,
  listFiles: React.PropTypes.func,
}
