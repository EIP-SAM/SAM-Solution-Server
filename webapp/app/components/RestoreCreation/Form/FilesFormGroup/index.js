import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Option from 'components/Option';
import styles from 'components/RestoreCreation/styles.css';

export class RestoreCreationFilesFormGroup extends React.Component {
  render() {
    var files = '';
    if (this.props.state.allsaves.length > 0 && this.props.state.files == ''){
      files = this.props.state.allsaves[0].save_scheduled.files;
    }
    else
      files = this.props.state.files;

      // savesOption = saves.map((item, index) => (
      //   <Option object={item} key={`item-${index}`} />
      // ));

//       let options = [];
//
//       if (typeof this.props.state.files !== 'undefined') {
//         const filesa = this.props.state.files.map((file) => (
//           { isActive: false, value: file, text: file }
//         ));
//
//         const cleanFiles = [];
//         for (let i = 0; i < filesa.length; i++) {
//           const current = files[i];
//           for (let j = 0; j < cleanFiles.length; j++) {
//             if (cleanFiles[j].value !== current.value) {
//               cleanFiles.push(current);
//               break;
//             }
//           }
//           if (cleanFiles.length === 0) {
//             cleanFiles.push(current);
//           }
//         }
//
// \        console.log(cleanFiles);
//
//         options = cleanFiles.map((item, index) => (
//           <Option object={item} key={`item-${index}`} />
//         ));
//       }

    return (
      <FormGroup controlId="files" className={styles.form}>
        <ControlLabel>Files</ControlLabel>
        <FormControl multiple value={ files } />
      </FormGroup>
    )
  }
}

RestoreCreationFilesFormGroup.propTypes = {
  state: React.PropTypes.object,
  listFiles: React.PropTypes.func,
}
