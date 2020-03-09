/**
 * Test the repo list item
 */

import React from 'react';
import { getByText, render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import { PlayerStatsItem } from '../index';

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <PlayerStatsItem {...props} />
    </IntlProvider>,
  );

describe('<PlayerStatsItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
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
    };
  });

  it('should render a PlayerStatsItem', () => {
    const { container } = renderComponent({ item });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the player name', () => {
    const { container } = renderComponent({ item });
    expect(
      getByText(container, content => content.endsWith(item.lastname)),
    ).not.toBeNull();
  });

  it('should render the rank', () => {
    const { container } = renderComponent({ item });
    expect(
      getByText(container, content => content.endsWith(item.data.rank)),
    ).not.toBeNull();
  });

  it('should render the points', () => {
    const { container } = renderComponent({ item });
    expect(
      getByText(container, content => content.endsWith(item.data.points)),
    ).not.toBeNull();
  });

  it('should render the age', () => {
    const { container } = renderComponent({ item });
    expect(
      getByText(container, content => content.endsWith(item.data.age)),
    ).not.toBeNull();
  });

  it('should render the wins and losses', () => {
    const { container } = renderComponent({ item });
    expect(
      getByText(container, content => content.endsWith('4W 1L')),
    ).not.toBeNull();
  });

  it('should render the height', () => {
    const { container } = renderComponent({ item });
    expect(
      getByText(container, content => content.endsWith(item.data.height)),
    ).not.toBeNull();
  });

  it('should render the weight', () => {
    const { container } = renderComponent({ item });
    expect(
      getByText(container, content =>
        content.endsWith(Math.round(item.data.weight / 1000, 2)),
      ),
    ).not.toBeNull();
  });

  it('should render the flag', () => {
    const { container } = renderComponent({ item });
    expect(container.querySelector('img')).not.toBeNull();
  });
});
