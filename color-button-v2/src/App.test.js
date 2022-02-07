import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeInTheDocument();
  expect(colorButton).toHaveStyle(`backgroundColor: 'red'`);
});

test('camelCase w/backticks', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle(`backgroundColor: 'red'`);
  // expect(colorButton).toHaveStyle(`backgroundColor: 'brad'`);
});

test('kebab-case w/backticks', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle(`background-color: 'red'`);
  // expect(colorButton).toHaveStyle(`background-color: 'brad'`);
});

test('camelCase w/object', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});





// test('button text changes to blue when clicked', () => {
  // render(<App />);
  // const colorButton = screen.getByRole('button', 'Change to bluee');

  // expect(colorButton).toHaveStyle(`backgroundColor: 'blue'`);
// });
