//
// Module to centralize the use of an ajax API (here superagent)
//

import superagent from 'superagent';
import manifest from '../manifest.json';

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

export default {
  get,
  post,
  put,
  del,
  head,
};
