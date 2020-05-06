import * as React  from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Typography from '../components/Typography/Typography';

describe('<Typography />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Typography />);
    const typography = getByTestId('Typography');

    expect(typography).toBeInTheDocument();
  });
});
