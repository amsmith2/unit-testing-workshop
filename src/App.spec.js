import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

const renderer = () => render(<App />);

describe('App', () => {
  it('renders the count wrapper', () => {
    const component = renderer();
    expect(component.queryByTestId('count-wrapper')).not.toBeNull();
  });

  it('renders button #1', () => {
    const component = renderer();
    expect(component.queryByTestId('firstButton')).not.toBeNull();
  });

  it('renders button #2', () => {
    const component = renderer();
    expect(component.queryByTestId('secondButton')).not.toBeNull();
  });

  it('increases the displayed count of button 1 when clicked', () => {
    const component = renderer();
    const firstButton = component.queryByTestId('firstButton');
    fireEvent.click(firstButton)
    expect(component.queryByTestId('count-text-0').textContent).toEqual('1')
  });

  it('increases the displayed count of button 2 when clicked', () => {
    const component = renderer();
    const firstButton = component.queryByTestId('secondButton');
    fireEvent.click(firstButton)
    expect(component.queryByTestId('count-text-1').textContent).toEqual('1')
  });
});
