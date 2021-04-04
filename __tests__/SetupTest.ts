import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

test('Tests setup verification', () => {
  document.body.innerHTML = `
    <span data-testid="not-empty"></span>
  `;

  expect(screen.queryByTestId('not-empty')).toBeEmptyDOMElement();
});
