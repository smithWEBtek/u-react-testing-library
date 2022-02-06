import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // expect the colorButton to be there
  expect(colorButton).toBeInTheDocument();

  // expect the colorButton to have background-color of 'red'
  expect(colorButton).toHaveStyle(`backgroundColor: 'red'`);
});

test('button text changes to blue when clicked', () => {
  render(<App />);

});

test('why are changes not showing in vscode?', () => {
  // asdf
});
