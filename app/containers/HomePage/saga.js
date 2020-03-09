/**
 * Gets the data
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from 'containers/App/constants';
import { dataLoaded, dataLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github data request/response handler
 */
export function* getData() {
  // Select username from store
  const requestURL = `https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json`;
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(dataLoaded([...data.players]));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* playerData() {
  // Watches for LOAD_DATA actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DATA, getData);
}
