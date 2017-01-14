//
// Image Management actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import {
  IMAGE_MANAGEMENT_SET_ADDIMAGE_VISIBILITY,
  IMAGE_MANAGEMENT_SET_FILENAME,
  IMAGE_MANAGEMENT_SET_IMAGES,
  IMAGE_MANAGEMENT_SET_NEW_FILES,
} from './constants';

export function setAddImageVisibility(isVisible) {
  return {
    type: IMAGE_MANAGEMENT_SET_ADDIMAGE_VISIBILITY,
    isVisible,
  };
}

export function setFileName(fileName) {
  return {
    type: IMAGE_MANAGEMENT_SET_FILENAME,
    fileName,
  };
}

export function setImages(images) {
  return {
    type: IMAGE_MANAGEMENT_SET_IMAGES,
    images,
  };
}

export function setNewFiles(newFiles) {
  return {
    type: IMAGE_MANAGEMENT_SET_NEW_FILES,
    newFiles,
  };
}

export function getAllImagesAndFiles() {
  return dispatch => (
    request
      .get('/api/logged-in/admin/images/')
      .query({ isValid: false })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        if (err || res.body.error) {
          dispatch(setImages([]));
          dispatch(setNewFiles([]));
        } else if (res.body.images) {
          dispatch(setImages(res.body.images.images));
          dispatch(setNewFiles(res.body.images.files));
        }
      })
  );
}

export function addImage(imageObj) {
  return dispatch => (
    request
      .post('/api/logged-in/admin/image/add')
      .send({ imageObj })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        } else {
          dispatch(getAllImagesAndFiles());
        }
      })
  );
}

export function deleteImage(imageId) {
  return dispatch => (
    request
      .del(`/api/logged-in/admin/image/${imageId}/delete`)
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        } else {
          dispatch(getAllImagesAndFiles());
        }
      })
  );
}
