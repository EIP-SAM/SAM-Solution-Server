//
// Module to centralize the use of an ajax API (here superagent)
//

import superagent from 'superagent';
import { browserHistory } from 'react-router';
import manifest from '../manifest.json';
import store from 'store.js';
const baseUrl = manifest.url_server_api;

function get(url) {
  return superagent.get(baseUrl + url).withCredentials();
}

function post(url) {
  return superagent.post(baseUrl + url).withCredentials();
}

function put(url) {
  return superagent.put(baseUrl + url).withCredentials();
}

function del(url) {
  return superagent.del(baseUrl + url).withCredentials();
}

function head(url) {
  return superagent.head(baseUrl + url).withCredentials();
}

function redirectHandling(errorCode) {
  if (errorCode === 403 || errorCode === 404) {
    browserHistory.push('/notfound');
  } else if (errorCode === 401) {
    browserHistory.push('/login');
  }
}

export default {
  get,
  post,
  put,
  del,
  head,
  redirectHandling,
};
