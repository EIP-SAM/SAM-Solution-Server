import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/RestoreCreation/styles.css';

export class RestoreCreationButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  handleFormClick() {
    console.log(this.props.state);
    this.props.createRestoresRequest(this.props.state);
  }

  handleCancelClick() {
    browserHistory.goBack();
  }

  render () {
    return (
      <ButtonToolbar>
        <LinkContainerButton buttonType="info" buttonText="Restore" onClick={this.handleFormClick} />
        <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={this.handleCancelClick} />
      </ButtonToolbar>
    );
  }
}

RestoreCreationButtons.propTypes = {
  state: React.PropTypes.object,
  createRestoresRequest: React.PropTypes.func,
}
