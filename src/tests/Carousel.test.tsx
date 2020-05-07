import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from '../components/Carousel/Carousel';

describe('<Carousel />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Carousel />);
    const carousel = getByTestId('Carousel');

    expect(carousel).toBeInTheDocument();
  });
});