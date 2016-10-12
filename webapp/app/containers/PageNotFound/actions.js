//
// PageNotFound actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import { browserHistory } from 'react-router';

export function redirectToLoginPage() {
  browserHistory.push('/login');
}

export function redirectToDashboardPage() {
  browserHistory.push('/logs');
}

export function redirectToPageNotFound() {
  browserHistory.push('/unknown_page');
}
