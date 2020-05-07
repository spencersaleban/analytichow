import * as React  from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomTabs from '../components/CustomTabs/CustomTabs';

describe('<CustomTabs />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<CustomTabs />);
    const customTabs = getByTestId('CustomTabs');

    expect(customTabs).toBeInTheDocument();
  });
});
