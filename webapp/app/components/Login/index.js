//
// Component Login
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, Image } from 'react-bootstrap';
import { LinkContainerButton } from '../Button'
import Logo from '../App/logo_sam_solution.png';
import styles from './styles.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  onChangeUsername(event) {
    this.props.onChangeData(event.target.value, this.props.state.password);
  }

  onChangePassword(event) {
    this.props.onChangeData(this.props.state.username, event.target.value);
  }

  handleClick(event) {
    this.props.loginRequest(this.props.state.username, this.props.state.password);
  }

  render() {
    return (
      <div container className={styles.login}>
        <Image src={Logo} responsive className={styles.logo} />
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" value={this.props.state.username} onChange={this.onChangeUsername} />
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" value={this.props.state.password} onChange={this.onChangePassword} />
            <LinkContainerButton buttonType='default' buttonText='Submit' onClick={this.handleClick} />
          </FormGroup>
        </form>
        <a href="">Forget password</a>
      </div>
    );
  }
}

Login.propTypes = {
  state: React.PropTypes.object,
  loginRequest: React.PropTypes.func,
  onChangeData: React.PropTypes.func,
};