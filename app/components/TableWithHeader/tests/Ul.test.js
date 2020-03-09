import React from 'react';
import { render } from 'react-testing-library';

import Table from '../Table';

describe('<Table />', () => {
  it('should render an <ul> tag', () => {
    const { container } = render(<Table />);
    const element = container.firstElementChild;
    expect(element.tagName).toEqual('TABLE');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Table />);
    const element = container.firstElementChild;
    expect(element.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<Table id={id} />);
    const element = container.firstElementChild;
    expect(element.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Table attribute="test" />);
    const element = container.firstElementChild;
    expect(element.hasAttribute('attribute')).toBe(false);
  });
});
