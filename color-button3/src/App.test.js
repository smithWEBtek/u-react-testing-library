import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial neutral color', () => {
  render(<App />);
  const buttonText = screen.getByText('Turn Blue');

  expect(buttonText).toBeInTheDocument();
  expect(buttonText).toHaveClass('gray');
});

test('button text changes to blue when clicked once', () => {
  render(<App />);
  const buttonText = screen.getByText('Turn Blue');
  fireEvent.click(buttonText);

  expect(buttonText).toHaveClass('blue');
});

test('button text changes to red when clicked twice', () => {
  render(<App />);
  const buttonText = screen.getByText('Turn Blue');
  fireEvent.click(buttonText);
  fireEvent.click(buttonText);

  expect(buttonText).toHaveClass('red');
});

test('button text changes from turn blue, to turn red', () => {
  render(<App />);
  const buttonText = screen.getByText('Turn Blue');
  fireEvent.click(buttonText);

  expect(buttonText.textContent).toBe('Turn Red');
});

test('button text changes from turn red, to turn blue', () => {
  render(<App />);
  const buttonText = screen.getByText('Turn Blue');
  fireEvent.click(buttonText);
  fireEvent.click(buttonText);

  expect(buttonText.textContent).toBe('Turn Blue');
});


// test('renders learn react link v1', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders learn react link v2', () => {
//   render(<App />);
//   const linkElement = screen.getByText('Learn React');
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders learn react link v4', () => {
//   render(<App />);
//   const linkElement = screen.getByText('Learn React');
//   expect(linkElement.textContent).toBe('Learn React');
// });

// test('renders learn react link v5', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement.textContent).toBe('Learn React');
// });

// test('renders learn react link v6', () => {
//   render(<App />);
//   const linkElement = screen.getByRole('link', { name: /learn react/i });
//   expect(linkElement.textContent).toBe('Learn React');
// });
