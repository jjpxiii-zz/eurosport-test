import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import TableRow from '../index';

describe('<TableRow />', () => {
  it('should have a class', () => {
    const { container } = render(<TableRow className="test" />);
    expect(container.querySelector('tr').hasAttribute('class')).toBe(true);
  });

  it('should render the content passed to it', () => {
    const content = <td data-testid="test">Hello world!</td>;
    const { getByTestId } = render(<TableRow item={content} />);
    expect(getByTestId('test').tagName).toEqual('TD');
    expect(getByTestId('test')).toHaveTextContent('Hello world!');
  });
});
