import { render, screen } from '@testing-library/react';
import App from './App';

test('renders favourite movies heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/My favourite movies to watch/i);
  expect(headingElement).toBeInTheDocument();
});
