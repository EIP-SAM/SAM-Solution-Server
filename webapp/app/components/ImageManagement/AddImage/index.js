//
// Add image modal main components
//

import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class AddImage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      os: '',
      version: '',
    };
  }

  resetForm() {
    this.setState({ name: '', os: '', version: '' });
  }

  close() {
    this.props.hideAddImage();
    this.resetForm();
  }

  addImage() {
    this.props.addImageRequest({
      name: this.state.name,
      operatingSystem: this.state.os,
      version: this.state.version,
      fileName: this.props.fileName,
    });
    this.close();
  }

  render() {
    return (
      <Modal show={this.props.isVisible} onHide={() => this.close()}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.fileName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="imageNameForm">
              <ControlLabel>Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Image name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </FormGroup>
            <FormGroup controlId="imageOSForm">
              <ControlLabel>Operating System</ControlLabel>
              <FormControl
                type="text"
                placeholder="Operating System name"
                value={this.state.os}
                onChange={e => this.setState({ os: e.target.value })}
              />
            </FormGroup>
            <FormGroup controlId="imageVersionForm">
              <ControlLabel>Version</ControlLabel>
              <FormControl
                type="text"
                placeholder="Version"
                value={this.state.version}
                onChange={e => this.setState({ version: e.target.value })}
              />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="info" onClick={() => this.addImage()}>Add</Button>
          <Button onClick={() => this.close()}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

AddImage.propTypes = {
  isVisible: React.PropTypes.bool,
  fileName: React.PropTypes.string,
  hideAddImage: React.PropTypes.func.isRequired,
  addImageRequest: React.PropTypes.func.isRequired,
};

AddImage.defaultProps = {
  isVisible: false,
  fileName: 'No file',
};
