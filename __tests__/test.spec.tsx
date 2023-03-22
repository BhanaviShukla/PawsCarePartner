import { screen } from '@testing-library/react';
import Home from '../pages/index';
import { appRenderer } from '@tests/test-utils';

describe('Home', () => {
  it('renders a heading', () => {
    appRenderer(<Home />);

    const heading = screen.getByRole('banner');

    expect(heading).toBeInTheDocument();
  });
});
