/*
 *
 * LoadingIndicator actions
 *
 */

import { LOADING_TRUE, LOADING_FALSE } from './constants';

export function showLoading(scope) {
  return {
    type: LOADING_TRUE,
    scope,
  };
}

export function hideLoading(scope) {
  return {
    type: LOADING_FALSE,
    scope,
  };
}
