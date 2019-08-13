import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

const mockedOnClick = jest.fn();

const defaultProps = {
  onClick: mockedOnClick,
  name: 'test-button',
  text: 'Test Button'
}

const renderer = (props = defaultProps) => render(<Button {...props} />);

describe('Button', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders the button', () => {
    const component = renderer();
    expect(component.queryByTestId('test-button')).not.toBeNull();
  });

  describe('onClick', () => {
    it('calls the onClick prop when clicked', () => {
      const component = renderer();
      const testButton = component.queryByTestId('test-button');
      fireEvent.click(testButton);
      expect(mockedOnClick).toHaveBeenCalled();
    });

    it('does not call the onClick prop if not yet clicked', () => {
      renderer();
      expect(mockedOnClick).not.toHaveBeenCalled();
    });
  });

  it('sets the name to the name props', () => {
    const component = renderer();
    expect(component.queryByTestId('test-button').name).toEqual('test-button');
  });

  it('displays the text prop as the button text', () => {
    const component = renderer();
    expect(component.queryByTestId('test-button').textContent).toEqual('Test Button');
  });
});
