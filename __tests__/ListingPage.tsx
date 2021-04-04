import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

describe('Listing Page', () => {
  test('Heading should be visible', async () => {
    const { container } = render(<Home />);
    const heading = container.querySelector('h1');

    expect(heading).toBeVisible();
    expect(heading.textContent).toBe('Results for #space');
  });

  test('Search Form should be visible', async () => {
    const { container } = render(<Home />);
    const form = container.querySelector('form');

    expect(form).toBeInTheDocument();
  });
});
