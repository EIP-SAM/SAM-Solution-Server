//
// Container for Add Image component in ImageManagement
//

import { connect } from 'react-redux';
import AddImage from 'components/ImageManagement/AddImage';
import {
  setAddImageVisibility,
  addImage,
} from './actions';

function mapStateToProps(state) {
  return {
    isVisible: state.get('ImageManagement').isVisible,
    fileName: state.get('ImageManagement').fileName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideAddImage: () => dispatch(setAddImageVisibility(false)),
    addImageRequest: (image) => dispatch(addImage(image)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddImage);
