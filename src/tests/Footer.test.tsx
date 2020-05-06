import * as React  from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer/Footer';

describe('<Header />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId('Footer');

    expect(footer).toBeInTheDocument();
  });
});
