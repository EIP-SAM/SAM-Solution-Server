//
// FilesFormControl in FilesFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormControl } from 'react-bootstrap';
import Option from 'components/Option';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationFilesSelect extends React.Component {
  render() {
    let options = [];

    if (typeof this.props.state.files !== 'undefined') {
      const files = this.props.state.files.map((file) => (
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
      <FormControl componentClass="select" multiple>
        {options}
      </FormControl>
    );
  }
}

SaveCreationFilesSelect.propTypes = {
  state: React.PropTypes.object,
};
