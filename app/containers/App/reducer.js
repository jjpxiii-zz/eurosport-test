/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_DATA_SUCCESS, LOAD_DATA, LOAD_DATA_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  playerStats: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DATA:
        draft.loading = true;
        draft.error = false;
        draft.playerStats = false;
        break;

      case LOAD_DATA_SUCCESS:
        draft.playerStats = action.data;
        draft.loading = false;
        break;

      case LOAD_DATA_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
