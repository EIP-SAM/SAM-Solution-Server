//
// Component form page login
//

import React from 'react';
import Username from 'containers/Login/Form/Username';
import Password from 'containers/Login/Form/Password';
import Buttons from 'containers/Login/Form/Buttons';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class LoginForm extends React.Component {
  render() {
    return (
      <form className={styles.login}>
        <Username />
        <Password />
        <Buttons />
      </form>
    );
  }
}

LoginForm.propTypes = {};
