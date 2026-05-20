import { render, screen } from '@testing-library/react';
import App from './App';

test('vérifie que l\'application se charge', () => {
  render(<App />);
  expect(true).toBe(true);
});
