/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import osList from '../../data/osList';

import {
  LOAD_BROWSERS_SUCCESS,
  LOAD_BROWSERS,
  LOAD_BROWSERS_ERROR,
  SET_OS_VERSION,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  browserVersion: 'win10',
  userData: {
    repositories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BROWSERS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_BROWSERS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.browsers)
        .set('loading', false);
    case LOAD_BROWSERS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case SET_OS_VERSION:
      return state
        .set('browserVersion', action.osVersion)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
