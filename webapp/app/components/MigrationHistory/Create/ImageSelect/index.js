//
// Migration History page Image select component
//

import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class ImageSelect extends React.Component {
  componentWillMount() {
    this.props.getAllImages();
  }

  onChange(options) {
    const imageId = options[options.selectedIndex].value;
    this.props.setSelectedImage(parseInt(imageId, 10));
  }

  getSelectedValue() {
    return (this.props.imageId) ? [this.props.imageId.toString()] : [];
  }

  render() {
    const images = (this.props.images) ? this.props.images : [];

    return (
      <FormGroup controlId="selectImage">
        <ControlLabel>Image:</ControlLabel>
        <FormControl
          componentClass="select"
          multiple
          onChange={(e) => this.onChange(e.target.options)}
          value={this.getSelectedValue()}
        >
        {images.map((image, index) => (
          <option key={index} value={image.id}>
            {image.name}
          </option>
        ))}
        </FormControl>
      </FormGroup>
    );
  }
}

ImageSelect.propTypes = {
  images: React.PropTypes.array,
  imageId: React.PropTypes.number,
  getAllImages: React.PropTypes.func,
  setSelectedImage: React.PropTypes.func,
};
