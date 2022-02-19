import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeInTheDocument();
  expect(colorButton).toHaveStyle(`backgroundColor: 'red'`);
});

test.only('background color changes to blue when clicked once, and text changes', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const buttonElement = screen.getByRole('button', { name: /Change to blue/i });

  // check that the checkbox starts out unchecked
  const checkboxElement = screen.getByRole('checkbox');

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeEnabled();

  expect(checkboxElement).toBeInTheDocument();
  expect(checkboxElement).not.toBeChecked();
});
