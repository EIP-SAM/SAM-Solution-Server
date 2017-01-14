//
// Container for New Image component in ImageManagement
//

import { connect } from 'react-redux';
import NewImage from 'components/ImageManagement/NewImage';
import {
  setAddImageVisibility,
  setFileName,
  getAllImagesAndFiles,
} from './actions';

function mapStateToProps(state) {
  return {
    newFiles: state.get('ImageManagement').newFiles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openAddImage: () => dispatch(setAddImageVisibility(true)),
    setFileName: fileName => dispatch(setFileName(fileName)),
    getAllImagesAndFiles: () => dispatch(getAllImagesAndFiles()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewImage);
