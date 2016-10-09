//
// Component Login
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, Image } from 'react-bootstrap';
import { LinkContainerButton } from '../Button';
import { browserHistory } from 'react-router';
import Logo from '../App/logo_sam_solution.png';
import styles from './styles.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.userInfo && nextProps.userInfo.logged) {
      browserHistory.push(`/edit-user/${nextProps.userInfo.username}`);
      return true;
    }
    return false;
  }

  onChangeUsername(event) {
    this.props.onChangeData(event.target.value, this.props.state.password);
  }

  onChangePassword(event) {
    this.props.onChangeData(this.props.state.username, event.target.value);
  }

  handleClick() {
    this.props.loginRequest(this.props.state.username, this.props.state.password);
  }

  render() {
    return (
      <div className={styles.login}>
        <Image src={Logo} responsive className={styles.logo} />
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" placeholder={this.props.state.username} onChange={this.onChangeUsername} />
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder={this.props.state.password} onChange={this.onChangePassword} />
            <LinkContainerButton buttonType="submit" buttonBsStyle="default" buttonText="Log In" onClick={this.handleClick} />
          </FormGroup>
        </form>
        <a href="/register">Register</a><br />
        <a href="/forgotten-password">Forget password</a>
      </div>
    );
  }
}

Login.propTypes = {
  state: React.PropTypes.object,
  userInfo: React.PropTypes.object,
  loginRequest: React.PropTypes.func,
  onChangeData: React.PropTypes.func,
};
