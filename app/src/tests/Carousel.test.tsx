import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Slider from '../components/Carousel/Slider';

describe('<Slider />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Slider />);
    const carousel = getByTestId('Slider');

    expect(carousel).toBeInTheDocument();
  });
});
