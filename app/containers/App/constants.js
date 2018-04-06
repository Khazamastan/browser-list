/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_BROWSERS = 'browserList/App/LOAD_BROWSERS';
export const LOAD_BROWSERS_SUCCESS = 'browserList/App/LOAD_BROWSERS_SUCCESS';
export const LOAD_BROWSERS_ERROR = 'browserList/App/LOAD_BROWSERS_ERROR';
export const SET_OS_VERSION = 'browserList/App/SET_OS_VERSION';
export const DEFAULT_LOCALE = 'en';
