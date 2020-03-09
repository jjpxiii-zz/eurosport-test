import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { render } from 'react-testing-library';

import configureStore from '../../../configureStore';
import StatsTable from '../index';

describe('<ReposList />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<StatsTable loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <StatsTable loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).not.toBeNull();
  });

  it('should render the playerStats if loading was successful', () => {
    const store = configureStore({ global: {} }, browserHistory);
    const playerStats = [
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
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StatsTable data={playerStats} error={false} />
        </IntlProvider>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(
      <StatsTable data={false} error={false} loading={false} />,
    );

    expect(container.firstChild).toBeNull();
  });
});
