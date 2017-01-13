//
// Container for List Image component in ImageManagement
//

import { connect } from 'react-redux';
import ListImage from 'components/ImageManagement/ListImage';
import {
  deleteImage,
} from './actions';

function mapStateToProps(state) {
  return {
    images: state.get('ImageManagement').images,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteImage: (imageId) => dispatch(deleteImage(imageId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListImage);
