import React from 'react';
import { render } from '@testing-library/react';
import { Counter } from './Counter';

const mockedCounts = [4,3,7];

const renderer = () => render(<Counter counts={mockedCounts} />);

describe('Button', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders the correct count header', () => {
    const component = renderer();
    expect(component.queryByTestId('count-header-0').textContent).toEqual('Button Count 1');
  });

  it('renders the correct count text', () => {
    const component = renderer();
    expect(component.queryByTestId('count-text-0').textContent).toEqual('4');
  });

  it('renders a header for each count', () => {
    const component = renderer();
    expect(component.container.querySelectorAll('h1')).toHaveLength(3);
  });

  it('renders a count text for each count', () => {
    const component = renderer();
    expect(component.container.querySelectorAll('p')).toHaveLength(3);
  });
});
