/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_BROWSERS,
  LOAD_BROWSERS_SUCCESS,
  LOAD_BROWSERS_ERROR,
  SET_OS_VERSION,
} from './constants';

/**
 * Load the browsers, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_BROWSERS
 */
export function loadBrowsers() {
  return {
    type: LOAD_BROWSERS,
  };
}


export function setOsVersion(osVersion) {
  return {
    type: SET_OS_VERSION,
    osVersion,
  };
}


/**
 * Dispatched when the browsers are loaded by the request saga
 *
 * @param  {array} browsers The browsers data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_BROWSERS_SUCCESS passing the browsers
 */
export function browsersLoaded(browsers) {
  return {
    type: LOAD_BROWSERS_SUCCESS,
    browsers,
  };
}

/**
 * Dispatched when loading the browsers fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_BROWSERS_ERROR passing the error
 */
export function browsersLoadingError(error) {
  return {
    type: LOAD_BROWSERS_ERROR,
    error,
  };
}
