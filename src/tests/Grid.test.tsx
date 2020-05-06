import * as React  from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Grid from '../components/Grid/Grid';

describe('<Grid />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Grid />);
    const grid = getByTestId('Grid');

    expect(grid).toBeInTheDocument();
  });
});
