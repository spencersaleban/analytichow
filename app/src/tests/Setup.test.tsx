import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Setup from './Setup';

describe('<Setup />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Setup />);
    const setup = getByTestId('Setup');

    expect(setup).toBeInTheDocument();
  });
});