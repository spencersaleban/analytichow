import * as React  from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from '.../components/components/Card/Card';

describe('<Card />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Card />);
    const card = getByTestId('Card');

    expect(card).toBeInTheDocument();
  });
});
