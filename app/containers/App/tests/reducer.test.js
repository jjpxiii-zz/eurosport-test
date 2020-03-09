import produce from 'immer';

import appReducer from '../reducer';
import { loadData, dataLoaded, dataLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      playerStats: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadData action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.playerStats = false;
    });

    expect(appReducer(state, loadData())).toEqual(expectedResult);
  });

  it('should handle the dataLoaded action correctly', () => {
    const fixture = [
      {
        firstname: 'Stan',
        lastname: 'Wawrinka',
        shortname: 'S.WAW',
        sex: 'M',
        country: {
          picture:
            'https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png',
          code: 'SUI',
        },
        picture:
          'https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg',
        data: {
          rank: 21,
          points: 1784,
          weight: 81000,
          height: 183,
          age: 33,
          last: [1, 1, 1, 0, 1],
        },
      },
      {
        firstname: 'Rafael',
        lastname: 'Nadal',
        shortname: 'R.NAD',
        sex: 'M',
        country: {
          picture:
            'https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png',
          code: 'ESP',
        },
        picture:
          'https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg',
        data: {
          rank: 1,
          points: 1982,
          weight: 85000,
          height: 185,
          age: 33,
          last: [1, 0, 0, 0, 1],
        },
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.playerStats = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, dataLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the dataLoadingError action correctly', () => {
    const fixture = [];
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, dataLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
