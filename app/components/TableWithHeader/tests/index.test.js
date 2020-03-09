import React from 'react';
import { render } from 'react-testing-library';

import TableWithHeader from '../index';

describe('<TableWithHeader />', () => {
  it('should render the passed component if no items are passed', () => {
    const component = () => <table>test</table>; // eslint-disable-line react/prop-types
    const { container } = render(<TableWithHeader component={component} />);
    expect(container.querySelector('table')).not.toBeNull();
  });

  it('should pass all items props to rendered component', () => {
    const items = [{ id: 1, name: 'Hello' }, { id: 2, name: 'World' }];

    const component = ({ item }) => <tr>{item.name}</tr>; // eslint-disable-line react/prop-types

    const { container, getByText } = render(
      <TableWithHeader items={items} component={component} />,
    );
    const elements = container.querySelectorAll('table');
    expect(elements).toHaveLength(1);
    expect(getByText(items[0].name)).not.toBeNull();
    expect(getByText(items[1].name)).not.toBeNull();
  });
});
