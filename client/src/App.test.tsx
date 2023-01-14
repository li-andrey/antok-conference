import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hakuna', () => {
  render(<App />);
  const linkElement = screen.getByText(/hakuna/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders react logo', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/^logo$/i);
  expect(imgElement).toBeInTheDocument();
})


test('сложение положительных чисел не равно нулю', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});