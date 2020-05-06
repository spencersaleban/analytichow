import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingPage from '../views/LandingPage/LandingPage';

describe('<LandingPage />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<LandingPage />);
    const landingPage = getByTestId('LandingPage');

    expect(landingPage).toBeInTheDocument();
  });
});
