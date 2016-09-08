//
// FilesFormControl in FilesFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import Option from 'components/Option';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationFilesSelect extends React.Component {
  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.fileError !== '') {
      validationState = 'error';
      errorMessage = this.props.fileError;
    }

    let options = [];

    if (this.props.files) {
      const files = this.props.files.map((file) => (
        { isActive: false, value: file, text: file }
      ));

      const cleanFiles = [];
      for (let i = 0; i < files.length; i++) {
        const current = files[i];
        for (let j = 0; j < cleanFiles.length; j++) {
          if (cleanFiles[j].value !== current.value) {
            cleanFiles.push(current);
            break;
          }
        }
        if (cleanFiles.length === 0) {
          cleanFiles.push(current);
        }
      }

      options = cleanFiles.map((item, index) => (
        <Option object={item} key={`item-${index}`} />
      ));
    }

    return (
      <FormGroup controlId="files" validationState={validationState}>
        <FormControl componentClass="select" multiple>
          {options}
        </FormControl>
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

SaveCreationFilesSelect.propTypes = {
  test: React.PropTypes.string,
  files: React.PropTypes.array,
  fileError: React.PropTypes.string,
};
