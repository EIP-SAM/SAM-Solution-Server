//
// Migration History Create component
//

import React from 'react';
import {
  Modal,
  Form,
  Col,
  Alert,
} from 'react-bootstrap';

import StatusSelect from 'containers/MigrationHistory/Create/StatusSelect';
import UserSelect from 'containers/MigrationHistory/Create/UserSelect';
import ImageSelect from 'containers/MigrationHistory/Create/ImageSelect';
import Footer from 'containers/MigrationHistory/Create/Footer';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Create extends React.Component {
  onHide() {
    this.props.showCreateMigrationPopup(false);
    this.props.resetForm();
  }

  getPasteDateWarning() {
    if (this.props.pasteDateWarning) {
      return (
        <Alert bsStyle="danger" onDismiss={() => this.props.hidePasteDateWarning()}>
          <h4>Error !</h4>
          <p>Date and time should be set in the future</p>
        </Alert>
      );
    } else {
      return (<span></span>);
    }
  }

  render() {
    const title =(<h3>warning</h3>)
    return (
      <Modal show={this.props.isPoppedUp} onHide={() => this.onHide()}>
        <Modal.Header closeButton>
          <Modal.Title>Create Migration</Modal.Title>
        </Modal.Header>
        <Modal.Body className="clearfix">
          {this.getPasteDateWarning()}
          <Form>
            <Col className={styles.isPlannedCol}>
              <StatusSelect />
            </Col>
            <Col sm={6}>
              <UserSelect />
            </Col>
            <Col sm={6}>
              <ImageSelect />
            </Col>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Footer />
        </Modal.Footer>
      </Modal>
    );
  }
}

Create.propTypes = {
  isPoppedUp: React.PropTypes.bool,
  pasteDateWarning: React.PropTypes.bool,
  showCreateMigrationPopup: React.PropTypes.func,
  resetForm: React.PropTypes.func,
  hidePasteDateWarning: React.PropTypes.func,
};
