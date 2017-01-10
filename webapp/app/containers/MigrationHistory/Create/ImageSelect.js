//
// Container for Migration History Create User Select
//

import { connect } from 'react-redux';
import ImageSelect from 'components/MigrationHistory/Create/ImageSelect';
import {
  getAllImages,
  setSelectedImage,
} from './actions';

function mapStateToProps(state) {
  return {
    images: state.get('migrationHistory').get('create').images,
    imageId: state.get('migrationHistory').get('create').imageId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllImages: () => dispatch(getAllImages()),
    setSelectedImage: imageId => dispatch(setSelectedImage(imageId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageSelect);
