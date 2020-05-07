import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reports from './Reports';

describe('<Reports />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Reports />);
    const reports = getByTestId('Reports');

    expect(reports).toBeInTheDocument();
  });
});