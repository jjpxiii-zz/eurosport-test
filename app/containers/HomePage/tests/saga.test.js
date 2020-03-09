/**
 * Tests for HomePage sagas
 */

import { takeLatest } from 'redux-saga/effects';

import { LOAD_DATA } from 'containers/App/constants';

import playerData, { getData } from '../saga';

describe('playerDataSaga Saga', () => {
  const playerDataSaga = playerData();

  it('should start task to watch for LOAD_DATA action', () => {
    const takeLatestDescriptor = playerDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_DATA, getData));
  });
});
