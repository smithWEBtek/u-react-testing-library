import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeInTheDocument();
  expect(colorButton).toHaveStyle(`backgroundColor: 'red'`);
});

test('button text changes to blue when clicked', () => {
  // render(<App />);
  // const colorButton = screen.getByRole('button', 'Change to bluee');
  // expect(colorButton).toHaveStyle(`backgroundColor: 'blue'`);
});
