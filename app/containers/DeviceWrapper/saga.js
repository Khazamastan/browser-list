/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_BROWSERS } from 'containers/App/constants';
import { browsersLoaded, browsersLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import apiMapping from 'utils/apiMapping';
import { makeSelectUsername } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getBrowsers() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = apiMapping.browserVersion;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(browsersLoaded(repos, username));
  } catch (err) {
    yield put(browsersLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_BROWSERS actions and calls getBrowsers when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_BROWSERS, getBrowsers);
}
