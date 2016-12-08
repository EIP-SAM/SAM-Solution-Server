//
// Migration History Delete component
//

import React from 'react';
import {
  Modal,
  Button,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class Delete extends React.Component {
  render() {
    return (
      <Modal show>
        <Modal.Header closeButton>
          <Modal.Title>Delete Migration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
